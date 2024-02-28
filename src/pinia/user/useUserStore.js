import {defineStore} from "pinia";
import {ref} from "vue";


export const useUserStore =defineStore('useUserStore',()=>{
    let token = ref(localStorage.getItem("token") ?? "")
    let userInfo =ref({})
    const setToken=(val)=>{
        token.value =val
    }
    const setUserInfo=(val)=>{
        userInfo.value =val
    }
    return {
        token,
        setToken,
        userInfo,
        setUserInfo
    }
})
