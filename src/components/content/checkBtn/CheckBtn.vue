<template>
  <div class="checkBtn">
    <div class="checkBtnBox" :class="{check:isChecked}">
      <img src="~assets/img/勾选.png" alt="">
    </div>
  </div>
</template>

<script>

  export default {
    name:'CheckBtn',
    props:{
      isChecked: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
       
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
    },

    methods: {
      // checkClick() {
      //   console.log('checkClick');
      //   this.isCheck = !this.isCheck
      //   this.product.isShow = !this.product.isShow
      // }
    },

    watch: {}

  }

</script>
<style scoped>
.checkBtn{
  display: flex;
  align-items: center;
}
.checkBtn .checkBtnBox{
  width: 20px;
  height: 20px;
  margin-right: 4px;
  border-radius: 50%;
  border: 1.5px solid #999;
}
.check{
  background: red;
}
.checkBtn img{
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
}
</style>