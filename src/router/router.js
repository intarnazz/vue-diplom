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
import PageDocumentation from '@/pages/dock/PageDockMain.vue'
import PageDockVF from '@/pages/dock/PageDockVF.vue'
import PageDockTSPVP from '@/pages/dock/PageDockTSPVP.vue'
import PageDockSPPSS from '@/pages/dock/PageDockSPPSS.vue'
import PageDockMPS from '@/pages/dock/PageDockMPS.vue'
import PageNotFound from '@/pages/PageNotFound.vue'
const user = User()

const dock = () => {
  // module
  const prefix = '/technical-documentation'
  return [
    {
      path: prefix,
      name: 'dock',
      component: PageDocumentation,
    },
    {
      path: `${prefix}/ventiliruemye-fasady`, // Вентилируемые фасады
      name: 'd.vf',
      component: PageDockVF,
    },
    {
      path: `${prefix}/tre-sendvich-paneli-vata-penopol`, //Трехслойные сэндвич-панели
      name: 'd.tspvp',
      component: PageDockTSPVP,
    },
    {
      path: `${prefix}/sendvich-paneli-poelementnoj-sborki-spps`, //Сэндвич-панели поэлементной сборки (СППС)
      name: 'd.sppss',
      component: PageDockSPPSS,
    },
    {
      path: `${prefix}/metallocherepica-proflist-sajding`, //Металлочерепица, профлист, металлический сайдинг
      name: 'd.mps',
      component: PageDockMPS,
    },
  ]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
    },
    ...dock(),
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
    {
      path: '/:pathMatch(.*)*', // универсальный маршрут для 404
      name: 'not-found',
      component: PageNotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
