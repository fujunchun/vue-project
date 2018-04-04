import axios from 'axios'
import conf from '@/config/axios.default.conf'

const instance = axios.create(conf)

// 拦截请求
instance.interceptors.request.use((config) => {
  console.log('request config:', config)
  // TODO 如果存在token,在头部加入token
  let token = '1111'
  if (token) {
    config.headers.Authorization = 'token'
  }
  return config
}, error => Promise.reject(error))

// 拦截响应
instance.interceptors.response.use((response) => {
  let data = response.data
  if (data.result === 'failed') {
    // TODO 在这里对一些返回失败信息做处理，给出提示
    switch (data.code) {
      case 10001:
        console.log('error 10001')
        break
    }
    return Promise.reject(response)
  }
  return response
}, (error) => {
  // 对401进行处理
  let response = error.response

  if (response.status === 401) {
    // TODO 登出
  }
  return Promise.reject(error)
})

export default function (url, method, config = {}) {
  return instance({
    url,
    method,
    ...config
  })
}
