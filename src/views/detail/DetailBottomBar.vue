<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left">
      <div class="bottom-bar-item">
      <img src="~assets/img/客服.png" alt="">
      <span>客服</span>
    </div>
    <div class="bottom-bar-item">
      <img src="~assets/img/店铺.png" alt="">
      <span>店铺</span>
    </div>
    <div class="bottom-bar-item">
      <img src="~assets/img/收藏1.png" alt="">
      <span>收藏</span>
    </div>
    </div>
    <div class="bottom-bar-right">
      <div class="shop-car" @click="AddToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'DetailBottomBar',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      AddToCart() {
        this.$emit('addCart')
        
      }
    },

    watch: {}

  }

</script>
<style scoped>
.bottom-bar{
  position:relative;
  z-index: 9;
  height: 49px;
  display: flex;
  justify-content: flex-start;
}
.bottom-bar span{
  font-size: 13px;
  display: block;
  margin-top: 2px;
}
/* .bottom-bar-item{
  text-align: center;
} */
.bottom-bar img{
  width: 25px;
  height: 25px;
  display: block;
  margin-top: 3px;
}
.bottom-bar-left{
  flex: 1;
  display: flex;
  justify-content: space-around;
  background: #ffffff;
}
.bottom-bar-right{
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.bottom-bar-right div{
  flex: 1;
  font-size: 16px;
  text-align: center;
  line-height: 49px;
}
.shop-car{
  background: #FFDF0F;
  color: #000000;
}
.buy{
  background: #FF779A;
  color: #ffffff;
}
</style>