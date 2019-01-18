<template>
  <div
    class="public"
    :class="`is-${routeName}-public`"
  >
    <div
      class="navbar headroom"
      :class="`is-${routeName}-page`"
      v-headroom
    >
      <div
        class="container is-widescreen"
        :class="{ 'is-open': navbarActive }"
        @click="onNavClick"
      >
        <div class="navbar-brand">
          <div @click="onLogoClick">
            <nuxt-link
              class="navbar-item nav-item nav-item-logo"
              :to="localePath('index')"
            >
              <logo-without-words class="logo"></logo-without-words>
            </nuxt-link>
          </div>
          <div
            class="navbar-burger"
            @click="onBurgerClick"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          class="navbar-menu"
          :class="{ 'is-active': navbarActive, collapsing: collapsing }"
        >
          <div
            ref="navbarStart"
            class="navbar-start"
          >
            <a 
              href="http://vite.net/" 
              class="nav-item text-hover-transition" 
              target="_blank"
            >
              {{$t(`nav.production`)}}
            </a>
            <nuxt-link
              :key="item"
              :to="localePath(item)"
              class="nav-item text-hover-transition"
              :class="{active: routeName === item}"
              v-for="item in navs"
            >
              {{$t(`nav.${item}`)}}
            </nuxt-link>
            <div class="nav-item">
              <voteNotice></voteNotice>
            </div>
            <!--<nuxt-link-->
              <!--:to="localePath('partnership')"-->
              <!--class="nav-item text-hover-transition"-->
            <!--&gt;-->
              <!--{{$t('nav.partnership')}}-->
            <!--</nuxt-link>-->
            <div class="nav-item">
              <Media></Media>
            </div>
            <div class="nav-item">
              <Exchange></Exchange>
            </div>
          </div>
          <div
            ref="navbarEnd"
            class="navbar-end"
          >
            <div class="nav-item">
              <lang-select></lang-select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container is-hidden-mobile">
      <div
        class="img-text"
        @click="openDotNet"
      >
        <div
          class="act"
          v-html="$t('home.acttext')"
        ></div>
        <div><img src="~assets/images/tail-right.svg" /></div>
      </div>
    </div>
    <div
      class="nuxt-content"
      :class="`is-${routeName}-page`"
    >
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
import config from '~/config'
import voteNotice from '~/components/voteNotice.vue'
import about from '~/components/about.vue'
import Media from '~/components/Media.vue'
import Exchange from "~/components/Exchange.vue"

