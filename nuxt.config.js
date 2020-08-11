const hostname = 'https://www.vite.org';

// eslint-disable-next-line no-unused-vars
const scrollBehavior = function (to, from) {
  const position = {};

  if (to.hash) {
    position.selector = to.hash;
    if (document.querySelector(to.hash)) {
      return position;
    }
    return {
      x: 0,
      y: 0,
    };
  }

  return new Promise((resolve) => {
    position.x = 0;
    position.y = 0;
    resolve(position);

    // wait for the out transition to complete (if necessary)
    // this.app.$root.$once('triggerScroll', () => {
    //   // if the resolved position is falsy or an empty object,
    //   // will retain current scroll position.
    //   resolve(position);
    // });
  });
};

const routes = [
  {
    url: '/',
    priority: 1,
    img: [
      {
        url: `${hostname}/icon.png`,
        caption: 'Vite logo',
        title: 'Vite logo',
      },
      {
        url: `${hostname}/logo_appstore.png`,
        caption: 'Vite logo for appstore',
        title: 'Vite logo for appstore',
      },
    ],
  },
  {
    url: '/faq',
    priority: 0.3,
  },
];
const whitepaperUrls = [
  {
    lang: 'en',
    url: 'https://www.vite.org/whitepaper/vite_en.pdf',
  },
  {
    lang: 'zh',
    url: 'https://www.vite.org/whitepaper/vite_cn.pdf',
  },
];
const sitemapUrls = [];
const locales = [
  {
    code: 'en',
    name: 'EN',
    file: 'en.json',
  },
  {
    code: 'zh',
    name: '中文',
    file: 'zh.json',
  },
];
const defaultLocale = 'en';

routes.forEach((route) => {
  const links = locales.map((locale) => {
    const lang = locale.code;
    let url = `${hostname}/${lang}${route.url}`;
    if (defaultLocale === lang) {
      url = `${hostname}${route.url}`;
    }
    return {
      lang,
      url,
    };
  });
  links.forEach(({ url }) => {
    sitemapUrls.push({
      ...route,
      url,
      changefreq: 'daily',
      links,
    });
  });
});

whitepaperUrls.forEach(({ lang, url }) => {
  sitemapUrls.push({
    url,
    links: whitepaperUrls,
  });
});

module.exports = {
  head: {
    title: 'A high-performance decentralized ecosystem',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'vite lab' },
      { name: 'keywords', content: 'vite,crypto,dag,bitcoin,vitecoin,contract platform' },
    ],
  },
  loading: {
    color: '#7FB2FE',
  },
  build: {
    extractCSS: true,
    vendor: ['babel-polyfill'],
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false, // Fix bulma css warnings
        },
      },
    },
  },
  plugins: ['~/plugins/utilsPlugin'],
  router: {
    mode: 'history',
    scrollBehavior,
  },
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: ['faPlusCircle'],
      brands: [
        'faTwitter', 'faGithub', 'faLinkedin', 'faDiscord',
        'faTelegramPlane', 'faReddit', 'faWeixin', 'faYoutube',
        'faWeibo', 'faFacebookSquare', 'faMediumM', 'faInstagram',
        'faBitcoin',
      ],
    },
    component: 'FaIcon',
    suffix: false,
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    ['nuxt-i18n', {
      locales,
      defaultLocale,
      detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: true,
      },
      redirectCookieKey: 'redirected',
      useRedirectCookie: true,
      loadLanguagesAsync: true,
      langDir: 'locales/',
      lazy: true,
      ignorePaths: [],
      seo: true,
      vueI18n: {
        fallbackLocale: defaultLocale,
      },
      routesNameSeparator: '-',
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-118987496-1',
    }],
    '@nuxtjs/sitemap',
  ],
  axios: {
    prefix: '/api',
    proxy: true,
    credentials: true,
  },
  proxy: {
    '/api': {
      target: 'https://testnet-vite-1257137467.cos.ap-hongkong.myqcloud.com/discover',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  css: [
    '~/assets/main.scss',
  ],
  render: {
    gzip: { threshold: 1 },
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname,
    gzip: true,
    exclude: [
      '/technology',
      '/careers',
      '/',
      '/faq',
    ].concat(locales.map((lang) => `/${lang.code}/**`)).concat(locales.map((lang) => `/${lang.code}`)),
    routes: sitemapUrls,
  },
};
