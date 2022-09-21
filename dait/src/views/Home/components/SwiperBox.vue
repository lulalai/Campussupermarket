<template>
  <div class="heabar">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
       v-for="(item, index) in maowu"
       :key="index"
        >
        <img :src="item.image" />
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'hea-bar',
  props: {
    maowu: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.heabar{
  img{
    width: 100%;
    height: 150px;
  }
}
</style>>
