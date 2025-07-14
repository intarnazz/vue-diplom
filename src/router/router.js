import { createRouter, createWebHistory } from 'vue-router'
import { User } from '@/storage/user.js'
import PageHome from '@/pages/PageHome.vue'
import PageLogin from '@/pages/PageLogin.vue'
import PageReg from '@/pages/PageReg.vue'
import PageProfile from '@/pages/PageProfile.vue'
import PagePortfolioList from '@/pages/PagePortfolioList.vue'
import PageContactUs from '@/pages/PageContactUs.vue'
import PageAboutUs from '@/pages/PageAboutUs.vue'
import PageChat from '@/pages/PageChat.vue'
import PagePortfolio from '@/pages/PagePortfolio.vue'
import PageCalculator from '@/pages/PageCalculator.vue'
import PageMessageMe from '@/pages/PageMessageMe.vue'
import PageDocumentation from '@/pages/PageDocumentation.vue'
const user = User()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
    },
    {
      path: '/technical-documentation',
      name: 'dock',
      component: PageDocumentation,
    },
    {
      path: '/message-me',
      name: 'message-me',
      component: PageMessageMe,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: PageCalculator,
    },
    {
      path: '/portfolio/:id/:name',
      name: 'portfolio-id',
      props: true,
      component: PagePortfolio,
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
      component: PagePortfolioList,
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
      path: '/my-chat',
      name: 'chat',
      component: PageChat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (user.get.value) {
          next()
        } else {
          next({ name: 'login' })
        }
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: PageProfile,
      props: true,
      beforeEnter: (to, from, next) => {
        if (user.get.value) {
          next()
        } else {
          next({ name: 'login' })
        }
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
