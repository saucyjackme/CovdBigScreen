<template>
  <div class="spring">
    <h3 class="title">春节旅行</h3>
    <Cascader
      :options="options"
      label="出发城市"
      @onValue="getGoCity"
    ></Cascader>
    <Cascader
      :options="options"
      label="到达城市"
      @onValue="getOnCity"
    ></Cascader>
    <van-button type="primary" block @click="goToSpring">查看政策</van-button>
  </div>
</template>
<script>
import api from "../api";
import Cascader from "./Cascader.vue";

export default {
  name: "SpringTravel",
  components: {
    Cascader,
  },
  data() {
    return {
      options: [],
      citys: [],
    };
  },
  mounted() {
    api
      .springTravel({
        key: "171e165a7d991c5f6ecd5194c54778ef",
      })
      .then((res) => {
        var currentAll = [];
        if (res.status === 200) {
          for (var i = 0; i < res.data.result.length; i++) {
            var arr = [];
            for (var j = 0; j < res.data.result[i].citys.length; j++) {
              var temp2 = {
                text: res.data.result[i].citys[j].city,
                value: res.data.result[i].citys[j].city_id,
              };
              arr.push(temp2);
            }
            var temp1 = {
              text: res.data.result[i].province,
              value: res.data.result[i].province_id,
              children: arr,
            };
            currentAll.push(temp1);
          }
          this.options = currentAll;
        }
      });
  },
  methods: {
    getGoCity(data) {
      console.log(data);
      this.citys.push(data);
    },
    getOnCity(data) {
      console.log(data);
      this.citys.push(data);
    },
    goToSpring() {
      if (this.citys.length == 2) {
        // this.$router.push("/spring/");
        this.$router.push({
          name: "SpringView",
          params:{
            citys: this.citys
          }
        })
      } else {
        // 危险通知
        this.$notify("请选择全部的省市");
      }
    },
  },
};
</script>
<style scoped>
.spring {
  width: 100%;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}

.spring .title {
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}

.title::before {
  content: "";
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}
</style>
