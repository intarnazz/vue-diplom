const API_URL = import.meta.env.VITE_API_URL

export async function Get(url, obj = {}) {
  let search = ''
  if (obj.search) search = btoa(unescape(encodeURIComponent(obj.search)))
  return await fetch(`${API_URL}${url}`, {
    method: 'GET',
    headers: {
      skip: obj.skip ?? 0,
      take: obj.take ?? 6,
      ids: obj.ids ?? '',
      brand: obj.brand ?? '',
      material: obj.material ?? '',
      search: search,
      responseId: obj.response_id ?? '1',
    }
  })
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    .catch((e) => {
      throw e
    })
}
