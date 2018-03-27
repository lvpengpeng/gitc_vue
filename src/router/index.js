import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Ticket from '@/page/Ticket'
import Home from '@/page/Home'
import News from '@/page/News'
import Chairman from '@/page/Chairman'
import Expert from '@/page/Expert'
import Guest from '@/page/Guest'
Vue.use(Router)

export default new Router({
  //去掉地址中的哈希#
  mode:"history",
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component:Ticket
    },
    {
      path: '/news',
      name: 'News',
      component:News
    },
    {
      path: '/chairman',
      name: 'Chairman',
      component:Chairman
    },
    {
      path: '/expert',
      name: 'Expert',
      component:Expert
    },
    {
      path: '/guest',
      name: 'Guest',
      component:Guest
    }
  ]
})