<template>
  <div>
    <div class="swiper-demo">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(item, index) in swiperss" :key="index">
              <img :src="item" alt="" width="100%" height="280px">
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'swiperBox',
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true,
      observer: true
      // observeParents: true,
      // autoplay: true
    })
  },
  props: {
    swiperss: Array
  }
}
</script>

<style lang="scss" scoped>
</style>
