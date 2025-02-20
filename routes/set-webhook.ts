import { bot } from '../src'

export default eventHandler(async (evt) => {
  const host = getRequestHeader(evt, 'x-forwarded-host') || getRequestHost(evt)
  const webhookUrl = `https://${host}/telegram-hook`
  const success = await bot.api.setWebhook(webhookUrl)
  const info = await bot.api.getWebhookInfo()
  return {
    success,
    ...info,
  }
})
