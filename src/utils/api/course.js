import request from '@/utils/request'

export default {
  Login(data) {
    // 登录接口
    //{
    // username:''
    // password:''
    // }
    return request({
      method: 'post',
      url: '/login',
     data
    })
  },
  getReport(data) {
    // 分析报告
    // {
    //   "location": "中国",
    //   "beginYear": "2015",
    //   "endYear": "2022"
    // }
    return request({
      method: 'post',
      url: '/analyze',
      data,
    })
  },
  getTimeChina(data) {
    //  查询一个时间段内的中国gdp
    // {
    //   "beginYear": "2010",
    //   "endYear": "2024"
    // }
    return request({
      method: 'post',
      url: '/queryData/chinaGdpList',
      data,
    })
  },
  getCity(data) {
    // 获取某个省份一个时间段的gdp
    // {
    //   "province": "上海",
    //   "beginYear": "2015",
    //   "endYear": "2025"
    // }
    return request({
      method: 'post',
      url: '/queryData/provinceGdpList',
      data,
    })
  },
  getCountry(data){
    //查询某个国家一段时间的gdp
    // {
    //   "country": "美国",
    //   "beginYear": "2010",
    //   "endYear": "2025"
    // }
    return request({
      method: 'post',
      url: '/queryData/countryGdpList',
      data,
    })
  },
  deChina(data){
    //删除中国GDP数据
    // {
    //   "beginYear": "2021",
    //   "endYear": "2022"
    // }
    return request({
      method: 'post',
      url: '/destroy/china',
      data,
    })
  },
  deCity(data){
    // 删除某省份GDP数据
    // {
    //   "province": "上海",
    //   "beginYear": "2021",
    //   "endYear": "2022"
    // }
    return request({
      method: 'post',
      url: '/destroy/china',
      data,
    })
  },


}