/* eslint-disable */

axios.defaults.timeout = 35000
axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] = 'application/json charset=UTF-8'
// request拦截器
axios.interceptors.request.use(
  config => {
    console.log('request.config:', config)
    console.log('time' + new Date())
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// respone拦截器  //拦截响应response，并做一些错误处理
axios.interceptors.response.use(
  response => {
    console.log('response' + response)
    // 通用逻辑，请求出错，全屏弹层提示
    if (!response.data) {
      return response
    }

    const data = response.data

    if (data && data.code === 0) {
      return response.data.content
    } else {
      //处理错误
      if (data.code === 40002) { //此接口没有授权 由于您长时间未操作本次登陆失效，请点击重新登录
        alert('由于您长时间未操作本次登陆失效，请点击重新登录')
      } else if (data.code === 5001) { //此次请求ajax超时  本次操作请求超时，请重新操作
        alert('本次操作请求超时，请重新操作')
      } else {
        alert('系统请求异常，请重新打开')
      }
    }
  },
  error => {
    console.log(error)
    if (error.message.indexOf('timeout') != -1) {
      error.message = '本次操作请求超时，请重新操作'
    } else {
      error.message = '系统请求异常'
    }
    alert(error.message)
  }
)

export default {
  get (url, params = {}) {
    var data = params || {}
    data['sendTime'] = new Date().getTime()
    return axios.get(url, {
      params: data
    })
  },
  post (url, params = { data: {}, contentType: '' }) {
    if (params.contentType && params.contentType == 'form') {
      return axios.post(url, qs.stringify(params.data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    } else if (params.contentType && params.contentType == 'formData') {
      return axios.post(url, params.data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } else {
      return axios.post(url, params.data || params)
    }
  },
  getFile (url, params = {}) {
    var data = params || {}
    data['sendTime'] = new Date().getTime()
    return axios.get(url, {
      responseType: 'blob',
      params: data
    })
  },
  getCache (url, params = {}) {
    var data = params || {}
    return axios.get(url, {
      params: data
    })
  },
}