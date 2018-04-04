const Mock = require('mockjs')

const Random = Mock.Random

module.exports = {
  getList: {
    method: 'GET',
    url: '/api/list',
    handleCtx: (ctx) => {
      ctx.response.status = 200
    },
    data: () => {
      let list = []

      for (let i = 0; i < 10; i++) {
        list.push({
          id: i,
          title: Random.csentence()
        })
      }
      return {
        result: 'success',
        code: 10000,
        list
      }
    }
  }
}
