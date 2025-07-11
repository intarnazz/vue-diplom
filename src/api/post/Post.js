import { User } from '@/storage/user.js'
const user = User()

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
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    .catch((e) => {
      throw e
    })
}
