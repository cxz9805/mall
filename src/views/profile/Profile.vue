<template>
    <div class="profile">
        <profiletop/>
        <MyOrder/>
        <myinstrument/>
    </div>
</template>
<script>
import Profiletop from './profiletop'
import MyOrder from './MyOrder'
import Myinstrument from './MyInstrument'

export default {
    components:{
        Profiletop,
        MyOrder,
        Myinstrument
    }
}
</script>
<style scoped>
.profile{
    height: 100vh;
    background: #FAF4F4;
}
</style>