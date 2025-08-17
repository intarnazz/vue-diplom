import { User } from '@/storage/user.js'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

export class WebSocket {
  constructor() {
    const user = User()

    // Enable pusher logging - don't include this in production
    // Pusher.logToConsole = true

    window.Pusher = Pusher
    window.Echo = new Echo({
      broadcaster: 'pusher',
      key: import.meta.env.VITE_APP_WEBSOCKETS_KEY,
      cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
      // cluster: 'mt1',
      forceTLS: true,
      encrypted: true,
      disableStats: true,
      authEndpoint: `${import.meta.env.VITE_API_URL}broadcasting/auth`,
      auth: {
        headers: {
          Authorization: 'Bearer ' + user.get.value,
        },
      },
    })
  }
}
