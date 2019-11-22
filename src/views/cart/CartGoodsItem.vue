<template>
  <div class="shop-item">
    <check-btn :is-checked="product.isShow" @click.native="checkClick"/>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-text">
      <div class="title">{{product.title}}</div>
      <div class="desc">{{product.desc}}</div>
      <div class="count">
        <div class="count-price">￥{{product.price}}</div>
        <div class="count-num">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkBtn/CheckBtn'
  export default {
    name:'CartGoodsItem',
    props:{
      product: {
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

    components: {
      CheckBtn
    },

    computed: {
      
    },

    beforeMount() {},

    mounted() {},

    methods: {
      checkClick() {
        this.product.isShow = !this.product.isShow
      }
    },

    watch: {}

  }

</script>
<style scoped>
.shop-item{
  display: flex;
  width: 100%;
  height: 115px;
  padding: 2%;
  border-bottom: 2px solid #cccccc;
}
.item-img{
  width: 23%;
  height: 100px;
  float: left;
}
.item-img img{
  width: 100%;
  height: 100px;
}
.item-text{
  margin-left: 5%;
  width: 67%;
  float: left;
}
.item-text div{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-text .title{
   font-size: 18px;
}
.item-text .desc{
  font-size: 16px;
  margin-top: 10px;
}
.count{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.count-price {
  color: orange;
  font-size: 16px;
}
.count-num {
  font-size: 14px;
  align-items: center;
  display: flex;
}
</style>