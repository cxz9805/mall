<template>
  <div class="detailParamsInfo">
      <div class="rule">
        <table v-for="(table,index) in paramsInfo.rule.tables" :key="index">
        <tr v-for="(tr,indey) in table" :key="indey">
          <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
        </tr>
        </table>
      </div>
      <div class="info">
        <table>
        <tr v-for="(info,index) in paramsInfo.info.set" :key="index">
          <td class="key">{{info.key}}</td>
          <td class="value">{{info.value}}</td>
        </tr>
        </table>
      </div>
  </div>
</template>

<script>

  export default {
    name:'DetailParamsInfo',
    props:{
      paramsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data () {
      return {

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
.rule{
  padding: 8px;
  font-size: 14px;
}
.info{
  padding: 8px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 3px solid #dddddd;
}
.detailParamsInfo td{
 line-height: 24px;
 
}
.rule tr{
  display: block;
  width: 304px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
}
.info tr{
  display: block;
  width: 304px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: flex-start;
  padding: 5px 0px;
}
.value{
  margin-left: 50px;
  color: deeppink;
}
.key{
  width: 30px;
}
</style>