import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import hu from '../locales/hu.json'

export const i18n = createI18n({
  legacy: false, // composition API támogatás
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    hu,
  },
  globalInjection: true, // így nem kell minden komponensbe importálni a t() függvényt
})
