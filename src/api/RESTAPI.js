export class RESTAPI {
  #prefix
  #Get
  #Post
  #PostSendFile
  constructor(prefix) {
    this.#prefix = prefix
  }
  static async create(prefix) {
    const instance = new RESTAPI(prefix)
    await instance.init()
    return instance
  }
  async init() {
    const { Get } = await import('./get/Get.js')
    const { Post } = await import('./post/Post.js')
    const { PostSendFile } = await import('./post/PostSendFile.js')
    this.#Get = Get
    this.#Post = Post
    this.#PostSendFile = PostSendFile
    return this
  }
  async get(id) {
    return await this.#Get(`${this.#prefix}/${id}`)
  }
  async all() {
    return await this.#Get(this.#prefix)
  }
  async add(data) {
    return await this.#Post(this.#prefix, data)
  }
  async #Push(url, method, data) {
    return await this.#Post(`${url}/${data.id}`, { _method: method, ...data })
  }
  async patch(data) {
    return await this.#Push(this.#prefix, 'PATCH', data)
  }
  async delete(data) {
    return await this.#Push(this.#prefix, 'DELETE', data)
  }
  async sendImage(file) {
    return await this.#PostSendFile('image', file)
  }
}
