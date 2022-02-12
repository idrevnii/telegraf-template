require('dotenv').config()
import Telegraf from 'telegraf'
import { logger } from '../logger/logger'
import { attachHelpers } from './middlewares/helpers'
import { attachI18n } from './middlewares/i18n'
import { attachRateLimit } from './middlewares/rateLimit'
import { attachUser } from './middlewares/user'
import { Context } from './models'
import { startRoute } from './routes/start'

export const bot = new Telegraf<Context>(process.env.BOT_TOKEN || '')

export async function initBot() {
  bot
    .use(attachI18n())
    .use(attachRateLimit())
    .use(attachHelpers)
    .use(attachUser)

  bot.on('message', startRoute)

  bot.catch((err: Error) => logger.error(err))

  bot.telegram
    .deleteWebhook({
      drop_pending_updates: true
    })
    .then(() => bot.launch().then(() => logger.info('Bot started')))
    .catch((err) => logger.error(err))
}

export async function stopBot() {
  await bot.stop()
}
