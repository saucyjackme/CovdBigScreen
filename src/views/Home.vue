<template>
  <div class="home">
    <Header></Header>
    <covd-info :covdInfo="covdInfo"></covd-info>
    <china-covd-info :chinaCovdInfo="chinaCovdInfo"></china-covd-info>
    <Map></Map>
  </div>
</template>

<script>
import api from "../api";
import Header from "@/components/Header.vue";
import CovdInfo from "@/components/CovdInfo.vue";
import ChinaCovdInfo from "@/components/ChinaCovdInfo.vue";
import Map from "@/components/Map.vue"

export default {
  name: "Home",
  components: {
    Header,
    CovdInfo,
    ChinaCovdInfo,
    Map
  },
  data() {
    return {
      //1.存储Covid信息
      covdInfo: {
        note1: "",
        note2: "",
        note3: "",
        remark1: "",
        remark2: "",
        remark3: "",
      },
      //2.存储全国整体信息
      chinaCovdInfo: {
        modifyTime:"",
        currentConfirmedCount: "", //1.现确诊人数
        confirmedCount: "", //2.累计确诊
        suspectedCount: "", //3.现存疑似
        curedCount: "", //4.累计治愈人数
        deadCount: "", //5.累计死亡人数
        seriousCount: "", //6.现存无症状人数
        suspectedIncr: "", //7.新增境外输入人数
        currentConfirmedIncr: "", //8.相比昨天现存确诊人数
        confirmedIncr: "", //9.相比昨天累计确诊人数
        curedIncr: "", //10.相比昨天新增治愈人数
        deadIncr: "", //11.	相比昨天新增死亡人数
        seriousIncr: "", //12.相比昨天现存无症状人数
      }
    };
  },
  mounted() {
    api
      .getNcov({
        key: "30c1530f5dbea7332b39bce40ca9adef",
      })
      .then((res) => {
        // console.log(res);
        console.log('测试2')
        if (res.status == 200) {
          console.log(res);
          let desc = res.data.newslist[0].desc;
          this.covdInfo.note1 = desc.note1;
          this.covdInfo.note2 = desc.note2;
          this.covdInfo.note3 = desc.note3;
          this.covdInfo.remark1 = desc.remark1;
          this.covdInfo.remark2 = desc.remark2;
          this.covdInfo.remark3 = desc.remark3;
    //国内疫情面板数据
          this.chinaCovdInfo.modifyTime = desc.modifyTime;
          this.chinaCovdInfo.currentConfirmedCount = desc.currentConfirmedCount;
          this.chinaCovdInfo.confirmedCount = desc.confirmedCount;
          this.chinaCovdInfo.suspectedCount = desc.suspectedCount;
          this.chinaCovdInfo.curedCount = desc.curedCount;
          this.chinaCovdInfo.deadCount = desc.deadCount;
          this.chinaCovdInfo.seriousCount = desc.seriousCount;
          this.chinaCovdInfo.suspectedIncr = desc.suspectedIncr;
          this.chinaCovdInfo.currentConfirmedIncr = desc.currentConfirmedIncr;     
          this.chinaCovdInfo.confirmedIncr = desc.confirmedIncr; 
          this.chinaCovdInfo.curedIncr = desc.curedIncr; 
          this.chinaCovdInfo.deadIncr = desc.deadIncr; 
          this.chinaCovdInfo.seriousIncr = desc.seriousIncr; 
        }
      }).catch((error) => console.log(error));
      api.getGlobalNcovAbroad({
        key: "30c1530f5dbea7332b39bce40ca9adef",
      }).then((res)=>{
        console.log(res);
      })
  },
};
</script>