import { initBot } from './bot/app'
import { logger } from './logger/logger'

;(async () => {
  await initBot()

  process
    .on('unhandledRejection', (reason) => {
      logger.warn(`Rejection: ${reason}`)
    })
    .on('uncaughtException', (err) => {
      logger.warn(`Exception: ${err}`)
    })
})()
