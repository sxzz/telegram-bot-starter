import { webhookCallback } from 'grammy'
import { bot } from '~/src'

export default defineEventHandler((event) => {
  const handle = webhookCallback(bot, 'http')
  return handle(event.node.req, event.node.res)
})
