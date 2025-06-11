import { RESTAPI } from './restApi.js'
import { Image } from './image.js'
import { Auth } from './auth.js'

export const portfolio = await RESTAPI.create('portfolio')
export const chat = await RESTAPI.create('chat')
export const inquiry = await RESTAPI.create('inquiry')
export const message = await RESTAPI.create('message')
export const auth = await Auth.create()
export const image = Image.create()
