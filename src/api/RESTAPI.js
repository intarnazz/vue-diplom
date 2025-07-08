import { Get } from './get/Get.js'
import { Post } from './post/Post.js'
import { PostSendFile } from './post/PostSendFile.js'

export class RESTAPI {
  #prefix
  #Get
  #Post
  #PostSendFile

  constructor(prefix) {
    this.#prefix = prefix
    this.#Get = Get
    this.#Post = Post
    this.#PostSendFile = PostSendFile
  }

  static create(prefix) {
    return new RESTAPI(prefix)
  }

  get(id, header = {}) {
    return this.#Get(`${this.#prefix}/${id}`, header)
  }

  all(data = {}) {
    return this.#Get(this.#prefix, data)
  }

  add(data) {
    return this.#Post(this.#prefix, data)
  }

  #Push(url, method, data) {
    return this.#Post(`${url}/${data.id}`, { _method: method, ...data })
  }

  patch(data) {
    return this.#Push(this.#prefix, 'PATCH', data)
  }

  delete(data) {
    return this.#Push(this.#prefix, 'DELETE', data)
  }

  sendImage(file) {
    return this.#PostSendFile('image', file)
  }
}
