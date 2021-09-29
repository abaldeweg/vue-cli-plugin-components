import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = () => {
  const items = {}
  const locales = require.context(
    './../src/locales',
    true,
    /([A-Za-z0-9-_]+)\.json$/i
  )

  locales.keys().forEach((key) => {
    const item = key.match(/([A-Za-z0-9-_]+)\./i)
    if (item) {
      items[item[1]] = locales(key)
    }
  })

  return items
}

export default new VueI18n({
  locale:
    window.localStorage.getItem('locale') || process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en-US',
  messages: messages(),
})
