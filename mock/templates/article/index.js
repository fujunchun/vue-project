const Mock = require('mockjs')

const Random = Mock.Random

module.exports = {
  getArticle: {
    method: 'GET',
    url: '/api/article',
    handleCtx: (ctx) => {
      ctx.response.status = 200
    },
    data: (ctx) => {
      let query = ctx.request.query
      return {
        result: 'success',
        code: 10000,
        content: query.id + Random.cparagraph(10)
      }
    }
  }
}
