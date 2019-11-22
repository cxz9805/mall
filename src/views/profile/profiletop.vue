<template>
  <div id="my">
    <div class="top">
      <div class="user">
        <img src="~assets/img/map.jpg" alt="">
        <span>请登录</span>
      </div>
      <div class="nav">
        <a src='javascriot:;' v-for="(item,index) in navs" :key="index">
          <p>{{item.nub}}</p>
          <p>{{item.name}}</p>
        </a>
      </div>
    </div>
  </div>
  
</template>

<script>


export default {
  data(){
    return{
      navs:[
        {name:'收藏夹',nub: 0},
        {name:'关注店铺',nub: 0},
        {name:'足迹',nub: 0},
        {name:'红包卡卷',nub: 0}
      ],
      
    }
  },
  name: '',
  components: {
    
  }
}
</script>

<style scoped>

*{
  padding: 0;
  margin: 0;

}

 .top{
   height: 130px;
   background-color: red
 }
 .top .user{
   height: 50px;
   padding: 20px 20px 0;
   display: flex;
  
 }
 .top .user img{
   display: block;
   width: 50px;
   height: 50px;
   border-radius:50%;
  
 }
 .top .user span{
   margin-left: 20px;
   line-height: 50px;
   color: white;
 }
 .top .nav{
  margin-top: 30px;
   display: flex;
   padding: 10px 0 0;
   text-align: center;
 }
 .top .nav a{
   display: block;
   width: 100px;
   height: 50px;
   color: #fff; 
   font-size: 12px;
 }
 
</style>
