import service from "@/utils/request.js";

export const getFriends=()=>{
    return service({
        url:"/friend/list",
        method:"get"
    })
}