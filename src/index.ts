import { Telegraf } from 'telegraf'

const BOT_TOKEN = process.env.BOT_TOKEN!
export const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Help text...'))

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
