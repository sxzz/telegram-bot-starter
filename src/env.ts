import process from 'node:process'

export const TOKEN = process.env.TOKEN!
export const BOT_TOKEN = process.env.BOT_TOKEN!

if (!TOKEN || !BOT_TOKEN) {
  throw new Error('missing env')
}
