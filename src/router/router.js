import {createRouter, createWebHashHistory} from "vue-router"
const routes = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        path: '/layout',
        component:()=>import("@/view/layout/layout.vue"),
        children:[
            {path:"",redirect:"/layout/index"},
            {path:"index",name:"layout",label:"聊天",icon:"icon-chat1",component:()=>import("@/view/home/home.vue")},
            {path:"friend",name:"friend",label:"好友",icon:"icon-friends",component:()=>import("@/view/friends/friend.vue")}
          ]
    },{
        path: '/login',
        name:"login",
        component: ()=>import("@/view/login/login.vue"),
    },
    { path: '/:pathMatch(.*)', component: ()=>import("@/view/NotFound/NotFound.vue"), }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})


export default router

