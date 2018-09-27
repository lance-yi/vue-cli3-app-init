import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting  ==> 路径级的代码分裂
      // this generates a separate chunk (about.[hash].js) for this route ==> 这将为这条路线生成一个单独的块（about.[hash].js）
      // which is lazy-loaded when the route is visited. ==> 当路线被访问时，它是延迟加载的.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
