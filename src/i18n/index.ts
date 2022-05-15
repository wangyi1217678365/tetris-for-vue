// src/i18n/index.ts
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'ch', // set locale
  messages: {
    ch: {
      message: {
        hello: '你好世界',
      },
    },
    en: {
      message: {
        hello: 'hello world',
      },
    },
  },
})

export default i18n