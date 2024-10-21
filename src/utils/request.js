import axios from "axios";
const service=axios.create({
      baseURL:'https://api.apiopen.top'//设置后端接口
})
//请求拦截器，前端给后端发送数据
service.interceptors.request.use(config=>{
    console.log(1);
    
    return config
},err=>{
    Promise.reject(err)
});
//响应拦截器，后端给前端返回数据
service.interceptors.response.use(response =>{
    console.log(2,response);
    
    return response.data;
},err=>{
    return Promise.reject(new Error(err.response.data))
})
export default service
