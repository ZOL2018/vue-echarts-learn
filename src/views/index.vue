<template>
  <div>
    <div class="title">VUE - ECHARTS - FOR - LEARN </div>
    <div class="else">
      <a @click="toIndex('/A')">VUEX-STORE-[A]</a>
      <a @click="toIndex('/B')">VUEX-STORE-[B]</a>
      <a @click="toIndex('/AMapChartsA')">js-Map-[AMapChartsA]</a>
    </div>
    <div class="content">
      <ol>
        <div class="content-left box">
          <li><a @click="toIndex('/BasicLineChart')">BasicLineChart</a></li>
          <li><a @click="toIndex('/BasicAreaChart')">BasicAreaChart</a></li>
          <li><a @click="toIndex('/SmoothedLineChart')">SmoothedLineChart</a></li>
          <li><a @click="toIndex('/StackedAreaChart')">StackedAreaChart</a></li>
          <li><a @click="toIndex('/StackedLineChart')">StackedLineChart</a></li>
        </div>
        <div class="content-left box">
          <li><a @click="toIndex('/RainFall')">RainFall</a></li>
        </div>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    toIndex (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang="scss">
  a{
    cursor: pointer;
  }
  a:hover{
    color: #2c2cff;
    //背景渐变色
    //background: linear-gradient(to top right, #2c2cff 10%, #ff282d 50%, #fefefd 100%);
    //背景渐变色
    //background: radial-gradient(circle, #CDDC39, #8BC34A);
    //背景渐变色
    //background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216)));
    //list-style-image: -webkit-gradient(linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216)));
    // 文字渐变色
    background-image: -webkit-linear-gradient(bottom, rgb(255, 34, 77), rgb(20, 11, 255));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .content{
    font-size: 16px;
  }
  .title{
    font-size: 24px;
  }
  .else{
    font-size: 14px;
    color: #ff443a;
  }
  .content-left{
    float: left;
  }
  .box{
    text-align: left;
    width: 200px;
  }
</style>
