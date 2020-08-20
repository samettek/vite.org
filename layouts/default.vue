<template>
  <div class="public __vite__" :class="`is-${routeName}-public`">
    <div class="airdrop__fiexd" v-if="routeName !== 'airdrop'">
      <a
        :href="urls.exchange.vitex"
        target="_blank"
        class="text-hover-transition"
      >{{$t('home.gotoVitex')}}</a>
      <!--<nuxt-link-->
      <!--:to="localePath('airdrop')"-->
      <!--class="text-hover-transition">-->
      <!--{{$t('home.jionAirdrop')}}-->
      <!--</nuxt-link>-->
    </div>
    <no-ssr>
      <dialog-compo :visible.sync="dialogVisible" v-if="routeName === 'index'">
        <div class="is-flex dialog__img" style="justify-content: center;">
          <img src="~/assets/images/vitex.svg" />
        </div>
        <!-- <div style="margin-top: 23px;">{{$t('home.jionAirdrop')}}</div> -->
        <span slot="footer">
          <div @click="dialogVisible = false">
            <a
              :href="urls.exchange.vitex"
              target="_blank"
              class="footer-btn"
            >{{$t('home.gotoVitex')}}</a>
            <!--<nuxt-link-->
            <!--:to="localePath('airdrop')"-->
            <!--class="footer-btn">-->
            <!--{{$t('home.gotoVitex')}}-->
            <!--</nuxt-link>-->
          </div>
        </span>
      </dialog-compo>
    </no-ssr>
    <div
      class="navbar"
      :class="[`is-${routeName}`, `navbar_${navbarTheme}`]"
    >
      <div class="container is-widescreen" :class="{ 'is-open': navbarActive }" @click="onNavClick">
        <div class="navbar-brand">
          <div @click="onLogoClick">
            <nuxt-link class="navbar-item nav-item nav-item-logo" :to="localePath('index')">
              <img v-if="navbarTheme === 'light'" src="~assets/images/home/viteLogo-white.svg" alt="Vite Logo">
              <img v-else src="~assets/images/home/viteLogo-blue.svg" alt="Vite Logo">
            </nuxt-link>
          </div>
          <div class="navbar-burger" @click="onBurgerClick">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': navbarActive, collapsing: collapsing }">
          <div ref="navbarStart" class="navbar-end">
            <div class="nav-item">
              <secondary-menu
                :theme="navbarTheme"
                :footer-name="$t(`nav.start`)"
                :secondary-list="navStartList"
              ></secondary-menu>
            </div>
            <div class="nav-item">
              <secondary-menu
                :theme="navbarTheme"
                :footer-name="$t(`nav.about`)"
                :secondary-list="navAboutList"
              ></secondary-menu>
            </div>

            <a href="https://vite.net" target="_blank" class="nav-item nav-top-item text-hover-transition">
              {{$t('nav.production')}}
            </a>

            <nuxt-link
              key="ecosystem"
              :to="localePath('ecosystem')"
              class="nav-item nav-top-item text-hover-transition"
            >{{$t(`nav.ecosystem`)}}</nuxt-link>

            <nuxt-link
              key="development"
              :to="localePath('development')"
              class="nav-item nav-top-item text-hover-transition"
            >{{$t(`nav.development`)}}</nuxt-link>

            <div class="nav-item">
              <secondary-menu
                :theme="navbarTheme"
                :footer-name="$t(`nav.medium`)"
                :secondary-list="navMediaList"
              ></secondary-menu>
            </div>

            <div class="nav-item">
              <secondary-menu
                :theme="navbarTheme"
                :footer-name="$t(`nav.community`)"
                :secondary-list="navCommunityList"
              ></secondary-menu>
            </div>

            <div class="nav-item">
              <lang-select :theme="navbarTheme"></lang-select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nuxt-content" :class="`is-${routeName}-page`">
      <transition name="fade" mode="out-in" @after-leave="afterLeave">
        <nuxt :keep-alive="true"></nuxt>
      </transition>
    </div>
    <v-footer
      :nav-start-list="navStartList"
      :nav-about-list="navAboutList"
      :nav-production-list="navProductionList"
      :nav-media-list="navMediaList"
      :nav-community-list="navCommunityList"
    ></v-footer>
  </div>
