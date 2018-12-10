// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.readMe with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './store'
/* amap */
import VueAMap from 'vue-amap'

// import vue-echarts component
import ECharts from 'vue-echarts/components/ECharts'
Vue.component('v-chart', ECharts)

Vue.config.productionTip = false
Vue.use(Vuex)
/* amap */
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '475d0183ed7417f73946a660ae862be6',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0', // ui库版本，不配置不加载
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App) // vue vue-router
})
