import fetch from '@/service/http'

export default {
  getList: config => fetch('/api/list', 'GET', config)
}
