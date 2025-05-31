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
      sessionStorage.setItem('token', res.token)
    }
    return res
  }
  async login(body) {
    const res = await this.#Post('authorization', body)
    if (res.success) {
      sessionStorage.setItem('token', res.token)
    }
    return res
  }
}
