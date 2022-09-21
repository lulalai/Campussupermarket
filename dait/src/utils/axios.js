import axios from 'axios'
const service = axios.create({
  baseURL: '/api',
  timeout: 10000
})
export default {
  ...service,
  get (url, data) {
    return service.get(url, {
      params: data
    })
  }
}
