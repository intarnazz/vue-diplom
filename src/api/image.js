export class Image {
  static create() {
    const instance = new Image()
    instance.init()
    return instance
  }
  init() {
    this.url = import.meta.env.VITE_API_URL
    return this
  }
  get(id) {
    return `${this.url}image/${id}`
  }
}
