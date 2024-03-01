<template>
  <div class="home-container">
    <div class="friendList">
      <div  class="search-container">
        <search v-model="searchParams" />
        <div class="icon-tianjia iconfont iconCss" ></div>
      </div>
      <el-scrollbar style="  margin-top: 10px;">
        <ul  class="historyChatUser" >
          <li v-for="item in 1000"  @click="changeUser">
            {{item}}
          </li>
        </ul>
      </el-scrollbar>
    </div>
    <div style="width: 100%;border-left: 1px solid rgba(104, 113, 214, 0.1)"><chatPage></chatPage></div>
    <div class="userMenu iconfont icon-jiantou_yemian_xiangshang_o" v-if="showUserMenuBtn" @click="addUserMenuCss"></div>
    <div class="userMenu iconfont icon-jiantou_yemian_xiangxia_o" v-else @click="hiddenUserMenu"></div>
  </div>
</template>
<script setup>
import {ref, onMounted, computed, nextTick, watch} from "vue";
import {getChatList} from "@/api/chat.js";
import search from "@/components/input/input.vue"
import chatPage from "@/components/chatPage/chatPage.vue"

let showUserMenuBtn =ref(true)

const addUserMenuCss =()=>{
  console.log(123)
  showUserMenu()
}
const changeUser =()=>{
  hiddenUserMenu()
}
const hiddenUserMenu =()=>{
  showUserMenuBtn.value =true
  const div = document.querySelector('.friendList')
  div.classList.remove('show')
  div.classList.add('hidden')
}
const showUserMenu =()=>{
  showUserMenuBtn.value =false
  const div = document.querySelector('.friendList')
  div.classList.remove('hidden')
  div.classList.add('show')
}

let getChatUser=()=>{

}
let tableData = ref([])
onMounted(() => {
  getChatUser()
})
</script>

<style scoped>
.home-container {
  position: relative;
  height: 100%;
  display: flex;
  overflow: hidden;
}
.search-container{
  background-color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
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
.friendList{
  background-color: #eee;
  height: calc(100% - 60px);
}

.historyChatUser>li:hover{
  background-color: #6871f1;
}

.historyChatUser>li{
  background-color: white;
  height: 50px;
  margin-bottom: 10px;
}
.userMenu{
  background-color: #a8adff;
  position: fixed;
  bottom: 10px;
  right: 30px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: white;
}
.userMenu:hover{
  background-color: #f3f3f3;
}
.show {
  transform: translateY(0) !important;
  transition: transform .5s,visibility .5s;
  visibility: visible !important;
}


.hidden{
  transform: translateY(140%) !important;
  transition: transform .5s,visibility .3s;
  visibility: hidden !important;
}

</style>


<style lang="scss" >
@media screen and (max-width: 400px){
  .home-container{
    .friendList {
      transform: translateY(140%);
      width: 100%;
      position: absolute;
      right: 0;
    }
    .userMenu{
      display: flex ;
    }
    .historyChatUser{
      width: 100%;
      li{
        width: 100%;
      }
    }
  }
}

/*比900大*/
@media screen and (min-width: 900px) {
  .home-container{
    .userMenu{
      display: none;
    }
    .friendList{
      transform:translateY(0) !important;
    }
    .historyChatUser {
      li{
        width: 200px;
      }
    }
  }
}

@media screen and (min-width: 401px) and (max-width: 899px) {
  .home-container{
    .friendList {
      transform: translateY(140%);
      width: 100%;
      position: absolute;
      right: 0;
      visibility: hidden ;
    }
    .userMenu{
      display: flex;
    }
    .historyChatUser{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      li{
        width: 45%;
      }
    }

  }
}


</style>
