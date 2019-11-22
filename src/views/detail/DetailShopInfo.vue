<template>
  <div class="shopInfo">
    <div class="shopInfo-top">
      <img :src="shop.shopLogo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shopInfo-content">
      <div class="shopInfo-content-left">
        <div class="">
          <span>{{shop.cSells | sellCountFilter}}</span>
          <span>总销量</span>
        </div>
        <div class="">
          <span>{{shop.cGoods}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shopInfo-content-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="door"> 
      <div class="enterShop">进店逛逛</div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'DetailShopInfo',
    props:{
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data () {
      return {

      };
    },
    filters : {
      sellCountFilter(value) {
        let result = value
        if(value > 10000){
          result = (result / 10000).toFixed(1) + "万"
        }
        return result
      }
    },
    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style scoped>
.shopInfo img{
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
}
.shopInfo-top{
  margin-top: 10px;
  padding-left: 6px;
  display: flex;
  justify-content: flex-start;
}
.shopInfo-top span{
  color: #999;
  display: block;
  line-height: 50px;
  margin-left: 10px;
  font-size: 16px;
}
.shopInfo-content {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.shopInfo-content-left{
  flex: 1;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 16px;
  color: #999;
  border-right: 1px solid #cccccc;
  margin-top: 10px;
}
.shopInfo-content-left span{
  height: 21px;
  display: block;
  line-height: 21px;
}
.shopInfo-content-right{
  flex: 1;
}
.shopInfo-content-right table{
  margin: 0px auto;
}
.shopInfo-content-right td {
  line-height: 21px;
  font-size: 14px;
  text-align: center;
  padding-right: 8px;
}
.score,.better{
  color: green;
}
.score-better,.better-more{
  color: red;
}
.door{
  width: 100%;
  border-bottom: 3px solid #cccccc;
}
.enterShop{
  width: 50%;
  height: 30px;
  background:#ccc;
  margin: 0px auto;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>