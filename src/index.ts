import { initBot, stopBot } from './bot/app'
import { initDatabase } from './db/init'
import { logger } from './logger/logger'

async function gracefulStop() {
  await stopBot()
}

async function main() {
  await initDatabase()
  await initBot()

  process
    .on('unhandledRejection', (reason) => {
      logger.error(`Rejection: ${reason}`)
    })
    .on('uncaughtException', (err) => {
      logger.error(`Exception: ${err}`)
    })

  process.once('SIGINT', () => gracefulStop())
  process.once('SIGTERM', () => gracefulStop())
}

main()
  .catch((e) => logger.error(e))
  .finally(() => gracefulStop())
