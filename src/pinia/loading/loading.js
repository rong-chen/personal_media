
import {defineStore} from "pinia";
import {ref} from "vue";
export const useLoadingStore=defineStore("useLoadingStore",()=>{
    let showLoading=ref(false)
    const show=()=>{
        showLoading.value = true
    }
    const close =()=>{
        showLoading.value = false
    }
    return{
        showLoading,
        show,
        close
    }
})
