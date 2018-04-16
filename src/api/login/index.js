import fetch from '@/service/http'

export default {
  login: config => fetch('/api/login', 'POST', config),
  getUserInfo: config => fetch('/api/userInfo', 'GET', config),
  logout: config => fetch('/api/logout', 'POST', config)
}
