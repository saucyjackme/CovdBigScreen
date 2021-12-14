import axios from "axios";

const base = {
  baseURL: "http://api.tianapi.com",
  ncov: "/ncov/index",
  globalNcovAbroad: "/ncovabroad/index",
  // cityNcov:"/ncovcity/index",
  juheBaseUrl:"/api",
  springTravel:"/springTravel/citys",
}
//2021年春运防疫政策查询key:171e165a7d991c5f6ecd5194c54778ef
//接口地址：http://apis.juhe.cn/springTravle/citys
//方式get;参数：from to
const api = {
  // 1.获取国内疫情总体数据
  getNcov(params) {
    //这里api的网站是get方式，所以axios用get
    return axios.get(base.baseURL + base.ncov, {
      params
    })
  },
  //2.获取全球疫情总体数据
  getGlobalNcovAbroad(params) {
    // 同上
    return axios.get(base.baseURL + base.globalNcovAbroad, {
      params
    })
  },
  // getCityNcov(params) {
  //   return axios.get(base.baseURL + base.cityNcov,{
  //     params
  //   })
  // }
  //春节各地政策
  springTravel(params){
    return axios.get(base.juheBaseUrl + base.springTravel,{
        params
    })
  },
}

export default api;