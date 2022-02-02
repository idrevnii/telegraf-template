import path from 'path'
import I18n from 'telegraf-i18n'

export const i18n = new I18n({
  defaultLanguage: 'ru',
  directory: path.resolve(__dirname, './../locales')
})

export function getI18nMiddleware() {
  return i18n.middleware()
}
