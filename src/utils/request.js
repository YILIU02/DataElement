
import axios from "axios";


const service=axios.create({
      baseURL:'http://8.138.164.36:8081',//设置后端接口
        headers:{"Content-Type":'application/json',
            
    }
})
//请求拦截器，前端给后端发送数据
service.interceptors.request.use(config=>{
    config.headers['token']=localStorage.getItem('token')
   console.log(`token为：${config.headers['token']}`);
   
    return config
},err=>{
    Promise.reject(err)
});
//响应拦截器，后端给前端返回数据
service.interceptors.response.use(response =>{
    
    if(response.data.code==1) return response.data;
    else return Promise.reject(new Error(response.data.msg))
},err=>{
    console.log(err);
    
    // return Promise.reject(new Error(err.response))
})
export default service
