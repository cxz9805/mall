<template>
    <div class="tab-bar-item" @click="itemclick">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name:"TabBarItem",
    props:{
        path:String,
        activeColor: {
            type: String,
            default: '#d81e06'
        }
    },
    data(){
        return{
            // isActive:false
        }
    },
    computed:{
      isActive(){
          return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
          return this.isActive ?{color:this. activeColor}:{}
      }
    },
    methods:{
       itemclick(){
          this.$router.replace(this.path)
        }
    }
}
</script>
<style scoped>
 .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
 .tab-bar-item img{
     width: 24px;
     height: 24px;
     vertical-align: middle;
     margin-top: 3px;
     margin-bottom: 2px;
 }
</style>