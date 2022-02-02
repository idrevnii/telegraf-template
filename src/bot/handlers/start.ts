import { IContext } from '../models'

export async function startHandler({ from, i18n, reply }: IContext) {
  if (from?.id) {
    reply(i18n.t('start_message'))
  }
}
