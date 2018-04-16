import { CHANGE_LANG } from '../mutation-types'
import { save, read } from '@/utils/storage'

const state = {
  lang: read('lang') || 'zh-CN'
}
const getters = {}
const mutations = {
  [CHANGE_LANG] (state, payload) {
    state.lang = payload.lang
    save('lang', payload.lang)
  }
}
const actions = {
  changeLang ({ commit }, payload) {
    commit(CHANGE_LANG, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
