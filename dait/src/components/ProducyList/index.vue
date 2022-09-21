<template>
<div class="shangping">
  <div class="commodit"  v-for="(item, index) in list" :key="index">
      <div class="img">
          <img :src="item.img" alt="">
      </div>
      <div class="text">
          <div class="commodit_text">
              <span>{{item.name}}</span>
              <span>积累1.5万分 / 一拼31份</span>
              <div class="buy">
                  <span>自营</span>
                  <span>团购</span>
              </div>
          </div>
          <div class="price">
              <div class="jiage">
                  <span class="at_present">{{item.categoryId}}</span>
                  <s class="before">{{item.price}}</s>
              </div>
              <div class="shopping_trolley">
                  <img :src="icon" alt="">
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'product-list',
  data () {
    return {
      icon: require('@/assets/img/gowuchered.svg')
    }
  },
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.shangping{
    margin-bottom: 70px;
.commodit{
    margin: 15px 0px;
    border-top: 1px solid rgb(233, 233, 233);
    // border-bottom: 1px solid rgb(233, 233, 233);
    width: 100%;
    height: 100%;
    display: flex;
    padding: 8px 3px;
    .img{
        flex: 1;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .text{
        flex: 2;
        display: flex;
        flex-direction: column;
        .commodit_text{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            span:nth-child(1){
                font-size: 18px;
            }
            span:nth-child(2){
                color: rgb(206, 206, 206);
                font-size: 16px;
            }
            .buy{
                span{
                    font-size: 12px;
                    padding: 2px 10px;
                    margin-left: 5px;
                    background-image: linear-gradient(to right, rgb(255, 124, 2) , rgb(240, 51, 17));
                    color: #ffffff;
                    border-radius: 10px;
                }
            }
        }
        .price{
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .jiage{
                .at_present{
                    font-size: 20px;
                    color: red;
                }
                .before{
                    font-size: 14px;
                    color: rgb(206, 206, 206);
                }
            }
            .shopping_trolley{
                margin-right: 10px;
                background-color: rgb(236, 137, 6);
                padding: 5px;
                border-radius: 50%;
            }
        }
    }
}
}
</style>
