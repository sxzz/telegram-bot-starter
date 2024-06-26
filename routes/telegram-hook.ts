import process from 'node:process'
import { bot } from '../src'

const SECRET_HASH = process.env.SECRET_HASH

export default eventHandler(async (evt) => {
  const query = getQuery(evt)

  if (query.setWebhook === 'true') {
    const host =
      getRequestHeader(evt, 'x-forwarded-host') || getRequestHost(evt)
    const webhookUrl = `https://${host}/telegram-hook?secret_hash=${SECRET_HASH}`
    const isSet = await bot.telegram.setWebhook(webhookUrl)
    const info = await bot.telegram.getWebhookInfo()
    return `Set webhook to ${webhookUrl.replaceAll(
      SECRET_HASH,
      "*"
    )}: ${isSet}<br/>${JSON.stringify(info).replaceAll(
      SECRET_HASH,
      "*"
    )}`
  } else if (query.secret_hash === SECRET_HASH) {
    const body = await readBody(evt)
    await bot.handleUpdate(body)
  }

  return 'Forbidden'
})
