module.exports = {
  pluginOptions: {
    i18n: {
      publicPath: process.env.NODE_ENV === 'production'
    ? '/porfolio/'
    : '/',
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
