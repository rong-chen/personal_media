<template>
  <div class="chat-container">
    <div class="header"> 张三 </div>
    <el-scrollbar style="height:calc(100% - 250px)">
      <div v-for="item in 1000" class="bubble">
        <div style="display: flex;justify-content: left">
          <img src="@/assets/defaultProture.png" alt="" style="width: 30px;height: 30px">
          <div>
            <div class = 'username'>昵称</div>
            <div class="bubble-item">{{item}}昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称昵称</div>
          </div>
        </div>
        <div style="display: flex;align-items: center;justify-content: right">
          <div>
            <div class = 'username'>昵称</div>
            <div class="bubble-item">{{item}}</div>
          </div>
          <img src="@/assets/defaultProture.png"  alt="" style="width: 30px;height: 30px;margin-left: 10px">
        </div>
      </div>
    </el-scrollbar>
    <div class="sendMsgContainer">
       <div contenteditable="true"></div>
    </div>
  </div>
</template>
<script setup>
import {ref, onMounted} from "vue";

let tableData = ref([{
  msg:"123121231232312312312321123123121231232",userInfo:"张三"
}])
onMounted(() => {
  console.log(tableData.value)
})
</script>

<style scoped>
.chat-container {
  margin:auto;
  height: 100%;
  background-color: white;
}
.bubble{
  padding: 10px ;
  white-space: normal;
  width: 100%;
  box-sizing: border-box;
}

.bubble-item{
  background-color: #6871f1;
  padding: 10px;
  border-radius: 5px;
  color: white;
  margin-left: 10px;
  max-width: 50%;
  word-break: break-all;
  overflow-wrap: break-word;
}

.header{
  height: 50px;
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(104, 113, 214, 0.2)
}
.username{
  font-size: 12px;
  color: #9d9d9d;
  margin-left: 10px;
}
.sendMsgContainer{
  height: 200px;
  border-top: 1px solid #ececec;
}

</style>

<style lang="scss">
@media screen and (max-width: 900px) {
  .chat-container{
    .bubble-item{
      max-width: 90% !important;
    }
  }
}

</style>
