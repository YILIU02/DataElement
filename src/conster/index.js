const menuList=[ {
    path:'/home',
    name:'home',
    label:'首页',
    component:() => import('../views/myHome.vue'),
},{
    path:'/data',
    name:'data',
    label:'数据大厅',
    component:() => import('../views/myData.vue')
}]//填写路由及其菜单
const home_title='团队介绍'
const home_info=' 我们是一群立志在国庆街头放飞理想的有志青年'
const team_name='人体数据结构组'
const username='admin'

export default{
    menuList,
    home_info,
    home_title,
    team_name,
    username,

}