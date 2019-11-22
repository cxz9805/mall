<template>
    <div id="catetabbar">
        <div v-for="(item,index) in cate" :key="index" :class="{color:catecount===index}" @click="catebtn(index)">
           <p>{{item}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CateTabBar',
    data(){
        return{
            cate:['正在流行','上衣','裤子','内衣','女鞋','男友','包包','运动','配饰','美妆','个护','家居','百货','母婴','食品',],
            isactive: false,
            catecount:0
        }
    },
    methods:{
        catebtn(index){
            
            this.catecount =index
            
        },
        clickp(){
            
        }
    }
}
</script>
<style scoped>
    .color{
        background-color :#fff;
        height: 38px;
        color :deeppink; 
    }
    .cop{
       border-left: 4px solid deeppink;
    }
    #catetabbar{
        width: 85px;
        background:rgb(245, 239, 239);
        text-align: center;
        font-size: 12px;
    }
</style>