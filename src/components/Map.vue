<template>
  <div>
    <p class="title"><i></i>疫情地图</p>
    <Tabs :currentIndex="currentIndex" @onIndex="getIndex">
      <Tab index="1" label="国内疫情"><div id="chinaMap"></div></Tab>
      <Tab index="2" label="国外疫情"><div id="worldMap"></div></Tab>
    </Tabs>
  </div>
</template>
<script>
import api from "../api";
import axios from "axios"

export default {
  name: "Map",
  data() {
    return {
      currentIndex: "1",
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$echarts.chinaMap("chinaMap");
      this.$echarts.worldMap("worldMap");
    });
    // api.getGlobalNcovAbroad({
    //   key:"30c1530f5dbea7332b39bce40ca9adef" 
    // }).then((res)=>{
    //     console.log(res);
    //   });
    function getGlobalNcovAbroad() {
      return axios.get("http://api.tianapi.com/ncovabroad/index?key=30c1530f5dbea7332b39bce40ca9adef")
    }
    function getCityNcov() {
      return axios.get("http://api.tianapi.com/ncovcity/index?key=30c1530f5dbea7332b39bce40ca9adef")
    }
    //合并网络请求
    axios.all([getGlobalNcovAbroad(),getCityNcov()]).then(
      axios.spread((getGlobalNcovAbroad,getCityNcov)=> {
      console.log(getGlobalNcovAbroad);
      console.log(getCityNcov);
      //获取全球不同国家的数据
      let World = []; //定义空数组
      for(let i = 0;i< getGlobalNcovAbroad.data.newslist.length;i++) {
        let temp = {
          name: getGlobalNcovAbroad.data.newslist[i].provinceName,
          value: getGlobalNcovAbroad.data.newslist[i].confirmedCount
        }
        World.push(temp) 
      }
          this.$nextTick(() => {
      this.$echarts.chinaMap("chinaMap");
      this.$echarts.worldMap("worldMap",World);
    });
    }))
  },
  methods: {
    getIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style scoped>
#chinaMap {
  width: 375px;
  height: 400px;
}
#worldMap {
  width: 375px;
  height: 400px;
}
.title {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 0.44rem;
  padding: 0 0.16rem;
  font-weight: 500;
  font-size: 0.17rem;
  line-height: 0.44rem;
  background: #fff;
}
.title::before {
  content: "";
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}
</style>
