import { User } from '@prisma/client'
import { users } from '../db/init'

export async function insertUser(user: Omit<User, 'createdAt'>) {
  return users.create({ data: { ...user } })
}

export async function findUser(userId: number) {
  return users.findUnique({ where: { userId } })
}

export async function updateUser(userId: number, update: Partial<User>) {
  return users.update({ where: { userId }, data: update })
}

export async function deleteUser(userId: number) {
  return users.delete({ where: { userId } })
}

export async function findOrCreateUser(userId: number) {
  return users.upsert({
    where: { userId },
    update: {},
    create: { userId, language: 'en' }
  })
}
