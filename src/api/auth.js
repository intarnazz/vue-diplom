export class Auth {
  #Post
  #userStorage
  static async create() {
    const instance = new Auth()
    await instance.init()
    return instance
  }
  async init() {
    const { Post } = await import('./post/Post.js')
    const { UserStorage } = await import('./userStorage.js')
    this.#Post = Post
    this.#userStorage = new UserStorage()
    return this
  }
  async reg(body) {
    const res = await this.#Post('registration', body)
    if (res.success) {
      this.#userStorage.set(res.token)
    }
    return res
  }
  async login(body) {
    const res = await this.#Post('authorization', body)
    if (res.success) {
      this.#userStorage.set(res.token)
    }
    return res
  }
  async user() {
    const res = await this.#Post('profile')
    return res
  }
}
