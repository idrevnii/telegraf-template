import I18n from 'telegraf-i18n'
import { TelegrafContext } from 'telegraf/typings/context'
import { ExtraSendMessage } from 'telegraf/typings/telegram-types'
import { Message, User } from 'typegram'
import { UserModel } from '../db/User'

export interface Context extends TelegrafContext {
  i18n: I18n
  replyWithLocalization: (
    resourceKey: string,
    extra?: ExtraSendMessage
  ) => Promise<Message>
  whois: (from?: User) => string

  user: UserModel
}
