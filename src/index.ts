import { Telegraf } from 'telegraf'
import { BOT_TOKEN } from './env'

export const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Help text...'))
