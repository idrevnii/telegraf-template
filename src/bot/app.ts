require('dotenv').config()
import Telegraf from 'telegraf'
import { logger } from '../logger/logger'
import { getI18nMiddleware } from './middlewares/i18n'
import { getRateLimitMiddleware } from './middlewares/rateLimit'
import { IContext } from './models'
import { startRoute } from './routes/start'

export const bot = new Telegraf<IContext>(process.env.BOT_TOKEN || '')

export async function initBot(): Promise<void> {
  bot.use(getI18nMiddleware())
  bot.use(getRateLimitMiddleware())

  bot.on('message', startRoute)

  bot.catch((err: Error) => logger.warn(err))

  process.once('SIGINT', () => bot.stop())
  process.once('SIGTERM', () => bot.stop())

  bot.telegram
    .deleteWebhook({
      drop_pending_updates: true
    })
    .then(() => bot.launch().then(() => logger.info('Bot started')))
    .catch((err) => logger.warn(err))
}
