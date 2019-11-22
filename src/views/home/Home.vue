<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control" :titles="['流行','新款','精品']" @tabClick="tabClick" ref="tabControl1" v-show="isFixed"/>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-upLoad="true" @scroll="contentScroll" @pullingUp="loadMore" >
      <home-swiper :banner="banners" @swiperImagesLoad="swiperImagesLoad"/>
      <recommend-view :recommends="recommends" />
      <fulter />
      <tab-control class="tab-control" :titles="['流行','新款','精品']" @tabClick="tabClick" ref="tabControl2"/>
      <good-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backclick" v-show="isShowBackTop"/>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
import RecommendView from "./RecommendView";
import TabControl from "components/content/mainTabbar/TabControl";
import GoodList from "components/content/goods/GoodsList";
import Fulter from "./Fulter";
import Scroll from "components/common/scroll/Scroll";
import HomeSwiper from './HomeSwiper'
import { debounce } from 'common/utils'
import { itemListenerMixin,backTopMixin } from 'common/mixin'

export default {
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    TabControl,
    GoodList,
    Fulter,
    Scroll,
    HomeSwiper
  },
  data() {
    return {
      //    result: null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      offsetTop: 0 ,
      isFixed: false,
      saveY: 0,
      itemImgListen: null
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

  },
  mixins: [itemListenerMixin,backTopMixin],
  mounted() {
    
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    this.$bus.$off('itemImageLoad',this.itemImgListen)
  },
  activated() {},
  methods: {
    swiperImagesLoad() {
     this.offsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    tabClick(index) {
      switch (index) {
        case 0:1
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      if(this.$refs.tabControl1 != undefined){
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      } 
    },
    contentScroll(position) {
      this.listenShowBackTop(position)
      this.isFixed = (-position.y) > this.offsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      // this.$refs.scroll.scroll.refresh()
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        // this.result =res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    }
  }
};
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control{
  position: relative;
  z-index: 9;
}
</style>