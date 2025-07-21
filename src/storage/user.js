import { ref, computed, watch } from 'vue'
import { WebSocket } from '@/web-socket/web-socket.js'
import Pusher from 'pusher-js'

window.Pusher = Pusher
const token = ref(localStorage.getItem('token'))

watch(token, (newToken) => {
  if (newToken) {
    localStorage.setItem('token', newToken)
    const webSocket = new WebSocket()
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
