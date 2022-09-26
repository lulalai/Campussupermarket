import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/main/indexBox.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home/HomeView')
      },
      // 分类
      {
        path: '/classify',
        component: () => import('@/views/Classify/classifyBox')
      },
      // 购物车
      {
        path: '/car',
        component: () => import('@/views/shoppingTrolley/shoppingBox')
      },
      // 我的
      {
        path: '/mine',
        component: () => import('@/views/mine/mineBox')
      }
    ]
  },
  {
    path: '/detailBox/:id',
    component: () => import('@/views/detail/detailBox')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
