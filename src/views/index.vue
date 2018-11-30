<template>
  <div>
    <div class="title">VUE - ECHARTS - FOR - LEARN </div>
    <div class="else">
      <a @click="toIndex('/A')">A</a>
      <a @click="toIndex('/B')">B</a>
    </div>
    <div class="content">
      <ol>
        <div class="content-left box">
          <li><a @click="toIndex('/BasicLineChart')">BasicLineChart</a></li>
          <li><a @click="toIndex('/BasicAreaChart')">BasicAreaChart</a></li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </div>
        <div class="content-left box">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
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
