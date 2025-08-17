// api.js
import { RESTAPI } from './restApi.js'
import { Image } from './image.js'
import { Auth } from './auth.js'

export const portfolio = RESTAPI.create('portfolio')
export const chat = RESTAPI.create('chat')
export const inquiry = RESTAPI.create('inquiry')
export const message = RESTAPI.create('message')
export const service = RESTAPI.create('service')
export const contact = RESTAPI.create('contact')
export const guest_query = RESTAPI.create('guest-query')
export const auth = Auth.create()
export const image = Image.create()

