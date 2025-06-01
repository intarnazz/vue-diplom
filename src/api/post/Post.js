import { UserStorage } from '@/api/userStorage.js'
const API_URL = import.meta.env.VITE_API_URL
const userStorage = new UserStorage()

export async function Post(url = '', body = {}) {
  return await fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${userStorage.get()}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    .catch((e) => {
      throw e
    })
}
