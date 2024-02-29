<template>
  <div class="menu-container">
      <ul class="menu-ul">
        <header class="title">
          <img style="width: 30px;height: 30px;cursor:pointer" src="@/assets/defaultProture.png" alt="icon图标">
            <div class="item-content">
              <span style="margin-left: 10px">
                胖狐后台管理
              </span>
            </div>
          <el-icon class="el-icon-style" v-if="!lock"  @click="lockMenu"><Lock /></el-icon>
          <el-icon class="el-icon-style" v-else @click="unLockMenu"><Unlock /></el-icon>
        </header>
        <li v-for="item in prop.menuList" @click="routerLink(item)" >
          <div class="liDiv" :class = "activePageName === item.name ?'activeCss':''">
            <div class="iconDiv">
              <!-- 使用了iconfont -->
              <div style="width:25px;height: 25px;display: flex;align-items: center;justify-content: center" class="iconfont" :class="item.icon"></div>
            </div>
            <div class="item-content">
              {{ item.label }}
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>
<script setup>
import {ref, onMounted, watch} from "vue";
import {useRouter,useRoute} from "vue-router";
let router =useRouter()
let route =useRoute()

let prop = defineProps({
    menuList:Array
})
const routerLink =({name})=>{
  router.push({
    name:name
  })
}
let activePageName = ref(route.name)

watch(()=>route.name,(newVal)=>{
  activePageName.value = newVal
})

let lock =ref(false)
const lockMenu =()=>{
  lock.value = true
  let divList = document.querySelectorAll(".item-content")
  divList.forEach(div=>{
    div.classList.remove('item-content')
    div.classList.add('item-content2')
  })

}
const unLockMenu =()=>{
  lock.value = false
  let divList = document.querySelectorAll(".item-content2")
  divList.forEach(div=>{
    div.classList.remove('item-content2')
    div.classList.add('item-content')
  })
}
</script>

<style scoped>
.menu-container {
  position: fixed;
  left: 0;
  top: 0;
  width: auto;
  height: 100%;
  cursor:default;
  box-sizing: border-box;
  box-shadow: 1px 0px 5px rgba(104, 113, 214, 0.5); /* 添加阴影效果 */
}

.menu-ul >li{
  height: 40px;
  padding: 0 10px ;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  color: #656565;
  margin-top: 5px;
}
.menu-ul > .title{
  height: 60px !important;
  display: flex;
  align-items: center;
  padding: 10px;
}
.menu-ul > li >div{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
}
.menu-ul >li:hover>div{
  background-color: #cecece;
  color: white;
  border-radius: 3px;
}

.activeCss{
  background-color: #6871f1 !important;
  color: white !important;
  border-radius: 3px;
}
.menu-ul:hover.menu-ul>li>div{
  justify-content: left;
}
.item-content{
  opacity: 0;
  width: 0 !important;
  visibility: hidden;
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.1s, width 0.2s, visibility 0s 0.1s;
}

.item-content2{
  opacity: 1; /* 将透明度改为1 */
  overflow: hidden;
  width: 130px !important; /* 将宽度改为100px */
  visibility: visible; /* 显示元素 */
  white-space: nowrap;
  transition: opacity 1s, width 0.2s, visibility 3s; /* 过渡效果 */
}


.menu-ul:hover .item-content{
  opacity: 1; /* 将透明度改为1 */
  overflow: hidden;
  width: 130px !important; /* 将宽度改为100px */
  visibility: visible; /* 显示元素 */
  white-space: nowrap;
  transition: opacity 1s, width 0.2s, visibility 3s; /* 过渡效果 */
}

.menu-ul .el-icon-style{
  opacity: 0;
  width: 0 !important;
  visibility: hidden;
  overflow: hidden;
  transition: opacity 0.1s, width 0.2s, visibility 0s 0.1s;
}
.menu-ul:hover .el-icon-style{
  width: 30px !important;
  opacity: 1; /* 将透明度改为1 */
  overflow: hidden;
  visibility: visible; /* 显示元素 */
  transition: opacity 1s, width 0.2s, visibility 3s; /* 过渡效果 */
}
.menu-ul:hover .liDiv{
  //justify-content: left;
}
.iconDiv{
  width: 40px;
  display: flex;
  justify-content: center;
}
</style>
