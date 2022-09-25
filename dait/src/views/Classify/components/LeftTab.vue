<template>
  <div class="tab">
    <div class="left_tab">
      <a href="javascript:;"
       v-for="(item, index) in leftMenu"
       :key="index"
       :class="{
            active: activeIndex === index
        }"
        @click="change(index)"
       >
       {{item.categoryName}}
       </a>
    </div>
    <div class="right-tab">
      <div class="swiper-demo">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(items, index) in rightMenu" :key="index">
              <a href="javascript:;"
               :class="{
                actives: listIndex === index
              }"
              @click="changes(index)"
        >{{items.categoryName}}</a>
            </div>
          </div>
        </div>
      </div>
      <producy-list class="producy" :list="products" />
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import Swiper from 'swiper'
// Import Swiper styles
import 'swiper/css/swiper.min.css'
import producyList from '../../../components/ProducyList/index.vue'
import scrool from '../../../../mixins/scrool'
export default {
  name: 'LeftTab',
  mixins: [scrool],
  data () {
    return {
      activeIndex: 0,
      listIndex: 0,
      products: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        category_id: 1
      }
    }
  },
  components: {
    producyList
  },
  props: {
    leftMenu: Array,
    rightMenu: Array
  },
  methods: {
    change: function (index) {
      this.activeIndex = index
      this.listIndex = 0
      this.fetchProductParams.category_id = index
      this.$emit('change', index)
    },
    changes: function (index) {
      this.listIndex = index
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      // this.fetchProductParams.category_id = item.categoryId
      // this.fetchProductParams.category_id = item.id
      if (this.fetchProductParams.page === 1) {
        this.products = res.data
        console.log(this.products)
      } else {
        this.products = this.products.concat(res.data)
      }
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      observer: true,
      observeParents: true,
      slidesPerView: 4
    })
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  created () {
    this.fetchProductList()
  },
  scrollBottom () {
    this.fetchProductParams.page += 1
  }
}

</script>

<style lang="scss" scoped>
.tab{
  width: 100%;
  height: 100%;
  display: flex;
  .left_tab{
    width: 20%;
    display: flex;
    flex-direction: column;
    flex: 2;
    font-size: 16px;
    background-color: rgb(245, 245, 245);
    a{
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      color: #999999;
    }
  }
  .right-tab{
    width: 80%;
    .swiper-demo{
      width: 100%;
      height: 40px;
    border-bottom: 1px solid #E9E9E9;
      .swiper-container{
      width: 100%;
      height: 100%;
      .swiper-slide{
       width:60px;/*设为固定值*/
       width:auto;/*根据内容调整宽度*/
       text-align: center;
    a{
      width: 100%;
      line-height: 40px;
      height: 100%;
    }
  }
    }
    }
  }
}
 .active{
      color: rgb(233, 0, 0) !important;
      font-weight: 700;
    }
    .actives{
      color: rgb(233, 0, 0) !important;
      font-weight: 700;
    }
</style>
