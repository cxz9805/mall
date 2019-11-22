<template>
  <div class="detailShopShow">
    <div class="start"></div>
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="end"></div>
    <div class="info-imgs" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
      <img :src="item" alt="" @load="DetailShopImg">
    </div>
  </div>
</template>

<script>

  export default {
    name:'DetailShopShow',
    props:{
      detailInfo: {
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

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      DetailShopImg() {
        this.$emit('DetailShopImg')
      }
    },

    watch: {}

  }

</script>
<style scoped>
.detailShopShow{
  margin-bottom: 15px;
  border-bottom: 3px solid #cccccc;
}
.detailShopShow img{
  width: 100%
}
.desc{
  font-size: 16px;
  padding: 8px;
}
.start{
  margin-left: 8px;
  margin-top: 10px;
  width: 100px;
  height: 1px;
  background:#999999;
  position: relative;
}
.start::before{
  content: "";
  width: 5px;
  height: 5px;
  display: block;
  background: black;
  position: absolute;
  bottom: 0;
}
.end{
  width: 100px;
  height: 1px;
  background: #999999;
  float: right;
  margin-right: 8px;
  position: relative;
  margin-bottom: 20px;
}
.end::before{
  content: "";
  width: 5px;
  height: 5px;
  display: block;
  background: black;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>