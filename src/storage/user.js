import { ref, computed, watch } from 'vue'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher
const token = ref(localStorage.getItem('token'))

watch(token, (newToken) => {
  if (newToken) {
    localStorage.setItem('token', newToken)
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
          Authorization: 'Bearer ' + newToken,
        },
      },
    })
  } else {
    localStorage.removeItem('token')
  }
})

export function User() {
  const get = computed(() => token.value)
  const set = (newToken) => {
    token.value = newToken
  }
  const unset = () => {
    token.value = null
  }
  return {
    get: get,
    set,
    unset,
  }
}
