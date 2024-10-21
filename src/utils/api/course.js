import request from '@/utils/request'

export default{
   getReport(){
return request({
    method:'get',
  url:'/api/sentences',
})
},
getTimeChina(data){//data{staryear:string,endyear:string}
  return request({
    method:'post',
    url:'/queryData/chinaGdpList',
    data,
  })
},
getCity(data){//data{area:string,staryear:string,endyear:string}
  return request({
    method:'post',
    url:'/queryData/provinceGdpList',
    data,
  })
},

}