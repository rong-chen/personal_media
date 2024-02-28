<template>
 <div id="app" >
   <router-view></router-view>
   <loading></loading>
 </div>
</template>
<script setup>
import loading from "@/components/loading/loading.vue"

</script>
<style scoped>
 #app{
   height: 100vh;
   width:100vw;
 }
</style>
