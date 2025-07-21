import { User } from '@/storage/user.js'
import { Auth } from '../auth.js'
const user = User()
const auth = new Auth()

const API_URL = import.meta.env.VITE_API_URL

export async function Post(url = '', body = {}) {
  return await fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${user.get.value}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status === 401) auth.logout()
      else return response.json()
    })
    .then((json) => {
      return json
    })
    .catch((e) => {
      throw e
    })
}
