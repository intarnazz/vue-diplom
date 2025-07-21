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

// [X] - форма гостевого запроса, когда мы user
// [X] - техническая документация
// [x] - Message Me вызазиет за граници
// [X] - общая форма кринжовая кнопка
// [X] - about-us добавить секции
// [X] - calculator оформить как все формы. Картинка
// [X] - Портфолио новое фото на фон
// [X] - portfolio/1/Ms новый дизайн
// [X] - user новый профиль
// [X] - чаты, проблема с header
// [X] - message me 9/16
// [X] - выход из чата
// [X] - подсказка что при выходе создаётся чат
// [X] - переход в чат при создании чата
// [X] - не svg пятна
// [X] - чаты скрол x y
// [ ] - адаптив проверить
// [ ] - редерект принаписании запроса

// [ ] - адаптив
// [ ] - seo

// [ ] - контакты
// [ ] - user форма смены данных
