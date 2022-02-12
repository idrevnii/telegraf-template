import Nedb from 'nedb'
import { logger } from '../logger/logger'
import { User } from './models'

export const users = new Nedb<User>('./db.json')

export async function initDatabase() {
  users.loadDatabase((error) => {
    if (error) {
      logger.error(`Error with database connection: ${error}`)
    }
    logger.info('Database connected!')
  })
}
