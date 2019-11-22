<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height:475px;">
      <el-tab-pane label="正在流行"><elgood1/></el-tab-pane>
      <el-tab-pane label="上衣"><elgood2/></el-tab-pane>
      <el-tab-pane label="裤子"><elgood3/></el-tab-pane>
      <el-tab-pane label="内衣"><elgood4/></el-tab-pane>
      <el-tab-pane label="女鞋"><elgood1/></el-tab-pane>
      <el-tab-pane label="男友"><elgood2/></el-tab-pane>
      <el-tab-pane label="包包"><elgood3/></el-tab-pane>
      <el-tab-pane label="运动"><elgood4/></el-tab-pane>
      <el-tab-pane label="配饰"><elgood1/></el-tab-pane>
      <el-tab-pane label="美妆"><elgood2/></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import elgood1 from 'views/categroy/elgoods/elgood1'
import elgood2 from 'views/categroy/elgoods/elgood2'
import elgood3 from 'views/categroy/elgoods/elgood3'
import elgood4 from 'views/categroy/elgoods/elgood4'
export default {
  name: "",
  props: [""],
  data() {
      return {
        tabPosition: 'left'
      };
    },

  components: {
    elgood1,
    elgood2,
    elgood3,
    elgood4,
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style scoped>
/deep/ .el-tabs__item.is-active{
  color: deeppink;
}
/deep/ .el-tabs__active-bar{
  background: deeppink;
}
</style>