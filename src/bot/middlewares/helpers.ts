import { ExtraSendMessage, User } from 'telegraf/typings/telegram-types'
import { Context } from '../models'

export async function attachHelpers(ctx: Context, next: () => void) {
  const replyWithLocalization = async (
    resourceKey: string,
    extra?: ExtraSendMessage
  ) => {
    return ctx.reply(ctx.i18n.t(resourceKey), extra)
  }

  ctx.replyWithLocalization = replyWithLocalization
  ctx.whois = whois
  return next()
}

const whois = (from?: User) => {
  if (from) {
    const id = from.id
    const firstName = from.first_name
    const lastName = from.last_name || ''
    return `${id}:${firstName}` + ` ${lastName}`
  } else {
    return 'unknown'
  }
}
