import { Bot } from 'grammy'
import { BOT_TOKEN } from './env'

export const bot = new Bot(BOT_TOKEN)

bot.command('start', (ctx) => ctx.reply('Welcome!'))
