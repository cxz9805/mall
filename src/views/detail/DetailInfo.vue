<template>
  <div class="detailinfo">
    <div class="info-title">{{goodsInfo.title}}</div>
    <div class="info-price">
      <span class="info-newPrice">{{goodsInfo.newPrice}}</span>
      <span class="info-oldPrice">{{goodsInfo.oldPrice}}</span>
      <span class="info-discount" v-show="goodsInfo.discount" :style="{backgroundColor: goodsInfo.discountBgColor}">{{goodsInfo.discount}}</span>
    </div>
    <div class="info-msg">
      <span v-for="index in goodsInfo.columns.length-1" :key="index">{{goodsInfo.columns[index-1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <div v-for="index in goodsInfo.services.length-1" :key="index">
        <img :src="goodsInfo.services[index-1].icon" alt="">
        <span>{{goodsInfo.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:{
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
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
.info-title{
  margin-top: 6px;
  font-size: 18px;
  text-align: left;
  padding: 4px;
}
.info-price{
  padding: 4px;
}
.info-newPrice{
  color: deeppink;
  font-weight: bold;
}
.info-oldPrice{
  color: #cccccc;
  font-size: 14px;
  text-decoration: line-through;
  margin-left: 4px;
}
.info-discount{
  color: #ffffff;
  font-size: 14px;
  margin-left: 6px;
  padding: 4px;
  border-radius: 10px;
  position: relative;
  top: -5px;
}
.info-msg{
  display: flex;
  justify-content: space-between;
  margin: 4px;
  margin-top: 6px;
  font-size: 14px;
  color: #cccccc;
  border-bottom: 1px solid #cccccc;
}
.info-services{
  display: flex;
  justify-content: space-between;
  padding: 4px;
  font-size: 12px;
  color: #999;
  margin-top: 10px;
  padding-bottom: 16px;
  border-bottom: 3px solid #cccccc;
}
.info-services img {
  width: 10px;
  height: 10px;
}
</style>