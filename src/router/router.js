import { createRouter, createWebHistory } from 'vue-router'
import { UserStorage } from '@/api/userStorage.js'
import PageHome from '@/pages/PageHome.vue'
import PageLogin from '@/pages/PageLogin.vue'
import PageReg from '@/pages/PageReg.vue'
import PageProfile from '@/pages/PageProfile.vue'
import PagePortfolio from '@/pages/PagePortfolio.vue'
import PageContactUs from '@/pages/PageContactUs.vue'
import PageAboutUs from '@/pages/PageAboutUs.vue'

const user = new UserStorage()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
    },
    {
      path: '/authorization',
      name: 'login',
      component: PageLogin,
    },
    {
      path: '/registration',
      name: 'reg',
      component: PageReg,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PagePortfolio,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: PageContactUs,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: PageAboutUs,
    },
    {
      path: '/profile',
      name: 'profile',
      component: PageProfile,
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
