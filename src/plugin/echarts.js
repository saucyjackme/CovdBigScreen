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
          chinaMap: function (id) {
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
                },
                data:[{
                  name:"内蒙古",
                  value: 10,
                  itemStyle:{ normal:{areaColor:"#ffff"}}
                }]
              }]
            };
            myChart.setOption(option)
          },
          worldMap: function (id) {
            var myChart = echarts.init(document.getElementById(id));
            var option = {
              series: [
                {
                  type: 'map', // 类型
                  // 系列名称，用于tooltip的显示，legend 的图例筛选 在 setOption 更新数据和配置项时用于指定对应的系列
                  name: '世界地图',
                  mapType: 'world', // 地图类型
                  // 是否开启鼠标缩放和平移漫游 默认不开启 如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move' 设置成 true 为都开启
                  roam: true, // 图形上的文本标签
                  label: {
                    show: false // 是否显示对应地名
                  },
                  itemStyle: { // 地图区域的多边形 图形样式
                    areaColor: '#7B68EE', // 地图区域的颜色 如果设置了visualMap，areaColor属性将不起作用
                    borderWidth: 0.5, // 描边线宽 为 0 时无描边
                    borderColor: '#000', // 图形的描边颜色 支持的颜色格式同 color，不支持回调函数
                    borderType: 'solid' // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
                  },
                  emphasis: {  // 高亮状态下的多边形和标签样式
                    label: {
                      show: true, // 是否显示标签
                      color: '#red' // 文字的颜色 如果设置为 'auto'，则为视觉映射得到的颜色，如系列色
                    },
                    itemStyle: {
                      areaColor: '#FF6347' // 地图区域的颜色
                    }
                  },
                }
              ]
            };
            myChart.setOption(option)
          }
        }
      }
    }
  })
}

export default install