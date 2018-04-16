import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/(list)?',
      name: 'list',
      component: () => import('@/view/list'),
      meta: {
        skipAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login'),
      meta: {
        skipAuth: true
      }
    }
  ]
})
