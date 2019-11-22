<template>
    <div class="myInstrument">
      <div class="instrument">
        <span class="lf">必备工具</span>
        <span class="rg">查看全部工具 ></span>
      </div>
      <div class="service">
        <div v-for="(item,index) in services" :key="index">
          <img :src="item.src" alt="">
          <p>{{item.p}}</p>
        </div>
      </div>
    </div>
  
</template>
<script>
export default {
    data(){
        return{
            services:[
                {src:require('assets/img/huabanfuben.png'),p:'会员中心'},
                {src:require('assets/img/anquan.jpg'),p:'安全中心'},
                {src:require('assets/img/my.jpg'),p:'我的服务'},
                {src:require('assets/img/ljuan.jpg'),p:'领劵中心'},
                {src:require('assets/img/daifahuo.png'),p:'我的快递'},
                {src:require('assets/img/tongxun.jpg'),p:'我的通信'},
                {src:require('assets/img/pingjia.png'),p:'我的评价'},
                {src:require('assets/img/qd1.jpg'),p:'每日打卡'},
            ]
        }
    }
    
}
</script>
<style scoped>
 .myInstrument{
   
   height: 200px;
   padding: 10px;
   background-color: rgb(250, 244, 244);

 }
 .myInstrument .instrument{
   height: 40px;
   /* background-color: #333; */
   line-height: 40px;
   border-bottom: 1px solid rgb(236, 230, 230)
 }
 .myInstrument .instrument .lf{
   float: left;
   font-size: 14px;
   font-weight: 500;
 }
 .myInstrument .instrument .rg{
   float: right;
   font-size: 12px;
   color: #bbb;
 }
 .myInstrument .service{
   display: flex;
   flex-wrap: wrap;
   height: 60px;
   justify-content: space-around;
   padding: 10px;
   
 }
 .myInstrument .service div{
   width: 80px;
   padding: 10px 0;
   text-align: center;
 }
 .myInstrument .service img{
   display: block;
   height: 40px;
   width: 40px;
   border-radius: 50%;
   margin: 0 auto;
   
 }
 .myInstrument .service p{
   font-size: 12px;
   color: rgb(124, 117, 117);
   margin-top: 10px;
 }
</style>