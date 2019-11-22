<template>
  <div>
    <swiper :options="swiperOption" class="detail-swiper">
      <swiper-slide v-for="(item,index) in topImages" :key="index" class="topImages">
        <img :src="item" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import SwiperVue from "../../components/common/swiper/Swiper.vue";
export default {
  name: "",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },

  components: {
    swiper,
    swiperSlide
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
.topImages img {
  width: 100%;
}
/deep/ .swiper-pagination-bullet-active{
 background: deeppink;
}
</style>