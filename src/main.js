import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/common.css"
//导入自定义插件
import Echarts from "./plugin/echarts"
import "../node_modules/echarts/map/js/china.js"
import "../node_modules/echarts/map/js/world.js"

//导入自定义组建
import Tabs from './components/tabs/index'
Vue.use(Tabs);

Vue.use(Echarts)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
