
import service from "@/utils/request.js";


export const UserInfo =()=>{
    return service({
        url:"/user/info",
        method:"get",
    })
}
