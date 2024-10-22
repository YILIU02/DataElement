const menuList=[ {
    path:'/home',
    name:'home',
    label:'首页',
    component:() => import('../views/myHome.vue'),
},{
    path:'/data',
    name:'data',
    label:'数据大厅',
    children:[
        {
            path:'/china',
            name:'china',
            label:'中国近年GDP',
            component:() => import('../views/myData.vue')
        },
        {
            path:'/city',
            name:'city',
            label:'2022年中国各省市GDP',
            component:() => import('../views/myData.vue')
        },
        {
            path:'/compare',
            name:'compare',
            label:'国内外近年GDP对比',
            component:() => import('../views/myData.vue')
        },
        {
            path:'/find',
            name:'find',
            label:'自定义查询',
            component:() => import('../views/myData.vue')
        },
    ],
    
}]//填写路由及其菜单
const arealist=["中国", "北京市", "上海市", "天津市", "重庆市", "河北省", "山西省", "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "江苏省",
    "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西壮族自治区", "海南省", "四川省",
    "贵省", "云南省", "西藏自治区", "陕西省", "甘肃省", "宁夏回族自治区", "青海省", "新疆维吾尔族自治区", "香港特别行政区", "澳门特别行政区",
    "台湾省",
  ] 
const home_title='项目介绍'
const home_info='<b>\u2003在全球经济一体化的背景下，国内生产总值（GDP）是衡量一个国家或地区经济状况的重要指标。企业和政府决策者需要准确、及时地掌握GDP数据，以便于进行宏观经济分析、制定发展战略和对外经济政策。然而，不同国家和地区的GDP数据格式、统计口径和更新频率存在差异，这为数据的收集和比较分析带来了挑战。<br>\u2003本项目旨在通过收集和整合国内外多个国家的GDP数据，实施数据全生命周期管理，为用户提供一个统一、可靠、易于分析的GDP数据平台</b>。'
const team_name='人体数据结构组'
const username='admin'


export default{
    menuList,
    arealist,
    home_info,
    home_title,
    team_name,
    username,

}