import { logger } from '../../logger/logger'
import { IContext } from '../models'
import { identificateUser } from '../utils'
const rateLimit = require('telegraf-ratelimit')

export function getRateLimitMiddleware() {
  return rateLimit({
    window: 3000,
    limit: 1,
    onLimitExceeded: ({ answerCbQuery, from, updateType, i18n }: IContext) => {
      logger.info(`Flood from: ${identificateUser(from)}`)
      if (updateType === 'callback_query') {
        answerCbQuery(i18n.t('stop_flood'))
      }
    }
  })
}
