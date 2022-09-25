<template>
  <div class="tab-bar">
      <nav>
          <a href="javascript:;"
            v-for="(item, index) in hot_nav"
            :key="index"
            :class="{
              active: activeIndex === index
            }"
            @click="change(index)"
           >{{item[tabName]}}
          </a>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    hot_nav: Array,
    tabName: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
      this.$emit('change', index, this.hot_nav[index])
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar{
  background-color: #fff;
  margin-top: 20px;
    width: 100%;
    height: 52px;
    margin-top: 10px;
    nav{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        a{
          // display: flex;
          // flex: 1;
          // align-items: center;
          // justify-content: center;
          font-size: 16px;
          color: #4A4A4A;
          &.active{
            color: red;
            font-size: 16px;
            font-weight: bold;
          }
        }
    }
}
</style>
