<template>
  <div>
    <sosuo-box />
    <swiper-box :maowu="maowu" />
    <goods-catego :tab="tab" />
    <will-buy :remai="remai" />
    <div ref="content">
      <tab-bar
      class="tab"
      :hot_nav="hot_nav"
      @change="navchange"
      />
      <producy-list :list="products" />
    </div>
  </div>
</template>
<script>
import SosuoBox from './components/SosuoBox'
import SwiperBox from './components/SwiperBox'
import GoodsCatego from './components/GoodsCatego'
import WillBuy from './components/WillBuy'
export default {
  name: 'HomeView',
  data () {
    return {
      maowu: [],
      tab: [],
      hot_nav: [],
      remai: [
        {
          icon: require('@/assets/img/1.png')
        },
        {
          icon: require('@/assets/img/2.png')
        },
        {
          icon: require('@/assets/img/3.png')
        }
      ],
      products: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        classid: 1
      }
    }
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  components: {
    SosuoBox,
    SwiperBox,
    GoodsCatego,
    WillBuy
  },
  created () {
    this.$api.home.base().then(res => {
      this.maowu = res.data.data.banner
      this.tab = res.data.data.tab
      this.hot_nav = res.data.data.hot_nav
    })
    this.fetchProductList()
  },
  mounted () {
    window.addEventListener('scroll', this.scroll, false)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll, false)
  },
  methods: {
    scroll () {
      // window的高度
      const windowHeight = window.innerHeight
      // 页面的高度
      const pageHeight = document.body.clientHeight
      // 发生变化的高度
      const scrollTop = document.querySelector('html').scrollTop
      if (pageHeight - scrollTop < windowHeight + 1) {
        this.fetchProductParams.page += 1
      }
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page === 1) {
        this.products = res.data.data
      } else {
        this.products = this.products.concat(res.data.data)
      }
    },
    navchange (index, item) {
      this.fetchProductParams.classid = item.id
      this.fetchProductParams.page = 1
      // const scrollTop = document.querySelector('html').scrollTop
      // if (scrollTop > top) {
      window.scrollTo(0, this.$refs.content.offsetTop)
      // }
    }
  }
}
</script>

<style lang="scss">
.tab{
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>
