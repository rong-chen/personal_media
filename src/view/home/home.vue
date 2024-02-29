<template>
  <div class="home-container">

  </div>
</template>
<script setup>
import {ref, onMounted,reactive} from "vue";

let tableData = ref([])
onMounted(() => {
  console.log(tableData.value)
//
})
</script>

<style scoped>
.home-container {
height: 100%;
}
</style>
