<template>
  <section>
    <footer class="footer">
      <div class="container">
        <div class="is-flex whole-footer">
          <div class="icon-wrapper is-hidden-touch">
            <img src="~assets/images/home/viteLogo-white.svg" alt />
          </div>
          <div class="footer-tab">
            <div class="is-flex footer-tab-wrapper">
              <div class="is-flex footer-nav">
                <div class="nav-item">
                  <footer-menu :footer-name="$t(`nav.start`)" :secondary-list="navStartList"></footer-menu>
                </div>

                <div class="nav-item">
                  <footer-menu :footer-name="$t(`nav.about`)" :secondary-list="navAboutList"></footer-menu>
                </div>

                <div class="nav-item">
                  <footer-menu
                    :footer-name="$t(`nav.production`)"
                    :secondary-list="navProductionList"
                  ></footer-menu>
                </div>
                <div class="nav-item">
                  <footer-menu
                    :footer-name="$t('nav.ecosystem')"
                    :secondary-list="navEcosystemList"
                  ></footer-menu>
                </div>

                <div class="nav-item">
                  <footer-menu
                    :footer-name="$t('nav.development')"
                    :secondary-list="navDevelopmentList"
                  ></footer-menu>
                </div>
                <div class="nav-item">
                  <footer-menu :footer-name="$t('nav.medium')" :secondary-list="navMediaList"></footer-menu>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="social-icons">
          <a :href="urls.cmc" target="_blank" class="text-hover-transition">
            <img class="icon__item" src="~/assets/images/footer/cmc.svg" />
          </a>
          <a :href="urls.github" target="_blank" class="text-hover-transition">
            <fa-icon class="icon__item" :icon="['fab', 'github']"></fa-icon>
          </a>
          <a :href="urls.medium" target="_blank" class="text-hover-transition">
            <fa-icon class="icon__item" :icon="['fab', 'medium-m']"></fa-icon>
          </a>
          <a :href="urls.instagram" target="_blank" class="text-hover-transition">
            <fa-icon class="icon__item" :icon="['fab', 'instagram']"></fa-icon>
          </a>
          <a :href="urls.facebook" target="_blank" class="text-hover-transition">
            <fa-icon class="icon__item" :icon="['fab', 'facebook-square']"></fa-icon>
          </a>
          <a :href="urls.discord" target="_blank" class="text-hover-transition">
            <fa-icon class="icon__item" :icon="['fab', 'discord']"></fa-icon>
          </a>
          <a :href="urls.twitter" target="_blank" class="text-hover-transition">
            <fa-icon class="icon__item" :icon="['fab', 'twitter']"></fa-icon>
          </a>
          <telegram></telegram>
          <a :href="urls.reddit" target="_blank" class="text-hover-transition">
            <fa-icon class="icon__item" :icon="['fab', 'reddit']" />
          </a>
          <a :href="urls.youtube" target="_blank" class="text-hover-transition">
            <fa-icon class="icon__item" :icon="['fab', 'youtube']" />
          </a>
          <a :href="urls.forum" target="_blank">
            <img class="icon__item" src="~/assets/images/community/forum-icon.svg" />
          </a>
          <a :href="urls.blockfolio" target="_blank">
            <img class="icon__item" src="~/assets/images/community/blockfolio-white.svg" />
          </a>
          <a :href="urls.media.bitcointalk" target="_blank">
            <fa-icon class="icon__item" :icon="['fab', 'bitcoin']" />
          </a>
          <a :href="urls.weibo" target="_blank">
            <fa-icon class="icon__item" :icon="['fab', 'weibo']" />
          </a>
          <wechat></wechat>
        </div>
        <div class="copyright">
          <span>© 2018-2020 VITE Labs. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  </section>
</template>

<script type="text/babel">
import LogoWithoutWords from '~/components/LogoWithoutWords.vue';
import Wechat from '~/components/Wechat';
import Telegram from '~/components/Telegram';
import config from '~/config.js';
import Exchange from '~/components/Exchange.vue';
import about from '~/components/about';
import SecondaryMenu from '~/components/SecondaryMenu.vue';
import FooterMenu from '~/components/FooterMenu.vue';
import Explorer from '~/components/Explorer.vue';

