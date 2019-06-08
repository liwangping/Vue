import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from "@/components/home"
import HomeTable from "@/components/HomeTable"
import Form from "@/components/Form"
import Echarts from "@/components/Echarts"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {path: '/home_table', name:'表格', component:HomeTable},
        {path: '/form', name:'表单', component:Form},
        {path: '/echarts', name:'echarts', component:Echarts}
      ]
    }
  ]
})
