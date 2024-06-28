import process from 'node:process'
import { bot } from '../src'

const SECRET_HASH = process.env.SECRET_HASH!

export default eventHandler(async (evt) => {
  const query = getQuery(evt)
  if (query.secret_hash !== SECRET_HASH) {
    return 'Forbidden'
  }

  const body = await readBody(evt)
  await bot.handleUpdate(body)
  return 'OK'
})
