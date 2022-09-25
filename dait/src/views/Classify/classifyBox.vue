<template>
  <div>
    <sosuo-box />
    <left-tab :leftMenu="leftMenu" :rightMenu="rightMenu" @change="change" />
  </div>
</template>
<script>
import LeftTab from './components/LeftTab.vue'
import SosuoBox from './components/SosuoBox.vue'
export default {
  name: 'classifyBox',
  components: {
    SosuoBox,
    LeftTab
  },
  data () {
    return {
      leftMenu: [],
      rightMenu: [],
      index: 0
    }
  },
  created () {
    this.fetchcategorys()
  },
  methods: {
    async fetchcategorys () {
      const res = await this.$api.product.category()
      this.leftMenu = res.data
      this.rightMenu = res.data[0].children
    },
    aaa (index) {
      this.rightMenu = this.leftMenu[index].children
    },
    change (val) {
      this.index = val
    }
  },
  watch: {
    index (val) {
      this.aaa(val)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
