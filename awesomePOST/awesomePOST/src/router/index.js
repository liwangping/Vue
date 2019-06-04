import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/Pos'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Hi3 from '@/components/Hi3'
import Hi4 from '@/components/Hi4'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)//全局使用

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Pos',
    //   component: Pos
    // },{
      // path: '/',
      // name: 'Hi',
      // components: {
      //   default:Hi,
      //   left: Hi3,
      //   right: Hi4
      // },
    //   children:[
    //     {path: '/',name: "Hello/Hi", component:Hi},
    //     {path: 'hi1',name: "hi1", component:Hi1},
    //     {path: 'hi2',name: "hi2",component:Hi2},
    //   ]
    // },
    // {
    //   path: '/jspang',
    //   name: 'Hi',
    //   components: {
    //     default:Hi,
    //     left: Hi4,
    //     right: Hi3
    //   }
    // }
    {
      path: '/',
      name: 'Pos',
      component: Pos,
      alias:'/home1'
    },{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component: Params,
      beforeEnter:(to, from, next) => {
        console.log(to);
        console.log(from);
        next("/")
      }
    },{
      path:'/goHome',
      redirect:'/'
    },{
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },{
      path:'/hi1',
      component:Hi1,
      alias: '/jspang'//别名更友好
    },{
      path:'*',
      component:Error,//404页面
    },
  ]
})
