<template>
  <div class="page-container">
    NotFound
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
.page-container {

}
</style>
