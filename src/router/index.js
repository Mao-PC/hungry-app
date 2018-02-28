import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Guide from '@/components/Guide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Guide',
      component: Guide
    // },
    // {
    //   path: '/',
    //   name: 'Nav',
    //   component: Nav
    }
  ]
})
