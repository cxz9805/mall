<template>
    <div class="tab-control">
       <div v-for="(item,index) in titles" 
       :key="index" :class="{Active:index === currentIndex}" 
       @click="itemClick(index)" 
       class="tab-control-item">
           <span>{{item}}</span>
       </div>
    </div>
</template>
<script>
export default {
   name: "TabControl" ,
   props: {
       titles: {
           type:Array,
           default() {
               return[]
           }
       }
   },
   data(){
       return{
           currentIndex: 0
       }
   },
   methods:{
      itemClick(index){
           this.currentIndex = index
           this.$emit('tabClick',index)
       }
   }
}
</script>
<style scoped>
   .tab-control{
       display: flex;
       text-align: center;
       font-size: 15px;
       background: #ffffff;
       z-index: 9;
   }
   .tab-control-item{
       flex: 1;
       height: 40px;
       line-height: 40px;
   }
   .tab-control-item span {
       padding: 5px;
   }
   .Active span{
    border-bottom: 3px solid var(--color-high-text)
   }
   .Active{
       color:var(--color-high-text);

   }
</style>