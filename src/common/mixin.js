import { debounce } from 'common/utils'
export const itemListenerMixin = {
  data() {
    return {
      itemImgListen: null,
      newRefresh :null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh,300)
    this.itemImgListen = () => {
      this.newRefresh(20, 30, 'abc')
    }
    this.$bus.$on('itemImageLoad',this.itemImgListen)
  },
}
import BackTop from 'components/content/backtop/BackTop';
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop,
  },
  methods: {
    backclick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) >1000
    }
  },
}