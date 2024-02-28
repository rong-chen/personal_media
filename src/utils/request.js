import axios from "axios";
import {useUserStore} from "@/pinia/user/useUserStore.js";

const service = axios.create({
    baseURL:"/api",
    timeout:5000,
    headers: {
        'Content-Type': 'application/json',
    },
})

service.interceptors.request.use((config)=>{
    let user = useUserStore()
    config['headers']['H-Token'] = user.token
    return config;
},(err)=>{
    return Promise.reject(err)
})

service.interceptors.response.use((resp)=>{
    if(resp.data.code === 0){
        return resp.data
    }else{
        console.log(resp.data)
    }
},(err)=>{
    return Promise.reject(err)
})

export default service
