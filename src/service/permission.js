import router from '@/router'
import store from '@/store'
import dynamicRoutes from '@/router/dynamicRoute'

import { read } from '@/utils/storage'

// 根据name来递归过滤route
function filter (routes, permissonList) {
  let result = routes.filter((route) => {
    if (permissonList.indexOf(route.name) > -1) {
      if (route.children && route.children.length) {
        route.children = filter(route.children, permissonList)
      }
      return true
    }

    return false
  })
  return result
}

// 对路由权限过滤，动态挂载路由
router.beforeEach(async (to, from, next) => {
  try {
    // 不需要权限的页面直接进入
    if (to.meta.skipAuth) {
      next()
    } else {
      // 本地存储存在token
      if (read('token')) {
        console.log('22222')
        // 没有拉取过用户信息
        console.log('user info:', store.getters['user/hasUserInfo'])
        if (!store.getters['user/hasUserInfo']) {
          await store.dispatch('user/getUserInfo')

          // 根据拉取到的用户权限，过滤路由
          const permission = store.state.user.permission

          router.addRoutes(filter(dynamicRoutes, permission))
        }
        next()
      } else {
        // 没有token， 未登录则重定向到登陆页
        next('/login')
      }
    }
  } catch (e) {
    console.error(e)
  }
})
