<template>
  <div class="form-container drag-mod">
    <div class="login-mod">
      <p class="title">胖狐</p>
      <form class="form no-drag" @submit.prevent="handleSubmit">
        <input v-model="formData.phone" type="text" class="input inputStyle" placeholder="手机号码" />
        <input
            v-model="formData.password"
            type="password"
            class="input inputStyle"
            placeholder="密码"
        />
        <p class="page-link">
        <span style="display: flex; align-items: center">
          <input id="cbx" v-model="isCheck" checked="" type="checkbox" class="hidden-xs-up" />
          <label for="cbx" class="cbx"></label
          ><span style="margin-left: 10px; text-decoration: none !important">自动登陆</span></span
        >
          <span class="page-link-label" style="align-items: center">忘记密码?</span>
        </p>
        <button class="form-btn loginBtn" type="submit">登录</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import {Login} from '@/api/login.js'
import {useUserStore} from "@/pinia/user/useUserStore.js";
import router from "@/router/router.js";
import {UserInfo} from "@/api/user.js";
import {useLoadingStore} from "@/pinia/loading/loading.js";
let loadingStore =useLoadingStore()
let userStore =useUserStore()
let formData = ref({
  phone: '',
  password: ''
})
let isCheck = ref(false)

const handleSubmit = async (event) => {
  loadingStore.show()
  let resp = await Login(formData.value)
  let { code,token } =resp
  if(code===0){
    localStorage.setItem('token',token)
    userStore.setToken(token)
    await getUserInfo()
  }
}
const getUserInfo = async ()=>{
 let {code,data}= await UserInfo()
 if(code ===0){
   userStore.setUserInfo(data)
   await router.push({name: "layout"})
 }
}

</script>
<style scoped>
.login-mod{
  width: 300px;
  box-shadow: 1px 1px 10px #ececec;
  padding: 10px 30px 40px;
  border:1px solid #ececec;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px); /* 模糊效果 */
}
.form-container {
  width: 100%;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 30px;
  background-image: url(@/assets/loginBackground.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
  Verdana, sans-serif;
  margin: 40px 0 30px 0;
  font-size: 28px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 15px;
  margin-top: 40px;

}

.input {
  border-radius: 10px;
  border: 1px solid #c0c0c0;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 8px 15px;
  height: 40px;
}

.page-link {
  text-decoration: underline;
  margin: 0;
  text-align: end;
  color: #747474;
  text-decoration-color: #747474;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.page-link-label {
  cursor: pointer;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
  Verdana, sans-serif;
  font-size: 9px;
  font-weight: 700;
  display: flex;
}

.page-link-label:hover {
  color: #000;
}

.form-btn {
  padding: 10px 15px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
  Verdana, sans-serif;
  border-radius: 20px;
  border: 0 !important;
  outline: 0 !important;
  background: teal;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.form-btn:active {
  box-shadow: none;
}

.sign-up-label {
  margin: 0;
  font-size: 10px;
  color: #747474;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
  Verdana, sans-serif;
}

.sign-up-link {
  margin-left: 1px;
  font-size: 11px;
  text-decoration: underline;
  text-decoration-color: teal;
  color: teal;
  cursor: pointer;
  font-weight: 800;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
  Verdana, sans-serif;
}

.buttons-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  gap: 15px;
}

.cbx {
  position: relative;
  top: 1px;
  width: 20px;
  height: 20px;
  border: 1px solid #6e6e6e;
  border-radius: 3px;
  vertical-align: middle;
  transition: background 0.1s ease;
  cursor: pointer;
  display: block;
}

.cbx:after {
  content: '';
  position: absolute;
  top: 0px;
  left: 6px;
  width: 7px;
  height: 14px;
  opacity: 0;
  transform: rotate(45deg) scale(0);
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transition: all 0.3s ease;
  transition-delay: 0.15s;
}

.lbl {
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;
}

#cbx:checked ~ .cbx {
  border-color: transparent;
  background: #6871f1;
  animation: jelly 0.6s ease;
}

#cbx:checked ~ .cbx:after {
  opacity: 1;
  transform: rotate(45deg) scale(1);
}

@keyframes jelly {
  from {
    transform: scale(1, 1);
  }

  30% {
    transform: scale(1.25, 0.75);
  }

  40% {
    transform: scale(0.75, 1.25);
  }

  50% {
    transform: scale(1.15, 0.85);
  }

  65% {
    transform: scale(0.95, 1.05);
  }

  75% {
    transform: scale(1.05, 0.95);
  }

  to {
    transform: scale(1, 1);
  }
}

.hidden-xs-up {
  display: none !important;
}

.tabbar-title {
  position: fixed;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
</style>
