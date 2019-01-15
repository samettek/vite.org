importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/10.23c180cfda31937cc53b.js",
    "revision": "377d4e167421a3984579c8cb3f257239"
  },
  {
    "url": "/_nuxt/11.f448cfc304d9497736ce.js",
    "revision": "21d11d0afd240e5635d029be89012e24"
  },
  {
    "url": "/_nuxt/12.af8e564c837afa509557.js",
    "revision": "a633fdd6ca9f2d53f43ad152ebaa62a4"
  },
  {
    "url": "/_nuxt/2.b22a6cf8aea69d6eaac9.js",
    "revision": "8339dbaa12947c57f73b5e00c8c21047"
  },
  {
    "url": "/_nuxt/4.de56ecf5e71652cd4734.js",
    "revision": "08b61d5520223b9364dca33b7f5a2ec1"
  },
  {
    "url": "/_nuxt/5.675a685e6c774e9fba50.js",
    "revision": "850ac453e7bf745b7113e4e5e2208248"
  },
  {
    "url": "/_nuxt/6.b8de0713a6ca18d5d5c6.js",
    "revision": "5753e03176c7939ae8b14d70bf1c10ee"
  },
  {
    "url": "/_nuxt/7.80d97fcd574804b35c9c.js",
    "revision": "18f3001672f8c112359721f070ec5830"
  },
  {
    "url": "/_nuxt/8.70a07b3621e01d56f6cd.js",
    "revision": "2fe97e5d9c4558d8bdb239f87e94342a"
  },
  {
    "url": "/_nuxt/9.66bfb46045f4a51ad125.js",
    "revision": "592b9cb69475146704827469653c8f3e"
  },
  {
    "url": "/_nuxt/app.1a7c562c36a714aae8f4.js",
    "revision": "152f00001ac05df7c44fd63e3d2f208b"
  },
  {
    "url": "/_nuxt/app.8f2d9c76ac7157d8ccc025b40925d50a.css",
    "revision": "8f2d9c76ac7157d8ccc025b40925d50a"
  },
  {
    "url": "/_nuxt/lang-en.20ef7ae092c47dc2bb5e.js",
    "revision": "6049ae1a6075ab978c5f1ce261c55f7d"
  },
  {
    "url": "/_nuxt/lang-zh.86f19b8eff531cc3aba7.js",
    "revision": "4565daa62a1f6d6e74439a2e5840e8d3"
  },
  {
    "url": "/_nuxt/layouts/default.b13d52526e5e83ed3078.js",
    "revision": "4733fc88b30800117ddb276dac270433"
  },
  {
    "url": "/_nuxt/manifest.8f668c6cd5fced511784.js",
    "revision": "ef5c7aaa06492843c7f745983afaa1e8"
  },
  {
    "url": "/_nuxt/vendor.2fe31b65bb0ba8efe29d.js",
    "revision": "0b3737e68ef597b9ba87b6ecf4755cf2"
  }
], {
  "cacheId": "vite.org",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





