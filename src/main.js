import '@/assets/css/reset.css'
import '@/assets/css/normalise.css'
import '@/assets/css/nprogress.css'
import '@/assets/sass/style.sass'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router.js'

createApp(App).use(router).mount('#app')

// [ ] - register
// [ ] - login
// [ ] - profile
// [ ] - defaut image
// [ ] - heder if opener
// [ ] - 422 errors
