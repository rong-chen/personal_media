<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="auto">
        <Menu :menuList="MenuList"></Menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import {ref, onMounted, nextTick} from "vue";
import {useLoadingStore} from "@/pinia/loading/loading.js";
import {useRouter} from "vue-router"
const router = useRouter()
import Menu from "@/components/Menu/Menu.vue";
let loadingStore =useLoadingStore()
let MenuList = ref([])
onMounted( async () => {
  await nextTick()
  loadingStore.close()
  let routerList = []
  router.options.routes.forEach(item=>{
    if(!item.redirect && item.path === '/layout'){
      item.children.forEach(r=>{
        if(!r.redirect){
          routerList.push(r)
        }
      })
    }
  })
  MenuList.value=routerList
})
</script>

<style scoped>
.layout-container {
  height: 100%;
}
</style>
<style>
.el-aside{
  height: 100%;
  background-color: #ffffff;
  overflow: inherit;
}
.el-container{
  height: 100%;
}
.el-main{
  max-width: 1500px;
  background-color: #e7e7e7;
  margin:auto;
  height: 100%;
}
</style>
