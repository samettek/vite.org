const hostname = 'https://www.vite.org';
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
];
const whitepaperUrls = [
  {
    lang: 'en',
    url: 'https://www.vite.org/whitepaper/vite_en.pdf'
  },
  {
    lang: 'zh',
    url: 'https://www.vite.org/whitepaper/vite_cn.pdf'
  }
];
const sitemapUrls = [];
const locales = [
  {
    code: 'en',
    name: 'EN',
    langFile: 'en.json'
  },
  {
    code: 'zh',
    name: '中文',
    langFile: 'zh.json'
  },
  {
    code: 'vi',
    name: 'Tiếng việt',
    langFile: 'vi.json'
  },
  {
    code: 'ru',
    name: 'русский',
    langFile: 'ru.json'
  }
];
const defaultLocale = 'en';

routes.forEach((route) => {
  let links = locales.map((locale) => {
    let lang = locale.code;
    let url = `${hostname}/${lang}${route.url}`;
    if (defaultLocale === lang) {
      url = `${hostname}${route.url}`;
    }
    return {
      lang,
      url
    };
  });
  links.forEach(({url}) => {
    sitemapUrls.push({
      ...route,
      url,
      changefreq: 'daily',
      links: links
    });
  });
});

whitepaperUrls.forEach(({lang, url}) => {
  sitemapUrls.push({
    url,
    links: whitepaperUrls
  });
});

module.exports = {
  head: {
    title: 'A high-performance decentralized ecosystem',
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
  router: {
    middleware: 'i18n'
  },
  modules: [
    // '@nuxtjs/webpackmonitor',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
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
          en: require('./locales/en.json')
        }
      }
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-118987496-1'
    }],
    '@nuxtjs/sitemap'
  ],
  axios: {
    prefix: '/api',
    proxy: true,
    credentials: true
  },
  proxy: {
    '/api/report_zh': {
      target: 'https://testnet-vite-1257137467.cos.ap-hongkong.myqcloud.com/discover/report_zh.json',
      changeOrigin: true,
      pathRewrite: { '^/api/report_zh': '' }
    },
    '/api/report_en': {
      target: 'https://testnet-vite-1257137467.cos.ap-hongkong.myqcloud.com/discover/report_en.json',
      changeOrigin: true,
      pathRewrite: { '^/api/report_en': '' }
    },
    '/api/discover_zh': {
      target: 'https://testnet-vite-1257137467.cos.ap-hongkong.myqcloud.com/discover/discover_zh.json',
      changeOrigin: true,
      pathRewrite: { '^/api/discover_zh': '' }
    },
    '/api/discover_en': {
      target: 'https://testnet-vite-1257137467.cos.ap-hongkong.myqcloud.com/discover/discover_en.json',
      changeOrigin: true,
      pathRewrite: { '^/api/discover_en': '' }
    },
  },
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
      return `/${lang.code}/**`;
    })).concat(locales.map((lang) => {
      return `/${lang.code}`;
    })),
    routes: sitemapUrls
  }
};
