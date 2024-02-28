<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="100px">
        <Menu></Menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script setup>
import {ref, onMounted, nextTick} from "vue";
import {useLoadingStore} from "@/pinia/loading/loading.js";
import Menu from "@/components/Menu/Menu.vue";
let loadingStore =useLoadingStore()
let tableData = ref([])
onMounted( async () => {
  await nextTick()
  loadingStore.close()
})
</script>

<style scoped>
.layout-container {
  height: 100%;
}
</style>
