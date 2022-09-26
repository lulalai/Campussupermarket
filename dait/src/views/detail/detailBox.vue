<template>
  <div>
    <swiper-box :swiperss = swiperss.images />
    <description />
    <product-name :names = swiperss.name />
    </div>
</template>

<script>
import SwiperBox from './components/swiperBox.vue'
import description from './components/DescriPtion.vue'
import ProductName from './components/ProductName.vue'
export default {
  components: {
    SwiperBox,
    description,
    ProductName
  },
  name: 'detailBox',
  data () {
    return {
      swiperss: {},
      names: {}
    }
  },
  created () {
    this.fetchProductDetail()
  },
  methods: {
    async fetchProductDetail () {
      const id = this.$route.params.id
      const res = await this.$api.product.detailBox(id)
      this.swiperss = res.data
      console.log(this.swiperss)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
