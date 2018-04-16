import { login as api } from '@/api'
import { SET_TOKEN, SET_USER_INFO, LOG_OUT } from '../mutation-types'

import { read, save, clear } from '@/utils/storage'

const state = {
  token: read('token'),
  firstName: '',
  lastName: '',
  permission: []
}

const getters = {
  fullName (state) {
    return state.firstName + state.lastName
  },

  hasUserInfo (state, getters) {
    return state.token && getters.fullName
  },

  isLoggedIn (state) {
    return state.token
  }
}

const mutations = {
  [SET_TOKEN] (state, payload) {
    state.token = payload.token
  },

  [SET_USER_INFO] (state, payload) {
    state.firstName = payload.firstName
    state.lastName = payload.lastName
    state.permission = payload.permission
  },

  [LOG_OUT] (state) {
    state.token = ''
    state.firstName = ''
    state.lastName = ''
  }
}

const actions = {
  async login ({ commit }, payload) {
    try {
      let response = await api.login(payload)
      let token = response.data.token
      // 设置token到state
      commit(SET_TOKEN, {
        token: token
      })
      // 保存token到sessionStorage
      save('token', token)
    } catch (e) {
      // TODO 登录失败，给出提示
      console.log('登录失败:', e)
    }
  },

  async getUserInfo ({ commit }) {
    try {
      let response = await api.getUserInfo()
      commit(SET_USER_INFO, response.data.user)
    } catch (e) {
      // TODO 获取用户信息失败，给出提示
      console.log('获取用户信息失败：', e)
    }
  },

  async logout ({ commit }) {
    try {
      await api.logout()
      commit(LOG_OUT)
      // 清除本地存储中token
      clear('token')
    } catch (e) {
      // TODO 登出失败，给出提示
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
