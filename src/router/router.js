import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/PageHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
