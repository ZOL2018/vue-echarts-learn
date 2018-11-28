import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // 懒加载方式
      component: () => import('../views/index'),
      //  子集嵌套 路由
      children: [
        {
          path: '',
          name: 'default',
          // 懒加载方式
          component: () => import('../views/index')
        }
      ]
    }, {
      path: '/BasicLineChart',
      name: 'BasicLineChart',
      // 懒加载方式
      component: () => import('../views/echarts/Line/BasicLineChart')
    }, {
      path: '/BasicAreaChart',
      name: 'BasicAreaChart',
      // 懒加载方式
      component: () => import('../views/echarts/Line/BasicAreaChart')
    }
  ]
})
