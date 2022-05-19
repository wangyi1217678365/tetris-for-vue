import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  // legacy: false,
  locale: 'ch', // set locale
  messages: {
    ch: {
      titleTetris: '俄罗斯方块',
      goBack: '返回',
      languargesText: '多语言/中',
      theme: '主题'
    },
    en: {
      titleTetris: 'tetris',
      goBack: 'back',
      languargesText: 'langs/en',
      theme: 'theme'
    },
  },
})

export default i18n