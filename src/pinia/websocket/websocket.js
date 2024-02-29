
import {defineStore} from "pinia"
export const useWebSocketStore=defineStore('useWebSocketStore',()=>{

    let url = import.meta.env.BASE_URL

    let websocket = new WebSocket()

    return {

    }
})