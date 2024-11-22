import { TOKEN } from '~/src/env'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  if (query.token !== TOKEN) {
    throw createError({
      status: 401,
      statusMessage: 'Unauthorized',
      message: 'Invalid token',
    })
  }
})
