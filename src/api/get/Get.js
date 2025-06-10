import { User } from '@/storage/user.js'
const user = User()

const API_URL = import.meta.env.VITE_API_URL

export async function Get(url, obj = {}) {
  let search = ''
  if (obj.search) search = btoa(unescape(encodeURIComponent(obj.search)))
  return await fetch(`${API_URL}${url}`, {
    method: 'GET',
    headers: {
      limit: obj.limit ?? 5,
      offset: obj.offset ?? 0,
      ids: obj.ids ?? '',
      brand: obj.brand ?? '',
      material: obj.material ?? '',
      search: search,
      responseId: obj.response_id ?? '1',
      Authorization: `Bearer ${user.get.value}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    .catch((e) => {
      throw e
    })
}
