export class UserStorage {
  get() {
    return localStorage.getItem('token')
  }
  set(token) {
    return localStorage.setItem('token', token)
  }
}
