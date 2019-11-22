<template>
  <div>
    <swiper :options="swiperOption" class="home-swiper">
      <swiper-slide  v-for="(item,index) in banner" :key="index">
        <img :src="item.image" alt="" @load="swiperImagesLoad">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper , swiperSlide} from 'vue-awesome-swiper'
  export default {
    name:'HomeSwiper',
    props:{
      banner: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data () {
      return {
        swiperOption: {
          autoplay: true,
          pagination: {
            el: ".swiper-pagination"
          }
        },
        isLoad: false
      };
    },

    components: {
      swiper,
      swiperSlide
    },

    computed: {},

    beforeMount() {},

    mounted() {
      
    },

    methods: {
      swiperImagesLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImagesLoad')
          this.isLoad = true
        }
      }
    },

    watch: {}

  }

</script>
<style scoped>
.home-swiper img{
  width: 100%
}
/deep/ .swiper-pagination-bullet-active{
 background: deeppink;
}
</style>