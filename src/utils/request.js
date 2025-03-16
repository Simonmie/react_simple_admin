import axios from 'axios'
import { getToken } from '../utils'

// 根域名配置 超时设置
const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0', // api的base_url
  timeout: 5000, // 请求超时时间
})

// 添加请求拦截器:在请求发送之前做一些事情
request.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器:在响应之后做一些事情
request.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export { request }
