const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

const router = require('./route')

app.use(bodyParser())
app.use(router.routes())

app.listen(3000, () => {
  console.log('Mock Server is running')
})
