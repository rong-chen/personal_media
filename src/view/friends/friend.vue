<template>
  <div class="friend-container">
    <div class="friendList">
      <div class="search">
        <search  v-model="searchParams" />
        <div class="icon-tianjia iconfont iconCss" ></div>
      </div>
      <div class="userManager">
        <div class="userManagerBtn iconfont icon-userplus-fill"><div style="margin-left: 3px">好友管理器</div></div>
      </div>

      <el-scrollbar  style="background-color: white">
          <ul class="friendsListUL">
            <li v-for="item in tableData">
              {{ item.username }}
            </li>
          </ul>
      </el-scrollbar>
    </div>
  </div>
</template>
<script setup>
import {ref, onMounted} from "vue";
import search from "@/components/input/input.vue"
import {getFriends} from "@/api/firends.js";
let tableData = ref([])
const getFriendTableData = async ()=>{
  let {data} = await getFriends()
  tableData.value =data
}


onMounted(() => {
  console.log(tableData.value)
  getFriendTableData()
})
let searchParams =ref("")
</script>

<style scoped>
.friend-container {
  height: 100%;
}
.friendList{
  height: calc(100% - 100px);
  width: 200px;
}
.search{
  background-color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.userManager{
  height: 50px;
  background-color: white;
}
.iconCss{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  height: 25px;
  width: 25px;
  color: #6e6e6e;
  font-size: 14px !important;
  background-color: #e0e0e0;
  border-radius: 3px;
}
.userManagerBtn{
  height: 30px;
  margin: 0 15px;
  font-size: 14px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #a1a1a1;
  cursor: default;
  border-radius: 3px;
}
.userManagerBtn:hover{
  background-color: #ececec;
}
.managerMessage{
  height: 100px;
  background-color: white;
}
.friendsListUL li{
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
.friendsListUL li:hover{
  background-color: #ececec;
}
</style>
