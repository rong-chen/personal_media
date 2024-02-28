import {createRouter, createWebHashHistory} from "vue-router"
const routes = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        path: '/layout',
        children:[
            {path:"",redirect:"/layout/index"},
            {path:"index",name:"layout",component:()=>import("@/view/layout/layout.vue")}
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

