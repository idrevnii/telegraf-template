import { Context } from '../models'

export async function startHandler({ from, replyWithLocalization }: Context) {
  if (from?.id) {
    replyWithLocalization('start_message')
  }
}
