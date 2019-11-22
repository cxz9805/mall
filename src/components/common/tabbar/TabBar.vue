<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>
<script>
export default {
    name:"TabBar"
}
</script>
<style scoped>
#tab-bar{
   display: flex;
   background: #f6f6f6;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   box-shadow: 0 -3px 2px rgba(0,0,0,0.08);
 }
 
</style>