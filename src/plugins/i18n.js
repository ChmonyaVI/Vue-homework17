import { createI18n } from 'vue-i18n'
import localesEN from '@/locales/en.json'
import localesRU from '@/locales/ru.json'

const i18n = createI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'ru',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ru',
    messages: {
        en: localesEN,
        ru: localesRU,
    },
})

export default i18n
