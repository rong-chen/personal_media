
import {defineStore} from "pinia";
import {ref} from "vue";

export const useChatStore =defineStore('useChatStore',()=>{
    let strChat = localStorage.getItem('chat')
    let localStorageChat = ref( JSON.parse(strChat) ?? [])

    const save =()=>{

    }

    const remove =(id)=>{

    }

    const get = () => {

    }



    return{
        save,
        get,
        remove
    }
})
