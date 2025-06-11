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
  authEndpoint: 'http://127.0.0.1:8000/api/broadcasting/auth', // 👈 важно
  auth: {
    headers: {
      Authorization: 'Bearer ' + user.get.value,
    },
  },
})

createApp(App).use(router).mount('#app')

// [X] - php chatlist new-top
// [ ] - chat page
// [ ] - portfolio page
// [ ] - calkulator
// [ ] - adaptiv
// [ ] - host
// [ ] - diplom

// [ ] - defaut image
// [ ] - heder if opener
// [ ] - 422 errors
// [ ] - крифая кнопка в форме
// [ ] - api.js доступ
// [ ] - logout component button
