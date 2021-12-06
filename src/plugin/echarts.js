import echarts from "echarts"

const install = function (Vue) {
  // 利用ES5提供的方法给Object对象绑定一些方法：defineProperty
  Object.defineProperties(Vue.prototype, {
    $echarts: {
      get() {
        return {
          //挂载方法：通过Vue对象去调用了
          //1.折线图
          line: function (id) {
            var dom = document.getElementById(id);
            var myChart = echarts.init(dom);
            var option = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  data: [150, 230, 224, 218, 135, 147, 260],
                  type: 'line'
                }
              ]
            };
            myChart.setOption(option)
          },
          chinaMap: function(id) {
            var myChart = echarts.init(document.getElementById(id));
            var option = {
                series: [{
                  name: '省', 
                  type: 'map', //配置图表类型，charts
                  map: 'china', //中国地图
                  roam: false, //是否允许自动缩放
                  zoom: 1.2,
                  aspectScale: 0.75,
                  label: { //配置字体
                      normal: {
                          show: true,
                          textStyle: {
                            fontSize: 8,
                            color: 'rgba(0,0,0,0.4)'
                          }
                      }
                  },
                  itemStyle: { //配置地图样式
                      normal: {
                          areaColor: 'rgba(0,255,236,0)', //区域颜色
                          borderColor: 'rgba(118,237,236,1)', //边框颜色
                      },
                      emphasis: { //阴影数据效果
                          areaColor: 'rgba(255,180,0,0.8)',
                          shadowOffsetX: 0,
                          shadowOffsetY: 0,
                          shadowBlur: 20,
                          borderWidth: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }]
              };
            myChart.setOption(option)
          }
        }
      }
    }
  })
}

export default install