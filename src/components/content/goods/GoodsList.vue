<template>
    <div class="goods">
        <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"/>
    </div>
</template>
<script>
import GoodsListItem from './GoodListItem'
export default {
    name: "GoodsList",
    components:{
      GoodsListItem
    },
    props: {
        goods:{
            type:Array,
            defalut(){
                return[]
            }
        }
    }
}
</script>
<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>