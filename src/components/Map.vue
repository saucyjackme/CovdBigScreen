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
export default {
  name: "Map",
  data() {
    return {
      currentIndex: "1",
    };
  },
  mounted() {
    // console.log(this.$echarts);
    this.$nextTick(() => {
      this.$echarts.chinaMap("chinaMap");
      this.$echarts.worldMap("worldMap");
    });
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
