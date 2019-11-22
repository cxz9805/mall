<template>
    <div class="myOrder">
      <div class="order">
        <span class="lf">我的订单</span>
        <span class="rg">查看全部订单 ></span>
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
                {src:require('assets/img/5.webp'),p:'待付款'},
                {src:require('assets/img/2.webp'),p:'待发货'},
                {src:require('assets/img/1.webp'),p:'待收货'},
                {src:require('assets/img/4.webp'),p:'评价'},
                {src:require('assets/img/3.webp'),p:'退款/售后'},
            ]
        }
    }
    
}
</script>
<style scoped>
    .myOrder{
   height: 120px;
   padding: 10px;
   background-color: rgb(250, 244, 244);
   border-bottom: 2px solid rgb(252, 249, 249);

 }
 .myOrder .order{
   height: 40px;
   /* background-color: #333; */
   line-height: 40px;
   border-bottom: 1px solid rgb(236, 230, 230)
 }
 .myOrder .order .lf{
   float: left;
   font-size: 14px;
   font-weight: 500;
 }
 .myOrder .order .rg{
   float: right;
   font-size: 12px;
   color: #bbb;
 }
 .myOrder .service{
   display: flex;
   height: 60px;
   justify-content: space-around;
   padding: 10px;
   
 }

 .myOrder .service img{
   display: block;
   height: 30px;
   width: 30px;
   margin: 0 auto;
   
 }
 .myOrder .service p{
   font-size: 12px;
   color: rgb(124, 117, 117);
   margin-top: 10px;
 }
</style>