import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Ticket from '@/page/Ticket'
import Home from '@/page/Home'
import News from '@/page/News'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }
  ]
})
