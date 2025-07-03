import '@/assets/css/reset.css'
import '@/assets/css/normalise.css'
import '@/assets/css/nprogress.css'
import '@/assets/sass/style.sass'
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

// [X] - eve на новые чаты
// [X] - portfolio page
// [X] - calkulator
// [X] - 422 errors
// [X] - слайдер
// [X] - ссылки index о нас
// [X] - кривая index о нас
// [X] - профиль ссылка на чаты через компонент
// [X] - ошибка аторизации
// [X] - adaptiv
// [X] - рагинация chat list
// [X] - page up при открытии страници
// [X] - побольше полей для portfolio
// [X] - ссылки в slider

// [ ] - User -> quest
// [ ] - гостевой запрос
// [ ] - чаты с уведомлнием вверху (на бек)
// [ ] - adaptiv
// [ ] - мега статья
// [ ] - фотки где можно
// [ ] - mark где можно
