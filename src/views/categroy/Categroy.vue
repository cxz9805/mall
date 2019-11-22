<template>
    <div id="categroy">
        <nav-bar class="catenavabar">
            <div slot="left" class="left"><img src="../../assets/img/联系.png"/></div>
            <div slot="center" class="center"><input placeholder="外套"/></div>
            <div slot="right" class="right"><img src="../../assets/img/tabbar/购物车.png"></div>
        </nav-bar>
        <cate-element/>
    </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar'
import CateTabBar from '../../components/content/catetabbar/CateTabBar'
import CateGoods from '../../components/content/categoods/CateGoods'
import CateElement from './CateElement'

export default {
    name: 'Categroy',
    components: {
        NavBar,
        CateTabBar,
        CateGoods,
        CateElement
    }
}
</script>
<style scoped>
   #categroy img{
       width:25px;
       height: 25px;
       vertical-align:middle;
   }
   #categroy {
    
       line-height: 38px;
       margin-bottom: 49px;
   }
    #categroy input{
        background:rgb(245, 239, 239);
        border: none;
        font-size: 12px;
        height: 25px;
        width: 200px;
    }
    .catenavabar{
        border-bottom: 1px solid rgb(245, 239, 239);
    }
    .categoods{
        position: absolute;
        top:44px;
        left: 85px;
    }
</style>