// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.readMe with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
// import vue-echarts component
import ECharts from 'vue-echarts/components/ECharts'
Vue.component('v-chart', ECharts)

Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App) // vue vue-router
})
