<template>
  <div class="detailnavbar">
    <nav-bar>
      <div slot="left" class="left"><img src="~assets/img/back.svg" alt="" @click="backClick"></div>
      <div slot="center" class="center">
        <div v-for="(item,index) in detail" :key="index" class="item" :class="{active:countindex===index}" @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
  export default {
    name:'',
    props:[''],
    data () {
      return {
         detail:['商品','参数','评论','推荐'],
         countindex: 0
      };
    },

    components: {
      NavBar
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      titleClick(index){
        this.countindex = index
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.back()
      }
    },

    watch: {}

  }

</script>
<style scoped>
.detailnavbar{
  position: relative;
  background: #ffffff;
  z-index: 99;
}
.center{
  display: flex;
  justify-content: space-around;
}
.center .item{
  flex: 1;
  font-size: 15px;
} 
.left img{
  vertical-align: middle;
}
.active{
  color: deeppink;
}

</style>