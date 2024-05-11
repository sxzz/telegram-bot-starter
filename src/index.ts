import process from 'node:process'
import { Telegraf } from 'telegraf'

const BOT_TOKEN = process.env.BOT_TOKEN!
export const bot = new Telegraf(BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Help text...'))
