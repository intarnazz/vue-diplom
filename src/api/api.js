import { RESTAPI } from './restApi.js'
import { Image } from './image.js'

export const portfolio = await RESTAPI.create('portfolio')
export const chat = await RESTAPI.create('chat')
export const inquiry = await RESTAPI.create('inquiry')
export const massage = await RESTAPI.create('massage')

export const image = Image.create()
