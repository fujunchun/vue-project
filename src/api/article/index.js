import fetch from '@/service/http'

export default {
  getArticle: config => fetch('/api/article', 'GET', config)
}
