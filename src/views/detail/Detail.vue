<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :pull-upLoad="true" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-info :goodsInfo="goods"/>
      <detail-shop-info :shop="shopInfo"/>
      <detail-shop-show :detailInfo="detailShopInfo" @DetailShopImg="DetailShopImg"/>
      <detail-params-info ref="params" :params-info="detailParamsInfo"/>
      <detail-comment ref="comment" :comment="detailComment"/>
      <goods-list ref="recommend" :goods="reCommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
    <back-top @click.native="backclick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from './DetailNavBar'
import {getDetail,Goods,getRecommend} from '@/network/detail'
import DetailSwiper from './DetailSwiper'
import DetailInfo from './DetailInfo'
import DetailTabBar from './DetailTabBar'
import Scroll from 'components/common/scroll/Scroll'
import DetailShopInfo from './DetailShopInfo'
import DetailShopShow from './DetailShopShow'
import DetailParamsInfo from './DetailParamsInfo'
import DetailComment from './DetailComment'
import GoodsList from 'components/content/goods/GoodsList'
import { debounce } from 'common/utils'
import {itemListenerMixin,backTopMixin} from 'common/mixin'
import DetailBottomBar from './DetailBottomBar'
import { mapActions } from 'vuex'

  export default {
    name:'Detail',
    props:[''],
    data () {
      return {
        iid: null ,
        topImages: [],
        goods: {},
        shopInfo: {},
        detailShopInfo: {},
        detailParamsInfo: {},
        detailComment: {},
        reCommends: [],
        itemImgListen: null,
        indexCountY: [0,1000,2000,3000],
        getThemeTopY: null,
        currentIndex: 0
      };
    },
    created() {
      //1.获取iid
      this.iid = this.$route.params.iid
      //2.请求详情数据
      getDetail(this.iid).then(res => {
        // console.log(res)
        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // console.log(this.goods);
        this.shopInfo = data.shopInfo
        this.detailShopInfo = data.detailInfo
        this.detailParamsInfo = data.itemParams
        if(data.rate.cRate !== 0){
          this.detailComment = data.rate.list[0]
        }
      })
      //3.请求推荐数据
      getRecommend().then(res => {
        this.reCommends = res.data.list
        // console.log(this.reCommends);
      })
      this.getThemeTopY = debounce(() => {
        this.indexCountY = []
        this.indexCountY.push(0)
        this.indexCountY.push(this.$refs.params.$el.offsetTop)
        this.indexCountY.push(this.$refs.comment.$el.offsetTop)
        this.indexCountY.push(this.$refs.recommend.$el.offsetTop)
        this.indexCountY.push(Number.MAX_VALUE)
        // console.log(this.indexCountY)
      },1000)
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailInfo,
      Scroll,
      DetailShopInfo,
      DetailShopShow,
      DetailParamsInfo,
      DetailComment,
      GoodsList,
      DetailBottomBar
    },
    mixins: [itemListenerMixin,backTopMixin],
    mounted() {
     
    },
    updated() {
      
    },
    destroyed(){
     this.$bus.$off('itemImageLoad',this.itemImgListen)
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      ...mapActions(['addCart']),
      DetailShopImg() {
        // console.log('aaaaaaaaaa')
        this.newRefresh()
        this.getThemeTopY()
      },
      addCart() {
        // console.log('addCart');
        //获取购物车所需的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        //商品加入购物是否勾选(默认勾选)
        product.isShow = true;

        // this.$store.commit('addCart',product)
        // this.addCart(product).then(res => {
        //   console.log(res);
          
        // })
        this.$store.dispatch('addCart',product).then(res => {
          console.log(res);
          this.$toast.show(res,2000)
          
          
        })
        console.log(this.$toast);
      },
      titleClick(index) {
        // console.log(index)
         this.$refs.scroll.scrollTo(0,- (this.indexCountY[index]) ,500)
      },
      contentScroll(position) {
        this.listenShowBackTop(position)
        const positionY = -position.y
        let length = this.indexCountY.length
        for(let i = 0;i < length - 1;i ++) {
            // if(positionY > this.indexCountY[i] && positionY <= this.indexCountY[i+1]) {
            //   console.log(i);
            // if(this.currentIndex !== i && (i < length - 1 && (positionY >= this.indexCountY[i] && positionY < this.indexCountY[i+1])) || 
            // (i ===length -1 && positionY >= this.indexCountY[i])){
            //   this.currentIndex = i;
            //   // console.log(this.currentIndex);
            //   this.$refs.nav.countindex = this.currentIndex
            // }
            if(this.currentIndex !== i && (positionY >= this.indexCountY[i] && positionY < this.indexCountY[i+1] )) {
               this.currentIndex = i;
               this.$refs.nav.countindex = this.currentIndex
            }
          }
        }, 
    },

    watch: {}

  }

</script>
<style scoped>
.detail{
  height: 100vh;
  background: #ffffff;
  z-index: 1;
  position: relative;
}
.content{
  height: calc(100% - 44px - 49px);
  background: #ffffff;
  overflow: hidden;
}
</style>