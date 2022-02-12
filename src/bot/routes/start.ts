import { Router } from 'telegraf'
import { startHandler } from '../handlers/start'
import { Context } from '../models'

export const startRoute = new Router<Context>(({ from, message }) => {
  if (from?.id) {
    if (message?.text === '/start') {
      return {
        route: 'start'
      }
    } else {
      return {
        route: 'other'
      }
    }
  }
  return {
    route: 'unknown'
  }
})

startRoute.on('start', startHandler)
startRoute.on('other', () => {
  console.log('Empty handler')
})
