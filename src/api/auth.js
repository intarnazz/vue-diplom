import { Post } from './post/Post.js'
import { User } from '@/storage/user.js'

const user = User()

export class Auth {
  #Post

  constructor() {
    this.#Post = Post
  }

  static create() {
    return new Auth()
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
    user.unset()
    location.reload()
    const res = await this.#Post('logout')
    return res
  }

  user() {
    const res = this.#Post('profile')
    if (!res.success && res.message === 'Unauthenticated.') {
      this.logout()
    }
    return res
  }
}
