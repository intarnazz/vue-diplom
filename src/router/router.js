import { createRouter, createWebHistory } from 'vue-router'
import { UserStorage } from '@/api/userStorage.js'
import Home from '@/pages/PageHome.vue'
import Login from '@/pages/PageLogin.vue'
import Reg from '@/pages/PageReg.vue'
import Profile from '@/pages/PageProfile.vue'

const user = new UserStorage()

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
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      props: true,
      beforeEnter: (to, from, next) => {
        if (user.get()) {
          next()
        } else {
          next({ name: 'login' })
        }
      },
    },
  ],
})

export default router
