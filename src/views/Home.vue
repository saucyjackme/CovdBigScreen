<template>
  <div class="home">
    <Header></Header>
    <covd-info :covdInfo="covdInfo"></covd-info>
    <china-covd-info :chinaCovdInfo="chinaCovdInfo"></china-covd-info>
  </div>
</template>

<script>
import api from "../api";

import Header from "@/components/Header.vue";
import CovdInfo from "@/components/CovdInfo.vue";
import ChinaCovdInfo from "@/components/ChinaCovdInfo.vue";

export default {
  name: "Home",
  components: {
    Header,
    CovdInfo,
    ChinaCovdInfo
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
        console.log(res);
        if (res.status == 200) {
          console.log(res);
          this.covdInfo.note1 = res.data.newslist[0].desc.note1;
          this.covdInfo.note2 = res.data.newslist[0].desc.note2;
          this.covdInfo.note3 = res.data.newslist[0].desc.note3;
          this.covdInfo.remark1 = res.data.newslist[0].desc.remark1;
          this.covdInfo.remark2 = res.data.newslist[0].desc.remark2;
          this.covdInfo.remark3 = res.data.newslist[0].desc.remark3;
          this.chinaCovdInfo.currentConfirmedCount = res.data.newslist[0].desc.currentConfirmedCount;
          this.chinaCovdInfo.confirmedCount = res.data.newslist[0].desc.confirmedCount;
          this.chinaCovdInfo.suspectedCount = res.data.newslist[0].desc.suspectedCount;
          this.chinaCovdInfo.curedCount = res.data.newslist[0].desc.curedCount;
          this.chinaCovdInfo.deadCount = res.data.newslist[0].desc.deadCount;
          this.chinaCovdInfo.seriousCount = res.data.newslist[0].desc.seriousCount;
          this.chinaCovdInfo.suspectedIncr = res.data.newslist[0].desc.suspectedIncr;
          this.chinaCovdInfo.currentConfirmedIncr = res.data.newslist[0].desc.currentConfirmedIncr;     
          this.chinaCovdInfo.confirmedIncr = res.data.newslist[0].desc.confirmedIncr; 
          this.chinaCovdInfo.curedIncr = res.data.newslist[0].desc.curedIncr; 
          this.chinaCovdInfo.deadIncr = res.data.newslist[0].desc.deadIncr; 
          this.chinaCovdInfo.seriousIncr = res.data.newslist[0].desc.seriousIncr; 
        }
      }).catch((error) => console.log(error));
  },
};
</script>
