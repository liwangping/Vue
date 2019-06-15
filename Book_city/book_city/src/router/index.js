import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Registered from '@/components/Registered'
import Home from '@/components/Home'
import SellerSystem from '@/components/SellerSystem'
import father from '@/components/1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/registered',
      name: 'Registered',
      component: Registered
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/sellerSystem',
      name: 'SellerSystem',
      component: SellerSystem
    },
    {
      path: '/father',
      name: 'father',
      component: father
    }
  ]
})
