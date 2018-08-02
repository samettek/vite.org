<template>
  <div>
      <div class="navbar headroom" :class="`is-${routeName}-page`" v-headroom>
        <div class="container is-widescreen" :class="{ 'is-open': navbarActive }" @click="onNavClick">
          <div class="navbar-brand">
            <div @click="onLogoClick">
              <nuxt-link class="navbar-item nav-item nav-item-logo" :to="localePath('index')">
                <logo-without-words class="logo"></logo-without-words>
              </nuxt-link>
            </div>
            <div class="navbar-burger" @click="onBurgerClick">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="navbar-menu" :class="{ 'is-active': navbarActive, collapsing: collapsing }" :style="navbarEndStyle">
            <div ref="navbarEnd" class="navbar-end">
              <nuxt-link :key="item" :to="localePath(item)" class="nav-item text-hover-transition" :class="{active: routeName === item}" v-for="item in navs">
                {{$t(`nav.${item}`)}}
              </nuxt-link>
              <a :href="urls.medium" target="_blank" class="nav-item text-hover-transition">{{$t('nav.press')}}</a>
              <div class="line is-hidden-desktop"></div>
              <div class="nav-item">
                <Exchange></Exchange>
              </div>
              <div class="nav-item">
                <lang-select></lang-select>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="nuxt-content" :class="`is-${routeName}-page`">
      <nuxt :keep-alive="true"></nuxt>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/babel">
  import LangSelect from '~/components/LangSelect.vue'
  import Logo from '~/components/Logo.vue'
  import LogoWithoutWords from '~/components/LogoWithoutWords.vue'
  import Footer from '~/components/Footer.vue'
  import Exchange from '~/components/Exchange.vue'
  import config from '~/config'

  export default {
    components: {
      LangSelect,
      Logo,
      LogoWithoutWords,
      VFooter: Footer,
      Exchange
    },
    head () {
      let {routeName} = this
      let title = this.$t(`nav.${routeName}`) + ' - ' + this.$t('head.title')

      let description = this.$t(`head.description.${routeName}`)
      let iconUrl = 'https://vite.org/icon.png'
      let structuredData = [
        {
          '@context': 'http://schema.org',
          '@type': 'Organization',
          'url': 'https://vite.org',
          'name': 'Vite labs.',
          'description': description,
          'image': iconUrl,
          'brand': {
            '@type': 'Brand',
            'name': 'VITE',
            'logo': iconUrl
          },
          'sameAs': [
            config.urls.twitter
          ]
        }
      ]
      return {
        title,
        htmlAttrs: {
          lang: this.$i18n.locale
        },
        meta: [
          { hid: 'description', name: 'description', content: description },
          {name: 'google-site-verification', content: 'MyUvG14lvMm-nYCWoXYE9NT21vRda-kIT6xMETrGqZk'},
          // Open Grapg
          { name: 'og:title', content: title, hid: 'og:title' },
          { name: 'og:description', content: description, hid: 'og:description' },
          { name: 'og:type', content: 'website', hid: 'og:type' },
          { name: 'og:url', content: 'https://vite.org', hid: 'og:url' },
          { name: 'og:image', content: 'https://www.vite.org/logo_appstore.png' },

          // Twitter Card
          { name: 'twitter:card', content: 'summary', hid: 'twitter:card' },
          { name: 'twitter:site', content: '@vitelabs', hid: 'twitter:site' },
          { name: 'twitter:title', content: title, hid: 'twitter:title' },
          { name: 'twitter:description', content: description, hid: 'twitter:description' },
          { name: 'twitter:image:alt', content: 'Vite Logo', hid: 'twitter:image:alt' },
          { name: 'twitter:image', content: 'https://www.vite.org/logo_appstore.png' }
        ],
        __dangerouslyDisableSanitizers: ['script'],
        script: structuredData.map(item => {
          return {
            innerHTML: JSON.stringify(item),
            type: 'application/ld+json'
          }
        })
      }
    },
    data: function () {
      return {
        navbarActive: false,
        navs: ['index', 'faq'],
        collapsing: false,
        urls: config.urls
      }
    },
    computed: {
      routeName () {
        if (!this.$route || !this.$route.name) return ''
        return this.$route.name.split('-')[0]
      },
      navbarEndStyle () {
        if (this.navbarActive) {
          return {
            height: this.$refs.navbarEnd.clientHeight + 'px',
            overflowY: this.collapsing ? 'hidden' : 'visible'
          }
        } else {
          return {
            height: 0
          }
        }
      }
    },
    methods: {
      onNavClick (e) {
        let {target} = e
        if (target && target.className && typeof target.className === 'string' && target.className.indexOf('nav-item') > -1) {
          this.navbarActive = false
        }
      },
      onLogoClick () {
        this.navbarActive = false
      },
      onBurgerClick () {
        this.collapsing = true
        this.navbarActive = !this.navbarActive
        setTimeout(() => {
          this.collapsing = false
        }, 500)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";

  .nuxt-content {
    margin-top: 72px;
    &.is-index-page {
      margin-top: 0;
    }
  }

  .navbar {
    border-bottom: 1px solid transparent;
    z-index: 222222;
    &.headroom--not-top {
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    @include desktop {
      &.is-index-page.headroom--top {
        background: transparent;
      }
    }
    .navbar-brand {
      height: $navbar-height;
      .nav-item {
        height: 100%;
        &.nav-item-logo {
          .logo {
            height: 41px;
            color: #333333;
            @include touch {
              height: 22px;
            }
          }
          &:hover {
            .logo {
              color: #1580E3;
            }
          }
        }
      }
    }
    .nav-item {
      padding: 0.5rem 18px;
      color: #999999;
      font-family: $font-family-main;
      &:hover {
        color: #333333;
      }
      &.active {
        color: #333333;
      }
    }
    .navbar-menu {
      @include desktop {
        height: auto !important;
      }
    }
  }

  @include touch {
    .nuxt-content {
      margin-top: 41px;
    }
    .navbar {
      min-height: 40px;
      height: auto;
      .navbar-brand {
        min-height: 40px;
        height: 40px;
        .logo {
          height: 22px;
          transition: transform 0.4s ease-in-out;
        }
        .navbar-burger {
          height: 40px;
          width: 49px;
          span {
            width: 19px;
            right: 50%;
            left: auto;
            margin-right: -10px;
            transition: all 0.3s ease-in-out;
            &:nth-child(2) {
              width: 15px;
            }
          }
        }
      }

      .is-open {
        .navbar-brand {
          .logo {
            /*transform: translateX(16px);*/
            transform: rotate(30deg);
          }
          .navbar-burger {
            span {
              &:nth-child(2) {
                width: 19px;
              }
              &:nth-child(1), &:nth-child(3) {
                width: 9px;
                margin-right: -5px;
              }
            }
          }
        }
      }

      .nav-item {
        padding: 11px 16px;
        font-size: 14px;
      }

      .navbar-menu {
        padding: 0 32px;
        transition: all 0.5s ease-in-out;
        &:not(.is-active) {
          height: 0;
          overflow-y: hidden;
          display: block;
        }
        .navbar-end {
          padding: 0.5rem 0;
        }
        .nav-item {
          height: 48px;
          padding-left: 0;
        }
        .line {
          height: 1px;
          margin: 0.5rem 0;
          background: rgba(0,0,0,0.05);
          padding: 0;
        }
      }

      & > .container {
        min-height: 40px;
        height: auto;
      }
    }
  }
</style>
