import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Skills from '@/components/User/Skills'
import AboutMe from '@/components/User/AboutMe'
import Proyects from '@/components/User/Proyects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
      // beforeEnter: AuthGuard
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/proyects',
      name: 'Proyects',
      component: Proyects
    }
  ],
  mode: 'history'
})
