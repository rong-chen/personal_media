<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="auto">
        <Menu :menuList="MenuList"></Menu>
      </el-aside>
      <el-main>
<!--        <div class="header-container">-->
<!--          {{headerTitle}}-->
<!--        </div>-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import {ref, onMounted, nextTick, computed} from "vue";
import {useLoadingStore} from "@/pinia/loading/loading.js";
import {useRouter,useRoute} from "vue-router"
const router = useRouter()
const route = useRoute()
import Menu from "@/components/Menu/Menu.vue";
let loadingStore =useLoadingStore()
let MenuList = ref([])

// let headerTitle = computed(()=>{
//   let title = ""
//   for (let i = 0; i < MenuList.value.length; i++) {
//     if(route.name === MenuList.value[i].name){
//       title= MenuList.value[i].label
//       break
//     }
//   }
//   return title
// })

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
.header-container{
  height: 60px;
  background-color: white;
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
  //max-width: 1500px;
  background-color: #e7e7e7;
  margin:0 0 0 3px;
  height: 100%;
  padding: 0;
  //background-image: url("@/assets/mainBackground.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
