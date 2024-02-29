<template>
  <div class="home-container">
    <div class="friendList">
      <el-scrollbar >
        <div v-for="item in 1000">
          123
        </div>
      </el-scrollbar>
    </div>
    <div>聊天框</div>
  </div>
</template>
<script setup>
import {ref, onMounted,reactive} from "vue";
import {getChatList} from "@/api/chat.js";


let getChatUser=()=>{

}
let tableData = ref([])
onMounted(() => {
  // console.log(tableData.value)
  getChatUser()
})
</script>

<style scoped>
.home-container {
height: 100%;
  display: flex;
}
.friendList{
  width: 200px;
  background-color: #eee;
  height: 100%;
}
</style>
