export const admin = () => {
  return sessionStorage.getItem('token') != undefined
}
export const logout = () => {
  sessionStorage.removeItem('token')
  window.location.href = '/'
}
