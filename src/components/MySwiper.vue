<template>
  <div class="chart">
    <h3 class="title">全国</h3>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in swiperData" :key="index">
        <img :src="item.image" alt="" />
      </swiper-slide>
    </swiper>
    <!-- 指示器 -->
    <ul class="navigator">
      <li 
      @click="clickHandler(index)"
        class="navigatorItem"
        v-for="(item, index) in swiperData"
        :key="index"
        :class="{'active':index === currentIndex}"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script>
//局部引用Swiper
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "carrousel",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    let that = this;
    return {
      currentIndex: 0,
      swiperOptions: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
        on: {
          slideChangeTransitionEnd: function () {
            //这里的this指向swiper对象 而不是components对象
            console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide
            that.currentIndex = this.activeIndex;
          },
        },
      },
      swiperData: [
        {
          image:
            "https://img1.dxycdn.com/2020/0220/014/3397684583507458039-135.png",
          title: "新增疑似/新增确诊",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/697/3397684611424536901-135.png",
          title: "现存确诊/现存疑似",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/861/3397684624309439853-135.png",
          title: "死亡/治愈",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/168/3397686703073768694-135.png",
          title: "病死率",
        },
        {
          image:
            "https://img1.dxycdn.com/2020/0220/709/3397686724548816431-135.png",
          title: "治愈率",
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    clickHandler(index) {
      this.currentIndex = index
      this.swiper.slideTo(index, 1000, false);
    },
  },
};
</script>
<style scoped>
.line {
  padding: 0 10px;
  width: 100%;
  height: 300px;
}
.chart {
  position: relative;
  background: #fff;
  padding: 0.16rem 0;
}
.chart .title {
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}
.chart .swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.chart .swiper-pagination-bullet {
  width: calc(20% - 0.02rem);
  text-align: center;
  background: #f7f7f7;
  padding: 0.045rem;
  box-sizing: border-box;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.02rem;
}
.navigator {
  font-size: 0.12rem;
  list-style: none;
  display: flex;
  padding: 0 0.16rem;
  justify-content: center;
  margin: 0.06rem 0 0;
}
.navigatorItem {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
  width: calc(20% - 0.02rem);
  text-align: center;
  background: #f7f7f7;
  padding: 0.045rem;
  box-sizing: border-box;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.02rem;
  margin-left: 0.025rem;
}
.active {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
}
</style>