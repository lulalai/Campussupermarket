<template>
  <div class="texts">
    <div class="products_text">
        <div class="name">{{names}}</div>
        <div class="surplus">剩余3458份</div>
    </div>
    <div class="share">
        <img src="../../../assets/img/fenxiang.svg" alt="">
        <span>分享好友</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductName',
  props: {
    names: String
  }
}
</script>

<style lang="scss">
.texts{
    margin-top: 50px;
    width: 100%;
    height: 80px;
    display: flex;
    padding: 5px 15px;
    background-color: rgb(255, 255, 255);
    .products_text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 8;
        .name{
            font-size: 16px;
        }
        .surplus{
            color:rgb(182, 181, 181);
            font-size: 12px;
        }
    }
    .share{
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        img{
            width: 40px;
            height: 40px;
            padding: 10px;
            border: 2px solid #fa4e05;
            border-radius: 50%;
        }
        span{
            font-size: 12px;
            color:#fa4e05 ;
        }
    }
}
</style>
