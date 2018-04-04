const Router = require('koa-router')
const templates = require('../templates')

const router = new Router()

function createRoutes (pages) {
  Object.keys(pages).forEach((pageKey) => {
    let page = pages[pageKey]
    Object.keys(page).forEach((apiKey) => {
      let api = page[apiKey]
      let method = api.method.toLowerCase()
      router[method](api.url, (ctx, next) => {
        ctx.response.status = 200

        if (typeof api.handleCtx === 'function') {
          api.handleCtx(ctx)
        }
        ctx.response.body = api.data(ctx)
      })
    })
  })
}

createRoutes(templates)

module.exports = router
