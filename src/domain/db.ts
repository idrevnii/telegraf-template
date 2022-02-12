import { users } from '../db/init'
import { User } from '../db/models'
import { logger } from '../logger/logger'

export function insertUser(user: User) {
  return users.insert(user)
}

export function findUser(userId: number) {
  return users.findOne({ userId }, (err, doc) => {
    if (!err) {
      return doc
    }
  })
}

export function updateUser(userId: number, update: Partial<User>) {
  if (db.data?.users) {
    const user = findUser(userId)
    if (user) {
      return db.data.users.
    }
  }
}
