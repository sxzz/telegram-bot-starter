import { bot } from '../src'

export default eventHandler(async (evt) => {
  const body = await readBody(evt)
  await bot.handleUpdate(body)
  return 'OK'
})
