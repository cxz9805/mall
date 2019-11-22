<template>
  <div class="detailtabbar">
    <tab-bar>
      <detail-tab-bar-item class="item">
        <div slot="detail-icon">
          <img src="../../assets/img/联系.png" alt="">
        </div>
        <div slot="detail-text" class="detail-text">
          联系
        </div>
      </detail-tab-bar-item>
      <detail-tab-bar-item class="item">
        <div slot="detail-icon">
          <img src="../../assets/img/店铺.png" alt="">
        </div>
        <div slot="detail-text"  class="detail-text">
          店铺
        </div>
      </detail-tab-bar-item>
      <detail-tab-bar-item class="item">
        <div slot="detail-icon">
          <img src="../../assets/img/收藏1.png" alt="">
        </div>
        <div slot="detail-text"  class="detail-text">
          收藏
        </div>
      </detail-tab-bar-item>
      <detail-tab-bar-item class="item">
        <div slot="detail-text"  class="detail-text cate">
          加入购物车
        </div>
      </detail-tab-bar-item>
      <detail-tab-bar-item class="item">
        <div slot="detail-text"  class="detail-text go">
          购买
        </div>
      </detail-tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import DetailTabBarItem from './DetailTabBarItem'
export default {
  name: "",
  props: [""],
  data() {
    return {
      info:[
        {title:'联系',img:require('assets/img/联系.png')},
        {title:'店铺',img:require('assets/img/店铺.png')},
        {title:'收藏',img:require('assets/img/收藏1.png')},
      ]
    };
  },

  components: {
    TabBar,
    DetailTabBarItem
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style scoped>
.detailtabbar{
  width: 50%;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 999;
  justify-content: space-around;
  text-align: center;
}
.detailtabbar .detail-text{
 font-size: 12px;
 padding-top: 3px;
}
.item{
  flex: 1;
}
.detailtabbar img{
  width: 20px;
  margin-top: 3px;
}
.cate{
  background: yellow;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  line-height: 44px;
}
.go{
  background: deeppink;
  height: 50px;
  font-size: 20px;
  color: #ffffff;
   font-weight: bold;
   line-height: 44px;
}
</style>