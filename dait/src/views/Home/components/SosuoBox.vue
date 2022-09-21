<template>
  <div class="search">
    <div class="sosuolan" href="javascript:;">
      <div class="place">
        <img :src="didian" alt="">
        <span>送至:</span>
        <span class="site">山东菏泽紫云台</span>
        <span>></span>
      </div>
      <div class="seek">
        <img :src="sosuo" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SosuoBox',
  data () {
    return {
      didian: require('@/assets/img/didian.svg'),
      sosuo: require('@/assets/img/sosuo.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  width: 100%;
  height: 60px;
  .sosuolan{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5px;
    .place{
      display: flex;
      align-items: center;
      font-size: 16px;
      color: rgb(161, 161, 161);
      flex: 3;
      .site{
        padding-left: 5px;
      }
      img{
        width: 20px;
        height:20px
      }
    }
    .seek{
      flex: 1;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      img{
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
