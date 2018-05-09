let generateRoutes = ['/']

module.exports = {
  head: {
    title: 'Vite - Fast, No Fee, Scalability Contract Platform',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'author', content: 'vite lab'},
      {name: 'keywords', content: 'vite,crypto,dag,bitcoin,vitecoin,contract platform'}
    ]
  },
  loading: {
    color: '#7FB2FE'
  },
  build: {
    extractCSS: true,
    vendor: ['babel-polyfill'],
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false // Fix bulma css warnings
        }
      }
    }
  },
  plugins: ['~/plugins/fontawesome', {src: '~/plugins/vue-headroom', ssr: false}],
  generate: {
    routes: generateRoutes
  },
  router: {
    middleware: 'i18n'
  },
  modules: [
    '@nuxtjs/webpackmonitor',
    '@nuxtjs/pwa',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          name: 'English',
          langFile: 'en.js'
        },
        {
          code: 'zh',
          name: '中文',
          langFile: 'zh.js'
        }
      ],
      defaultLocale: 'zh',
      detectBrowserLanguage: true,
      redirectCookieKey: 'redirected',
      useRedirectCookie: true,
      loadLanguagesAsync: true,
      langDir: 'locales/',
      ignorePaths: [],
      vueI18n: {
        fallbackLocale: 'zh',
        messages: {
          /*
          * make the default locale can work in fallback in ssr.
          * */
          zh: require('./locales/zh.js')
        }
      }
    }]
  ],
  css: [
    '~/assets/main.scss'
  ],
  render: {
    gzip: { threshold: 1 }
  }
}
