<template>
  <div class="menu-container">

  </div>
</template>
<script setup>
import {ref, onMounted} from "vue";

let tableData = ref([])
onMounted(() => {
  console.log(tableData.value)
//
})
</script>

<style scoped>
.menu-container {
width: 100%;
}
</style>
