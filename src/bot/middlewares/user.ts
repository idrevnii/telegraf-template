import { findOrCreateUser } from '../../domain/db'
import { Context } from '../models'

export async function attachUser(ctx: Context, next: () => void) {
  if (!ctx.from) {
    throw new Error('No from field from update')
  }
  const user = await findOrCreateUser(ctx.from.id)
  if (!user) {
    throw new Error(`Failed to find or create user with id ${ctx.from.id}`)
  }
  ctx.user = user
  return next()
}
