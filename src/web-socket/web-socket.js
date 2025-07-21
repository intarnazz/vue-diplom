import { User } from '@/storage/user.js'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

export class WebSocket {
  constructor() {
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
      authEndpoint: `${import.meta.env.VITE_API_URL}broadcasting/auth`,
      auth: {
        headers: {
          Authorization: 'Bearer ' + user.get.value,
        },
      },
    })
  }
}
