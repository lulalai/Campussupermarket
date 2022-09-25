import axios from '@/utils/axios'

const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    list: (params) => axios.get('/product', params),
    category: () => axios.get('/product/category')
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