export default {
  components: {
    LangSelect,
    Logo,
    LogoWithoutWords,
    VFooter: Footer,
    Exchange,
    voteNotice,
    about,
    Media,
  },
  head () {
    let { routeName } = this
    let title = this.$t(`nav.${routeName}`) + ' - ' + this.$t('head.title')

    let description = this.$t(`head.description.${routeName}`)
    let iconUrl = 'https://vite.org/icon.png'
    let structuredData = [
      {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        url: 'https://vite.org',
        name: 'Vite labs.',
        description: description,
        image: iconUrl,
        brand: {
          '@type': 'Brand',
          name: 'VITE',
          logo: iconUrl
        },
        sameAs: [config.urls.twitter]
      }
    ]
    return {
      meta: [
        { hid: 'description', name: 'description', content: description },
        {
          name: 'google-site-verification',
          content: 'MyUvG14lvMm-nYCWoXYE9NT21vRda-kIT6xMETrGqZk'
        },
        // Open Grapg
        { name: 'og:title', content: title, hid: 'og:title' },
        { name: 'og:description', content: description, hid: 'og:description' },
        { name: 'og:type', content: 'website', hid: 'og:type' },
        { name: 'og:url', content: 'https://vite.org', hid: 'og:url' },
        { name: 'og:image', content: 'https://www.vite.org/icon.png' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary', hid: 'twitter:card' },
        { name: 'twitter:site', content: '@vitelabs', hid: 'twitter:site' },
        { name: 'twitter:title', content: title, hid: 'twitter:title' },
        {
          name: 'twitter:description',
          content: description,
          hid: 'twitter:description'
        },
        {
          name: 'twitter:image:alt',
          content: 'Vite Logo',
          hid: 'twitter:image:alt'
        },
        {
          name: 'twitter:image',
          content: 'https://www.vite.org/logo_appstore.png'
        }
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
      navs: ['team', 'community'],
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
    openDotNet () {
      window.open(
        this.$i18n.locale === 'zh' ? 'https://vite.net/zh/' : 'https://vite.net'
      )
    },
    onNavClick (e) {
      let { target } = e
      if (
        target &&
        target.className &&
        typeof target.className === 'string' &&
        target.className.indexOf('nav-item') > -1
      ) {
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
.public {
  background: no-repeat url("~assets/images/bg/footer_others.svg") 0% 100%;
}

.is-index-public {
  background: no-repeat url("~assets/images/bg/footer_index.svg") -15% 100%/850px
    1000px;
  @include touch {
    background: none;
  }
}

.img-text {
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 79px;
  z-index: 999;
  width: 153px;
  height: 131px;
  text-align: center;
  background-image: url("~assets/images/activity.svg");
  color: white;
  font-family: $font-family-title;
  font-size: 13px;
  padding-top: 30px;
  .act {
    max-width: 130px;
    margin:10px;
  }
}
.nuxt-content {
  margin-top: 72px;
  padding-bottom: 100px;
  @include touch {
    padding-bottom: 50px;
  }
}
.is-index-page {
  margin-top: 0;
  background: no-repeat url("~assets/images/bg/index/topright3.svg") 100% 0%,
    no-repeat url("~assets/images/bg/index/topleft1.svg") -1% 9%,
    no-repeat url("~assets/images/bg/index/topleft2.svg") 0% 3%,
    no-repeat url("~assets/images/bg/index/topleft3.svg") 0% 8%,
    no-repeat url("~assets/images/bg/index/topright1.svg") 90% 9%,
    no-repeat url("~assets/images/bg/index/topright2.svg") 110% 6%/ 900px 1000px,
    no-repeat url("~assets/images/bg/index/rightbottom.svg") 125% 97%/620px
      526px;

  @include touch {
    background: no-repeat url("~assets/images/bg/index/topright3.svg") 150% 0%,
      no-repeat url("~assets/images/bg/index/topright1.svg") 90% 11%/ 230px 230px;
  }
  @include mobile {
    background: no-repeat url("~assets/images/bg/index/topright3.svg") 100% 0%,
      no-repeat url("~assets/images/bg/index/topleft3.svg") -1% 5%;
    background-size: 60%;
  }
}
.is-team-page {
  margin-top: 0;
  background: no-repeat url("~assets/images/bg/team/topleft.svg") -58% 0%,
    no-repeat url("~assets/images/bg/team/topright.svg") 100% 20%,
    no-repeat url("~assets/images/bg/team/bottomright.svg") 110% 95%;
  @include touch {
    background: no-repeat url("~assets/images/bg/team/topleft.svg") -58% 0%,
      no-repeat url("~assets/images/bg/team/topright.svg") 100% 20%;
  }
}
.is-partnership-page {
  background: no-repeat url("~assets/images/bg/partnership/topleft.svg") -8% 2%,
    no-repeat url("~assets/images/bg/team/bottomright.svg") 110% 95%;
}
.is-community-page {
  background: no-repeat url("~assets/images/bg/partnership/topleft.svg") -8% 2%,
    no-repeat url("~assets/images/bg/community/rightbottom.svg") 110% 95%;
}
.navbar {
  border-bottom: 1px solid transparent;
  z-index: 222222;
  background: #fff;

  &.headroom--not-top {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background: white;
  }
  @include desktop {
    &.is-index-page.headroom--top {
      background: transparent;
    }
  }
  a.navbar-item:hover {
    background-color: white;
  }
  .navbar-brand {
    height: $navbar-height;
    .nav-item {
      height: 100%;
      cursor: pointer;
    }
  }
  .nav-item {
    padding: 0.5rem 18px;
    color: $common-text-color;
    font-family: $font-family-light;
    &:hover {
      color: $common-active-color;
    }
    &.active {
      color: $common-active-color;
    }
  }
  .nav-item-logo {
    padding: 0 57px 0 0;
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
            &:nth-child(1),
            &:nth-child(3) {
              width: 9px;
              margin-right: -5px;
            }
          }
        }
      }
    }

    .nav-item {
      padding: 11px 16px;
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
        background: rgba(0, 0, 0, 0.05);
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
