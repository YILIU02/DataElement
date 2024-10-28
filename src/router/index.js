
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
   {
    path:'/login',
    name:'login',
    component:() => import('../views/myLogin.vue')
   }
];
const router=createRouter({
    //设置路由模式
    history:createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
	// 判断有没有登录
	if (!localStorage.getItem('token')) {
		if (to.name == "login") {
			next();
		} else {
			router.push('/login')
		}
	} else {
		next();
	}
});

export default router;