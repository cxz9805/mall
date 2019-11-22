<template>
  <div class="bottom-bar">
    <div class="all-ellction">
      <check-btn :is-checked="allChecked" @click.native="allCheckClick"/>
      <div>全选</div>
    </div>
    <div class="totalPrice">
      合计：{{totalPrice}}
    </div>
    <div class="compute" @click="computeClick">
      去计算({{toCompute}})
    </div>
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkBtn/CheckBtn'
  export default {
    name:'CartBottomBar',
    props:{
      
    },
    data () {
      return {

      };
    },

    components: {
      CheckBtn
    },

    computed: {
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.isShow
        }).reduce((preValue,item) => {
          return preValue + item.price * item.count
        },0).toFixed(2)
      },
      toCompute() {
        return this.$store.state.cartList.filter(item => item.isShow).length
      },
      allChecked() {
        // return  !(this.$store.state.cartList.filter(item => !item.isShow).length)
        if(this.$store.state.cartList.length === 0) return false
        return !this.$store.state.cartList.find(item => !item.isShow)
      }
    },

    beforeMount() {},

    mounted() {},

    methods: {
      allCheckClick() {
        // this.product.isShow = !this.product.isShow
        // console.log('aaaa');
        if(this.allChecked) {
          this.$store.state.cartList.forEach(item => item.isShow = false)
        }else {
          this.$store.state.cartList.forEach(item => item.isShow = true)
        }
      },
      computeClick() {
        if(!this.allChecked) {
          this.$toast.show(('请添加新的商品'),2000);
        }
      }
    },

    watch: {}

  }

</script>
<style scoped>
.bottom-bar{
  height: 45px;
  display: flex;
  line-height: 45px;
  font-size: 16px;
}
.all-ellction{
  width:80px;
  display: flex;
  padding-left: 10px;
  
  background: #dddddd;
}
.totalPrice{
 flex: 1;
 background: #dddddd;
}
.compute{
  width: 80px;
  background: red;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
}
</style>