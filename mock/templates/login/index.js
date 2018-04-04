const Mock = require('mockjs')

const Random = Mock.Random

module.exports = {
  login: {
    method: 'POST',
    url: '/api/login',
    handleCtx: (ctx) => {
      ctx.response.status = 200
    },
    data: () => {
      return {
        result: 'success',
        code: 10000,
        token: Random.string(20)
      }
    }
  },

  getUserInfo: {
    method: 'GET',
    url: '/api/userInfo',
    data: () => {
      return {
        result: 'success',
        code: 10000,
        user: {
          firstName: Random.first(),
          lastName: Random.last(),
          permission: ['article']
        }
      }
    }
  },

  logout: {
    method: 'POST',
    url: '/api/logout',
    data: () => {
      return {
        result: 'success',
        code: 10000
      }
    }
  }
}
