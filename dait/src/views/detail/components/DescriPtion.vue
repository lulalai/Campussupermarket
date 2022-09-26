<template>
  <div class="description">
      <div class="plce">
          <span>¥</span>
          <span class="jiage">56.91</span>
          <del>¥319.5</del>
      </div>
      <div class="jilei">
          <span>累计销售2233份</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DescriPtion'
}
</script>

<style lang="scss">
.description{
    position: absolute;
    top: 250px;
    z-index: 99;
    width: 100%;
    height: 60px;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
    background-color: rgb(233, 78, 31);
    display: flex;
    flex-direction: column;
    padding: 7px 12px;
    .plce{
        color: honeydew;
        span{
            font-size: 12px;
        }
        .jiage{
            font-size: 18px;
            margin-right: 5px;
        }
        del{
            font-size: 12px;
        }
    }
    .jilei{
        color: honeydew;
        span{
            font-size: 12px;
        }
    }
}
</style>
