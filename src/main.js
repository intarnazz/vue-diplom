// import '@/assets/css/reset.css'
// import '@/assets/css/normalise.css'
import '@/assets/css/nprogress.css'
import '@/assets/sass/style.sass'
import '@/assets/css/tailwind.css'
import { createApp } from 'vue'
import { User } from '@/storage/user.js'
import App from '@/App.vue'
import router from '@/router/router.js'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

const user = User()
window.Pusher = Pusher

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: import.meta.env.VITE_APP_WEBSOCKETS_KEY,
  wsHost: import.meta.env.VITE_APP_WEBSOCKETS_SERVER,
  wsPort: 6001,
  cluster: 'mt1',
  forceTLS: false,
  disableStats: true,
  authEndpoint: 'http://127.0.0.1:8000/api/broadcasting/auth',
  auth: {
    headers: {
      Authorization: 'Bearer ' + user.get.value,
    },
  },
})

createApp(App).use(router).mount('#app')

// [X] - форма гостевого запроса, когда мы user
// [X] - техническая документация
// [ ] - Message Me вызазиет за граници
// [ ] - общая форма кринжовая кнопка
// [ ] - общая форма перевод ошибок
// [ ] - about-us добавить секции
// [ ] - calculator оформить как все формы. Картинка
// [ ] - Портфолио новое фото на фон
// [ ] - portfolio/1/Ms новый дизайн
// [ ] - user новый профиль
// [ ] - user форма смены данных
// [ ] - чаты, проблема с header
// [ ] - выход из чата
// [ ] - подсказка что при выходе создаётся чат
// [ ] - переход в чат при создании чата
// [ ] - адаптив
// [ ] - seo
