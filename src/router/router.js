import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/PageHome.vue'
import Login from '@/pages/PageLogin.vue'
import Reg from '@/pages/PageReg.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/authorization',
      name: 'login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'reg',
      component: Reg,
    },
    // {
    //   path: '/door/:id/:name',
    //   name: 'door',
    //   component: Door,
    //   props: true
    // },
  ],
})

export default router
