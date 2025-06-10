import { ref, computed, watch } from 'vue'

const token = ref(localStorage.getItem('token'))

watch(token, (newToken) => {
  if (newToken) {
    localStorage.setItem('token', newToken)
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
