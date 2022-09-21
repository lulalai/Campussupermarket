import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/default.css'
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import api from './api'
import indexBox from './views/main/indexBox'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import TabBar from './components/TabBar/TabBar'
import ProducyList from './components/ProducyList/index'
Vue.config.productionTip = false
Vue.use(api)
Vue.component('indexBox', indexBox)
Vue.component('TabBar', TabBar)
Vue.component('ProducyList', ProducyList)
Vue.use(VueAwesomeSwiper /* { default global options } */)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
