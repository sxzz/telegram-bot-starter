import { TOKEN } from '~/src/env'
import { bot } from '../src'

export default eventHandler(async (evt) => {
  const host = getRequestHeader(evt, 'x-forwarded-host') || getRequestHost(evt)
  const webhookUrl = `https://${host}/telegram-hook`
  const success = await bot.api.setWebhook(webhookUrl, {
    drop_pending_updates: true,
    secret_token: TOKEN,
  })
  const info = await bot.api.getWebhookInfo()
  return {
    success,
    ...info,
  }
})
