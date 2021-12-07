import axios from "axios";

const base = {
  baseURL: "http://api.tianapi.com",
  ncov: "/ncov/index",
  globalNcovAbroad: "/ncovabroad/index",
  // cityNcov:"/ncovcity/index",
}

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
}

export default api;