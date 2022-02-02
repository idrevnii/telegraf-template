import { User } from 'typegram'

export function identificateUser(from: User | undefined) {
  if (from) {
    const id = from.id
    const firstName = from.first_name
    const lastName = from.last_name || ''
    return `${id}:${firstName}` + ` ${lastName}`
  } else {
    return 'unknown'
  }
}
