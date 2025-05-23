export function save(key, value) {
  let arr = JSON.parse(localStorage.getItem(key))
  arr = arr ? arr : []
  if (!arr.includes(value)) {
    localStorage.setItem(key, JSON.stringify([...arr, value]))
  }
}

export function del(key, value) {
  let arr = JSON.parse(localStorage.getItem(key))
  arr = arr ? arr : []
  arr = arr.filter((e) => {
    return e !== value
  })
  localStorage.setItem(key, JSON.stringify([...arr]))
}

export function get(key) {
  const res = JSON.parse(localStorage.getItem(key))
  return res ? res : []
}

export function resave(key, value) {
  localStorage.removeItem(key)
  save(key, value)
}
