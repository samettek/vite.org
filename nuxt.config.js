let generateRoutes = ['/']

module.exports = {
  head: {
    title: 'Vite · Fast, No Fee, Scalability Contract Platform',
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
    },
    extend (config) {
      config.resolve.alias['chart.js'] = 'chart.js/dist/Chart.min'
    }
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/fontawesome', '~/plugins/vue-scrollactive'],
  generate: {
    routes: generateRoutes
  },
  modules: [
    '@nuxtjs/webpackmonitor',
    '@nuxtjs/pwa',
    ['xui-module', {
      'mdi': {
        active: false // Do not load Material Design Icons
      },
      'bulma': {
        active: false
      },
      'hover.css': {
        active: false
      },
      'spacing': {
        active: false
      },
      'vue-headroom': {
        active: true
      },
      'vue-scrollactive': {
        active: false
      }
    }],
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
      defaultLocale: 'en',
      // redirectRootToLocale: 'en',
      detectBrowserLanguage: true,
      redirectCookieKey: 'redirected',
      useRedirectCookie: true,
      loadLanguagesAsync: true,
      langDir: 'locales/',
      ignorePaths: []
    }]
  ],
  css: [
    '~/assets/main.scss'
  ],
  render: {
    gzip: { threshold: 1 }
  }
}
