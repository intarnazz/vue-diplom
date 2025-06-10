import { User } from '@/storage/user.js'
const user = User()

export class Auth {
  #Post
  static async create() {
    const instance = new Auth()
    await instance.init()
    return instance
  }
  async init() {
    const { Post } = await import('./post/Post.js')
    this.#Post = Post
    return this
  }
  async reg(body) {
    const res = await this.#Post('registration', body)
    if (res.success) {
      user.set(res.token)
    }
    return res
  }
  async login(body) {
    const res = await this.#Post('authorization', body)
    if (res.success) {
      user.set(res.token)
    }
    return res
  }
  async logout() {
    const res = await this.#Post('logout')
    user.unset()
    location.reload()
    return res
  }
  async user() {
    const res = await this.#Post('profile')
    if (!res.success && res.message === 'Unauthenticated.') {
      this.logout()
    }
    return res
  }
}
