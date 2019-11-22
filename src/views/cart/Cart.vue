<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <shop-cart/>
    <cart-bottom-bar class="bottom-bar"/>
  </div>
</template>
<script>
 import ShopCart from './ShopCart'
 import NavBar from 'components/common/navbar/NavBar'
 import CartBottomBar from './CartBottomBar'
  export default {
   components:{
     ShopCart,
     NavBar,
     CartBottomBar
   },
   computed: {
     cartLength() {
       return this.$store.state.cartList.length
     }
   },
   
  };
</script>
<style scoped>
  .cart-nav{
    background: deeppink;
    color: #ffffff;
  }
  .cart{
    height: 100vh;
  }
</style>