<template>
  <div>
    <div class="title">RainFall(fail!)</div>
    <div id="BasicLineChart" style="width: 600px;height: 400px">
      <v-chart :options="option"/>
    </div>
  </div>
</template>

<script>
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip' // 数据提示标签
import 'echarts/lib/component/title' // 图表标题
import 'echarts/lib/component/legend' // 图表数据联动选择标签
import 'echarts/lib/component/grid' // 图表定位 影响未观察
import 'echarts/lib/component/toolbox' // 图表工具 下载等
/**
 * chart 类型  * chart # echarts/lib/chart/..
 * option 属性 * component #  echarts/lib/component/..
 */
export default {
  name: 'RainFall',
  data () {
    return {
      option: {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
