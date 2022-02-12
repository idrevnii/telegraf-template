import { User } from '@prisma/client'
import I18n from 'telegraf-i18n'
import { TelegrafContext } from 'telegraf/typings/context'
import {
  ExtraSendMessage,
  User as TelegramUser
} from 'telegraf/typings/telegram-types'
import { Message } from 'typegram'

export interface Context extends TelegrafContext {
  i18n: I18n
  replyWithLocalization: (
    resourceKey: string,
    extra?: ExtraSendMessage
  ) => Promise<Message>
  whois: (from?: TelegramUser) => string

  user: User
}
