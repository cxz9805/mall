<template>
  <div class="shopCart">
    <scroll class="content" ref="scroll">
      <cart-goods-item v-for="(item,index) in this.$store.state.cartList" :key="index" :product="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartGoodsItem from './CartGoodsItem'
  export default {
    name:'ShopCart',
    props:[''],
    data () {
      return {

      };
    },

    components: {
      Scroll,
      CartGoodsItem
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},
    activated(){
      // console.log('aaaaaaaaaaa');
      this.$refs.scroll.refresh()
    },
    watch: {}

  }

</script>
<style scoped>
.shopCart{
  height: calc(100% - 44px - 49px - 45px);
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>