export default {
  components: {
    LogoWithoutWords,
    Wechat,
    Telegram,
    Exchange,
    about,
    SecondaryMenu,
    FooterMenu,
    Explorer,
  },
  props: {
    navMediaList: {
      type: Array,
      default: () => [],
    },
    navStartList: {
      type: Array,
      default: () => [],
    },
    navAboutList: {
      type: Array,
      default: () => [],
    },
    navCommunityList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    const { urls } = config;
    return {
      navExchangeList: [
        {
          type: 'outer',
          name: 'vitex',
          to: urls.exchange.vitex,
        },
        {
          type: 'outer',
          name: 'binance',
          to: urls.exchange.binance,
        },
        {
          type: 'outer',
          name: 'okex',
          to: urls.exchange.okex,
        },
        {
          type: 'outer',
          name: 'bittrex',
          to: urls.exchange.bittrex,
        },
        {
          type: 'outer',
          name: 'okexKr',
          to: urls.exchange.okexKr,
        },
      ],
      urls,
      aboutList: ['tokenUrl'],
      learnList: ['whitePaper', 'document', 'introduction'],
      mediumList: ['medium', 'btt', 'blog'],
      urlShouldTranslate: ['whitePaper', 'telegram', 'introduction'],
      navs: ['team', 'community'],
    };
  },
  computed: {
    navProductionList() {
      return [
        {
          type: 'outer',
          name: 'vitex',
          to: this.$link('vitex'),
        },
        {
          type: 'outer',
          name: 'app',
          to: this.$link('app'),
        },
        {
          type: 'outer',
          name: 'webWallet',
          to: this.$link('webWallet'),
        },
        {
          type: 'outer',
          name: 'desktopWallet',
          to: this.$link('desktopWallet.release'),
        },
        {
          type: 'outer',
          name: 'vitePlus',
          to: this.$link('vitePlus'),
        },
        {
          type: 'outer',
          name: 'viteScan',
          to: this.$link('explorer.viteScan'),
        },
        {
          type: 'outer',
          name: 'viteExplorer',
          to: this.$link('explorer.viteExplorer'),
        },
      ];
    },
    navEcosystemList() {
      return [
        {
          type: 'inner',
          name: 'dapp',
          to: 'ecosystem',
        },
        {
          type: 'outer',
          name: 'incentivePlan',
          to: 'incentivePlan',
        },
        {
          type: 'outer',
          name: 'syra',
          to: 'syraAnn',
        },
        {
          type: 'outer',
          name: 'vitePay',
          to: 'vitePayAnn',
        },
      ];
    },
    navDevelopmentList() {
      return [
        {
          type: 'outer',
          name: 'docs',
          to: this.$link('document'),
        },
        {
          type: 'outer',
          name: 'javaSDK',
          to: this.$link('docs.java'),
        },
        {
          type: 'outer',
          name: 'jsSDK',
          to: this.$link('docs.js'),
        },
        {
          type: 'outer',
          name: 'vitexDocs',
          to: this.$link('docs.vitex'),
        },
        {
          type: 'outer',
          name: 'vep',
          to: this.$link('docs.vep'),
        },
      ];
    },
    navMoreList() {
      return [
        {
          type: 'outer',
          name: 'store',
          to: this.$link('vitestore'),
        },
      ];
    },
  },
  methods: {
    getUrl(item) {
      if (this.urlShouldTranslate.indexOf(item) > -1) {
        return this.$t(`urlSrc.${item}`);
      }
      return config.urls[item];
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

.footer {
  min-height: 315px;
  background-size: cover;
  padding: 0;
  z-index: 3;
  background-color: #006fe9;
  padding: 50px 0;
  .whole-footer {
    width: 100%;
    justify-content: space-between;
    .icon-wrapper {
      position: relative;
      svg {
        position: absolute;
        right: -80px;
      }
    }
  }
  .footer-tab {
    color: white;
    width: 75%;
    @include touch {
      margin: 0 auto;
    }
    @include mobile {
      width: 100%;
    }
    .footer-tab-wrapper {
      flex-direction: column;
      @include mobile {
        flex-direction: column-reverse;
      }
    }
  }
  .copyright {
    font-size: 12px;
    text-align: left;
    margin-top: 20px;
    line-height: 17px;
    color: white;
    @include until($desktop) {
      padding: 0 20px;
    }
  }
  .footer-nav {
    justify-content: space-between;
    flex-wrap: wrap;
    a {
      color: white;
    }
    .nav-item {
      display: flex;
      align-items: flex-start;
      padding: 0;
      color: $common-text-color;
      font-family: $font-family-light;
      max-width: 160px;
      @include touch {
        display: block;
        padding: 0.5rem 0;
        width: 50%;
        text-align: left;
      }
      &:hover {
        color: $common-active-color;
      }
      &.active {
        color: $common-active-color;
      }
    }

    @include until($desktop) {
      flex-direction: row;
      justify-content: space-between;
      padding: 20px;
      .nav-item {
        width: 50%;
      }
    }
  }

  .social-icons {
    padding-top: 49px;
    border-top: 1px solid rgba(255,255,255,0.3);
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: cen;
    flex-wrap: wrap;
    display: flex;
    margin-top: 50px;
    .icon__item {
      width: 100%;
      height: 100%;
    }
    & > a {
      display: inline-block;
      height: 30px;
      width: 30px;
    }
    & > a,
    /deep/ .v-popover {
      margin: 10px 15px;
      svg {
        width: 30px;
        height: 30px;
        color: white;
        @include touch {
          width: 30px;
          height: 30px;
        }
      }
    }
    @include until($desktop) {
      padding: 20px 10px;
      justify-content: left;
      & > a {
        display: inline-block;
        height: 22px;
        width: 22px;
      }
      & > a,
      /deep/ .v-popover {
        svg {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
}
</style>
