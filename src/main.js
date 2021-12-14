import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/common.css"
//导入第三方插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)
//导入自定义插件
import Echarts from "./plugin/echarts"
import "../node_modules/echarts/map/js/china.js"
import "../node_modules/echarts/map/js/world.js"
//引入vant
import "./plugin/vant"

//导入自定义组建
import Tabs from './components/tabs'
Vue.use(Tabs);

Vue.use(Echarts)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
