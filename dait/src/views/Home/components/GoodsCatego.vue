<template>
  <div class="tabclass">
    <a href="javascript:;" v-for="(item, index) in tab" :key="index">
      <img :src="item.image">
      <span>{{item.text}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'GoodsCatego',
  data () {
    return {}
  },
  props: {
    tab: Array
  }
}
</script>

<style lang="scss" scoped>
.tabclass{
  width: 100%;
  height: 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  a{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 35px;
      height: 35px;
    }
    span{
      color: #777676;
    }
  }
}
</style>
