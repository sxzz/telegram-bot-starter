# Telegram Bot Starter

A starter template for Telegram bots on Serverless, with [Vercel](https://vercel.com), [Netlify](https://netlify.com), and [more](https://nitro.unjs.io/deploy) support.

Built top of [Nitro](https://nitro.unjs.io/) and [Telegraf](https://telegraf.js.org).

## Local Development

1. Create a bot with [@BotFather](https://t.me/BotFather), and get the bot token.
2. Clone this repo.
3. Run `pnpm install` to install dependencies.
4. Copy `.env.example` to `.env`, and fill in the `BOT_TOKEN` and `SECRET_HASH` in `.env`.
5. Run `pnpm dev` to start the development server.
6. Expose your local server to the internet with [Local Port Forwarding of VSCode](https://code.visualstudio.com/docs/editor/port-forwarding) (**set Port Visibility to Public**) or [ngrok](https://ngrok.com/).
7. Visit https://your-domain.com/telegram-hook?setWebhook=true
8. Send `/start` to your bot.

## Deployment

1. Deploy on [Vercel](https://vercel.com), [Netlify](https://netlify.com) or [others](https://nitro.unjs.io/deploy), with `BOT_TOKEN` and `SECRET_HASH` environment variables.
2. Visit https://your-domain.com/telegram-hook?setWebhook=true
3. Send `/start` to your bot.

## Credits

Thanks to the project [jsjoeio/telegram-bot-template](https://github.com/jsjoeio/telegram-bot-template).

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2024 [三咲智子 Kevin Deng](https://github.com/sxzz)
