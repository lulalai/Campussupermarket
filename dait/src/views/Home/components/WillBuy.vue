<template>
  <div class="remaizhuanqu">
      <div class="bigo">
          <img :src="bigo" alt="">
          <span>大家都在买</span>
      </div>
      <div class="zhuanqu">
          <img v-for="(item, index) in remai" :key="index" :src="item.icon" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'WillBuy',
  data () {
    return {
      bigo: require('@/assets/img/1663568018848.png')
    }
  },
  props: {
    remai: Array
  }
}
</script>

<style lang="scss" scoped>
.remaizhuanqu{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .bigo{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        img{
            width: 100px;
            height: 100%;
        }
        span{
            font-size: 16px;
            font-weight: 500;
        }
    }
    .zhuanqu{
        display: flex;
        width: 100%;
        height: 100%;
        img{
            width: 33.3333333%;
        }
    }
}
</style>
