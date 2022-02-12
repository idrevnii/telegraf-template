import { findOrCreateUser } from '../../domain/db'
import { logger } from '../../logger/logger'
import { Context } from '../models'

export async function attachUser(ctx: Context, next: () => void) {
  if (!ctx.from) {
    throw new Error('No from field from update')
  }
  const user = await findOrCreateUser(ctx.from.id)
  logger.info(user)
  // ctx.user = user
  return next()
}
