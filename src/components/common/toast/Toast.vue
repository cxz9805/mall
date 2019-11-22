<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>

  export default {
    name:'Toast',
    props:[''],
    data () {
      return {
        message: '',
        isShow: false
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      show(message,duration) {
        console.log('bbbbbbbbb');
        
        this.isShow = true
        this.message = message

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration);
      }
    },

    watch: {}

  }

</script>
<style scoped>
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  transform: translate(-50%,-50%);
  padding: 8px 10px;
  font-size: 16px;
}
</style>