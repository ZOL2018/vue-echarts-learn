<template>
  <div>
    <div class="title">SmoothedLineChart</div>
    <div id="BasicLineChart" style="width: 600px;height: 400px">
      <v-chart :options="option"/>
    </div>
  </div>
</template>

<script>
import 'echarts/lib/chart/line'
export default {
  name: 'SmoothedLineChart',
  data () {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
