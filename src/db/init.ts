import { PrismaClient } from '@prisma/client'
import { logger } from '../logger/logger'

const prisma = new PrismaClient()

export const users = prisma.user

export async function initDatabase() {
  return prisma
    .$connect()
    .then(() => logger.info('Database connected!'))
    .catch((error) => logger.error(`Error with database connection: ${error}`))
}

export async function stopDatabase() {
  return prisma.$disconnect()
}
