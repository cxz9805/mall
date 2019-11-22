<template>
  <div class="elgood">
    <div v-for="(item,index) in elgoods" :key="index">
      <div>
        <img :src="item.img" alt="">
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
        elgoods: [
          {title:'热门套装',img:require('../../../assets/img/elgood4.webp')},
          {title:'热门套装',img:require('../../../assets/img/elgood4.webp')},
          {title:'热门套装',img:require('../../../assets/img/elgood4.webp')},
          {title:'热门套装',img:require('../../../assets/img/elgood4.webp')},
          {title:'热门套装',img:require('../../../assets/img/elgood4.webp')},
          {title:'热门套装',img:require('../../../assets/img/elgood4.webp')},
          {title:'热门套装',img:require('../../../assets/img/elgood4.webp')},
          {title:'热门套装',img:require('../../../assets/img/elgood4.webp')},
          {title:'热门套装',img:require('../../../assets/img/elgood4.webp')},
        ]
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style scoped>
.elgood{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
}
 .elgood img{
   width: 80px;
 }
 .elgood p{
   font-size: 12px;
   margin-bottom: 10px;
   text-align: center;
 }
</style>