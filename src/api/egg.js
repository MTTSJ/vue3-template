import http from '../utils/http'
// const URL = 'http://127.0.0.1:3000'

export default {
  query(params) {
    return http.get(URL + '/api/queryAll', params)
  }
}