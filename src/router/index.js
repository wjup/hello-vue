import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Param from '@/components/Param'
import ParamData from '@/components/ParamData'
import Hidden from '@/components/Hidden'
import Stop from '@/components/Stop'
import Calculator from '@/components/Calculator'
import ListData from '@/components/ListData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test',
      name: 'test',
      component: Test
    }, {
      path: '/param',
      name: 'param',
      component: Param
    }, {
      path: '/ParamData/:id',
      name: 'ParamData',
      component: ParamData
    }, {
      path: '/hidden',
      name: 'Hidden',
      component: Hidden
    }, {
      path: '/stop',
      name: 'Stop',
      component: Stop
    }, {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
    }, {
      path: '/list',
      name: 'ListData',
      component: ListData
    }
  ]
})