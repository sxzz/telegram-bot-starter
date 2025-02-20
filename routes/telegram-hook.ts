import { webhookCallback } from 'grammy'
import { bot } from '~/src'
import { TOKEN } from '~/src/env'

export default defineEventHandler((event) => {
  const handle = webhookCallback(bot, 'http', {
    secretToken: TOKEN,
  })
  return handle(event.node.req, event.node.res)
})
