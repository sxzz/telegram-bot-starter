import { TOKEN } from '~/src/env'

export default defineEventHandler((event) => {
  if (event.path === '/telegram-hook') return

  let { token } = getQuery(event)
  token ||= getCookie(event, 'token')

  if (!token || token !== TOKEN) {
    throw createError({
      status: 401,
      statusMessage: 'Unauthorized',
      message: 'Invalid token',
    })
  }

  setCookie(event, 'token', TOKEN, {
    httpOnly: true,
    maxAge: 86400,
  })
})
