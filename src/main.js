// import '@/assets/css/reset.css'
// import '@/assets/css/normalise.css'
import '@/assets/css/nprogress.css'
import '@/assets/sass/style.sass'
import '@/assets/css/tailwind.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router.js'
import { WebSocket } from '@/web-socket/web-socket.js'

const webSocket = new WebSocket()

createApp(App).use(router).mount('#app')

// [ ] - SEO

// [ ] - Кеширование некоторых каталогов (portfolio, contct)


