<template>
  <div>
    <div class="title">BasicAreaChart</div>
    <div id="BasicAreaChart" style="width: 600px;height: 400px">
      <v-chart :options="option"/>
    </div>
  </div>
</template>

<script>
// import vue-echarts lib for line
import 'echarts/lib/chart/line'
/**
 * chart 类型  * chart # echarts/lib/chart/..
 * option 属性 * component #  echarts/lib/component/..
*/
export default {
  name: 'BasicAreaChart',
  data () {
    return {
      option: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }]
      }
    }
  }
}
</script>

<style scoped>
  .title{
    width: 240px;
    text-align: left;
    border-bottom: 6px rgba(255, 52, 47, 0.8) dotted;
    border-left: 6px rgba(255, 52, 47, 0.8) dotted;
  }
</style>
