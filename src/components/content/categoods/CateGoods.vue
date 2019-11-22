<template>
    <div id="CateGoods">
       <div v-for="(item,index) in categoods" :key="index" class="catelist">
           <img :src="item.src"/>
           <div>
               <p>{{item.title}}</p>
           </div>
       </div>
    </div>
</template>
<script>
import { log } from 'util'
export default {
    name: 'CateGoods',
    data(){
        return{
            'categoods':[
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
                {title:'热卖套装',src:require('../../../assets/img/categoodsimg/categood.webp')},
            ],
            
            'categoods2':[
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
                {title:'上衣',src:require('../../../assets/img/categoodsimg/categood2.webp')},
            ],
            cateType: 'categoods'
        }
    },
    mounted(){
       
    }
}
</script>
<style scoped>
#CateGoods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

}
  .catelist{
      text-align: center;
      width: 70px;
  }
  .catelist p{
      font-size: 12px;
  }
  .catelist img{
      width: 56px;
      margin-top: 10px;
  }
</style>