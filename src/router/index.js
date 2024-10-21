
import {createRouter,createWebHashHistory} from "vue-router";
import config from '../conster/index'
//制定路由规则
const routes=[
    {
        path:'/',
        name:'main',
        component:() => import('../views/myMain.vue'),
        redirect:'/home',
        children:config.menuList
    },
   
];
const router=createRouter({
    //设置路由模式
    history:createWebHashHistory(),
    routes,
});

export default router;