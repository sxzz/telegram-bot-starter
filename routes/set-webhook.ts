import process from 'node:process'
import { bot } from '../src'

const TOKEN = process.env.TOKEN!

export default eventHandler(async (evt) => {
  const host = getRequestHeader(evt, 'x-forwarded-host') || getRequestHost(evt)
  const webhookUrl = `https://${host}/telegram-hook?token=${TOKEN}`
  const isSet = await bot.api.setWebhook(webhookUrl)
  const info = await bot.api.getWebhookInfo()
  return `Set webhook to ${webhookUrl.replaceAll(
    TOKEN,
    '*',
  )}: ${isSet}<br/>${JSON.stringify(info).replaceAll(TOKEN, '*')}`
})
