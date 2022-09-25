<template>
  <div class="sosuolan">
      <div class="sosuo">
          <img :src="icon">
          <span>搜索校园超市商品</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SoSuoBox',
  data () {
    return {
      icon: require('@/assets/img/sosuo.svg'),
      leftMenu: []
    }
  }
}
</script>

<style lang="scss" scoped>
.sosuolan{
    width: 100%;
    height: 30px;
    margin: 10px 0;
    .sosuo{
    width: 90%;
    height: 100%;
    background-color: rgb(243, 242, 242);
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    img{
        flex: 1;
        width: 20px;
        height: 20px;
        margin-left: 10px;
      }
      span{
          flex: 15;
          color: rgb(197, 195, 195);
          font-size: 14px;
          margin-left: 12px;
      }
    }
}
</style>
