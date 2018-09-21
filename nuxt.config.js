const hostname = 'https://www.vite.org'
const routes = [
  {
    url: '/',
    priority: 1,
    img: [
      {
        url: `${hostname}/icon.png`,
        caption: 'Vite logo',
        title: 'Vite logo'
      },
      {
        url: `${hostname}/logo_appstore.png`,
        caption: 'Vite logo for appstore',
        title: 'Vite logo for appstore'
      }
    ]
  },
  {
    url: '/faq',
    priority: 0.3
  }
]
const whitepaperUrls = [
  {
    lang: 'en',
    url: 'https://www.vite.org/whitepaper/vite_en.pdf'
  },
  {
    lang: 'zh',
    url: 'https://www.vite.org/whitepaper/vite_cn.pdf'
  }
]
const sitemapUrls = []
const locales = [
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
]
const defaultLocale = 'en'

routes.forEach((route) => {
  let links = locales.map((locale) => {
    let lang = locale.code
    let url = `${hostname}/${lang}${route.url}`
    if (defaultLocale === lang) {
      url = `${hostname}${route.url}`
    }
    return {
      lang,
      url
    }
  })
  links.forEach(({url}) => {
    sitemapUrls.push({
      ...route,
      url,
      changefreq: 'daily',
      links: links
    })
  })
})

whitepaperUrls.forEach(({lang, url}) => {
  sitemapUrls.push({
    url,
    links: whitepaperUrls
  })
})

module.exports = {
  head: {
    title: 'Vite - Fast, No Fee, Scalability Contract Platform',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'author', content: 'vite lab'},
      {name: 'keywords', content: 'vite,crypto,dag,bitcoin,vitecoin,contract platform'}
    ],
    script: [
      {src: 'https://hm.baidu.com/hm.js?84d0d7aff86074ac33b30b38c222f2c0'}
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
  plugins: ['~/plugins/fontawesome', {src: '~/plugins/vue-headroom', ssr: false}, '~/plugins/ga'],
  router: {
    middleware: 'i18n'
  },
  modules: [
    // '@nuxtjs/webpackmonitor',
    '@nuxtjs/pwa',
    ['nuxt-i18n', {
      locales,
      defaultLocale,
      detectBrowserLanguage: true,
      redirectCookieKey: 'redirected',
      useRedirectCookie: true,
      loadLanguagesAsync: true,
      langDir: 'locales/',
      ignorePaths: [],
      vueI18n: {
        fallbackLocale: defaultLocale,
        messages: {
          /*
          * make the default locale can work in fallback in ssr.
          * */
          en: require('./locales/en.js')
        }
      }
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-118987496-1'
    }],
    '@nuxtjs/sitemap'
  ],
  css: [
    '~/assets/main.scss'
  ],
  render: {
    gzip: { threshold: 1 }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: hostname,
    gzip: true,
    generate: true,
    exclude: [
      '/technology',
      '/careers',
      '/',
      '/faq'
    ].concat(locales.map((lang) => {
      return `/${lang.code}/**`
    })).concat(locales.map((lang) => {
      return `/${lang.code}`
    })),
    routes: sitemapUrls
  }
}
