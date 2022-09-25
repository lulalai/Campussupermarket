<template>
  <div>
    <router-view></router-view>
      <nav class="footer-nav">
          <router-link
            v-for="(item, index) in tabs"
            :key="index"
            :to="item.path"
            active-class="active"
          >
            <img :src="item.icon" class="icon" />
            <img :src="item.select_icon" class="select_icon" />
            <span class="miaoshu">{{item.text}}</span>
          </router-link>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'indexBox',
  data () {
    return {
      tabs: [
        {
          path: '/home',
          text: '首页',
          icon: require('@/assets/img/shangdianhei.svg'),
          select_icon: require('@/assets/img/shangdianred.svg')
        },
        {
          path: '/classify',
          text: '分类',
          icon: require('@/assets/img/fenleihei.svg'),
          select_icon: require('@/assets/img/fenleired.svg')
        },
        {
          path: '/car',
          text: '购物车',
          icon: require('@/assets/img/gowuhei.svg'),
          select_icon: require('@/assets/img/gowuchered.svg')
        },
        {
          path: '/mine',
          text: '我的',
          icon: require('@/assets/img/wodehei.svg'),
          select_icon: require('@/assets/img/wodered.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-nav{
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 99;
  a{
    padding-bottom: 3px;
    padding-top: 7px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    .select_icon{
      display: none;
    }
    .icon{
      width: 25px;
      height: 25px;
    }
    &.active{
      .select_icon{
      width: 25px;
      height: 25px;
      display: block;
    }
    .icon{
      display: none;
    }
    .miaoshu{
      color: firebrick;
    }
    }
  }
}
</style>