</template>

<script type="text/babel">
import Cookies from 'js-cookie';
import dialogCompo from '~/components/dialog/component.vue';
import LangSelect from '~/components/LangSelect.vue';
import Footer from '~/components/Footer.vue';
import config from '~/config';
import SecondaryMenu from '~/components/SecondaryMenu.vue';

export default {
  components: {
    LangSelect,
    VFooter: Footer,
    dialogCompo,
    SecondaryMenu,
  },
  head() {
    const { routeName } = this;
    const title = `${this.$t(`nav.${routeName}`)} - ${this.$t('head.title')}`;

    const description = this.$t(`head.description.${routeName}`);
    const iconUrl = 'https://vite.org/icon.png';
    const structuredData = [
      {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        url: 'https://vite.org',
        name: 'Vite labs.',
        description,
        image: iconUrl,
        brand: {
          '@type': 'Brand',
          name: 'VITE',
          logo: iconUrl,
        },
        sameAs: [config.urls.twitter],
      },
    ];
    return {
      meta: [
        { hid: 'description', name: 'description', content: description },
        {
          name: 'google-site-verification',
          content: 'MyUvG14lvMm-nYCWoXYE9NT21vRda-kIT6xMETrGqZk',
        },
        {
          name: 'renderer',
          content: 'webkit',
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge,chrome=1',
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
          hid: 'twitter:description',
        },
        {
          name: 'twitter:image:alt',
          content: 'Vite Logo',
          hid: 'twitter:image:alt',
        },
        {
          name: 'twitter:image',
          content: 'https://www.vite.org/logo_appstore.png',
        },
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: structuredData.map((item) => ({
        innerHTML: JSON.stringify(item),
        type: 'application/ld+json',
      })),
    };
  },
  data() {
    return {
      dialogVisible: false,
      navProductionList: [
        {
          type: 'inner',
          name: 'platform',
          to: 'products',
          anchor: 'platform',
        },
        {
          type: 'inner',
          name: 'wallet',
          to: 'products',
          anchor: 'wallet',
        },
        {
          type: 'inner',
          name: 'exchange',
          to: 'products',
          anchor: 'exchange',
        },
        {
          type: 'inner',
          name: 'pay',
          to: 'products',
          anchor: 'pay',
        },
      ],
      navPersonList: [
        {
          type: 'inner',
          name: 'team',
          to: 'figure',
          anchor: 'team',
        },
        {
          type: 'inner',
          name: 'counselor',
          to: 'figure',
          anchor: 'advisor',
        },
        {
          type: 'inner',
          name: 'community',
          to: 'figure',
          anchor: 'community',
        },
        {
          type: 'inner',
          name: 'investor',
          to: 'figure',
          anchor: 'investor',
        },
      ],
      navExList: ['vitex', 'binance', 'bittrex', 'okex', 'okexKr'].map((item) => ({
        type: 'outer',
        name: item,
        to: config.urls.exchange[item],
      })),
      navbarActive: false,
      navs: ['airdrop'],
      collapsing: false,
      urls: config.urls,
    };
  },
  created() {
    if (!Cookies.get('airdropDialog')) {
      Cookies.set('airdropDialog', 'true', { expires: 1 });
      this.dialogVisible = true;
    } else {
      this.dialogVisible = false;
    }
  },
  computed: {
    navStartList() {
      return [
        {
          type: 'inner',
          name: 'getToken',
          to: 'token',
          anchor: 'getToken',
        },
        {
          type: 'outer',
          name: 'createWallet',
          to: 'createWallet',
        },
        {
          type: 'outer',
          name: 'useVitex',
          to: 'vitex',
        },
        {
          type: 'outer',
          name: 'github',
          to: 'github',
        },
        {
          type: 'outer',
          name: 'tutorial',
          to: 'tutorial.start',
        },
        {
          type: 'inner',
          name: 'faq',
          to: 'faq',
        },
      ];
    },
    navAboutList() {
      return [
        {
          type: 'inner',
          name: 'introduction',
          to: 'whatIsVite',
        },
        {
          type: 'inner',
          name: 'token',
          to: 'token',
        },
        {
          type: 'inner',
          name: 'node',
          to: 'whatIsVite',
          anchor: 'fullnode',
        },
        {
          type: 'inner',
          name: 'team',
          to: 'whatIsVite',
          anchor: 'team',
        },
        {
          type: 'inner',
          name: 'investor',
          to: 'whatIsVite',
          anchor: 'investor',
        },
        {
          type: 'inner',
          name: 'partner',
          to: 'whatIsVite',
          anchor: 'partner',
        },
      ];
    },
    navMediaList() {
      return [
        {
          type: 'outer',
          name: 'weeklyReport',
          to: 'weeklyReport',
        },
        {
          type: 'outer',
          name: 'ann',
          to: 'ann',
        },
        {
          type: 'outer',
          name: 'news',
          to: 'latestPress',
        },
      ];
    },
    navCommunityList() {
      return [
        {
          type: 'inner',
          name: 'join',
          to: 'community',
        },
        {
          type: 'outer',
          name: 'forum',
          to: config.urls.forum,
        },
      ];
    },
    routeName() {
      if (!this.$route || !this.$route.name) return 'index';
      return this.$route.name.split('-')[0];
    },
    navbarTheme() {
      return ['index'].indexOf(this.routeName) > -1 ? 'light' : 'gray';
    },
  },
  methods: {
    afterLeave() {
      this.$root.$emit('triggerScroll');
    },
    openDotNet() {
      window.open(
        'https://international.bittrex.com/Market/Index?MarketName=BTC-VITE',
        // this.$i18n.locale === 'zh' ? 'https://vite.net/zh/' : 'https://vite.net'
      );
    },
    openAirdropPage() {
      let lang = '';
      this.$i18n.locale !== 'en'
        ? (lang = `/${this.$i18n.locale}`)
        : (lang = '');
      this.$router.push({ path: `${lang}/airdrop/` });
    },
    onNavClick(e) {
      const { target } = e;
      if (
        target
        && target.className
        && typeof target.className === 'string'
        && target.className.indexOf('nav-item') > -1
      ) {
        this.navbarActive = false;
      }
    },
    onLogoClick() {
      this.navbarActive = false;
    },
    onBurgerClick() {
      this.collapsing = true;
      this.navbarActive = !this.navbarActive;
      setTimeout(() => {
        this.collapsing = false;
      }, 500);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "assets/vars.scss";
.airdrop__fiexd {
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 999;
  background-image: url("~assets/images/airdrop.svg");
  background-size: cover;
  width: 265px;
  height: 66px;
  font-size: 16px;
  font-family: $font-family-title;
  font-weight: 600;
  box-sizing: border-box;
  text-align: center;
  line-height: 66px;
  cursor: pointer;
  a {
    display: inline-block;
    text-align: center;
    margin-left: -45px;
    width: 265px;
    height: 66px;
    color: white;
  }
}
.dialog__img {
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    height: 100px;
  }
}
.footer-btn {
  display: inline-block;
  width: 242px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-family: $font-family-title;
  font-weight: 600;
  color: white;
  background: rgba(0, 122, 255, 1);
  box-shadow: 0px 10px 20px 0px rgba(126, 183, 238, 0.83);
  border-radius: 2px;
  cursor: pointer;
}
.public {
  // background: no-repeat url("~assets/images/bg/footer_others.svg") 0% 100%;
}

.is-index-public {
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
  color: white;
  font-family: $font-family-title;
  font-size: 13px;
  padding-top: 30px;
  @include touch {
    top: 0px;
  }
  .act {
    max-width: 130px;
    margin: 10px;
  }
}
.nuxt-content {
  margin-top: 72px;
  @include touch {
    padding-bottom: 50px;
  }
}

.is-index-page {
  margin-top: -($navbar-height + 1);
  @include touch {
    margin-top: -131px;
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
.is-airdrop-page {
  margin-top: 0;
  background: $common-bg-color url("~assets/images/bg/airdrop/airdropbg.svg")
    no-repeat center;
  @include touch {
    background: no-repeat url("~assets/images/bg/airdrop/bgpic.png") 60% 0%;
  }
  @include mobile {
    background: no-repeat url("~assets/images/bg/airdrop/bg.png") 50% 0%;
  }
}
.airdrop-hide {
  display: none;
}
</style>
