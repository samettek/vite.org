<template>
  <section>
    <footer class="footer">
      <div class="container">
        <div class="is-flex whole-footer">
          <div class="icon-wrapper is-hidden-touch">
            <img src="~assets/images/home/viteLogo-white.svg" alt="">
          </div>
          <div class="footer-tab">
            <div class="is-flex footer-tab-wrapper">
              <div class="is-flex footer-nav">
                  <div class="nav-item">
                    <footer-menu
                      :footer-name="$t(`nav.start`)"
                      :secondary-list="navStartList">
                    </footer-menu>
                  </div>

                  <div class="nav-item">
                    <footer-menu
                      :footer-name="$t(`nav.about`)"
                      :secondary-list="navAboutList">
                    </footer-menu>
                  </div>

                  <div class="nav-item">
                    <footer-menu
                      :footer-name="$t(`nav.production`)"
                      :secondary-list="navProductionList">
                    </footer-menu>
                  </div>
                  <div class="nav-item">
                    <footer-menu
                      :footer-name="$t('nav.ecosystem')"
                      :secondary-list="navEcosystemList">
                    </footer-menu>
                  </div>

                  <div class="nav-item">
                    <footer-menu
                      :footer-name="$t('nav.development')"
                      :secondary-list="navDevelopmentList">
                    </footer-menu>
                  </div>
                  <div class="nav-item">
                    <footer-menu
                      :footer-name="$t('nav.medium')"
                      :secondary-list="navMediaList">
                    </footer-menu>
                  </div>
              </div>

              <div class="social-icons">
                <div class="icons mt30">
                  <div class="icon-links-wrapper">
                    <a
                      :href="urls.cmc"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <img
                        class="icon__item"
                        src="~/assets/images/footer/cmc.svg"/>
                    </a>
                    <a
                      :href="urls.github"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <fa-icon
                        class="icon__item"
                        :icon="['fab', 'github']"
                      ></fa-icon>
                    </a>
                    <a
                      :href="urls.medium"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <img
                        class="icon__item"
                        src="~/assets/images/footer/medium.svg"/>
                    </a>
                    <a
                      :href="urls.instagram"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <img
                        class="icon__item"
                        src="~/assets/images/community/ins-white.svg"/>
                    </a>
                    <a
                      :href="urls.facebook"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <img
                        class="icon__item"
                        src="~/assets/images/community/fb-white.svg"/>
                    </a>
                    <a
                      :href="urls.discord"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <fa-icon
                        class="icon__item"
                        :icon="['fab', 'discord']"
                      ></fa-icon>
                    </a>
                    <a
                      :href="urls.twitter"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <fa-icon
                        class="icon__item"
                        :icon="['fab', 'twitter']"
                      ></fa-icon>
                    </a>
                    <telegram></telegram>
                    <a
                      :href="urls.reddit"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <fa-icon
                        class="icon__item"
                        :icon="['fab', 'reddit']"
                      /></a>
                    <a
                      :href="urls.youtube"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <fa-icon
                        class="icon__item"
                        :icon="['fab', 'youtube']"
                      /></a>
                    <a
                      :href="urls.forum"
                      target="_blank">
                      <img
                        class="icon__item"
                        src="~/assets/images/community/forum-icon.svg"/>
                    </a>
                    <a
                      :href="urls.blockfolio"
                      target="_blank">
                      <img
                        class="icon__item"
                        src="~/assets/images/community/blockfolio-white.svg"/>
                    </a>
                    <a
                      :href="urls.media.bitcointalk"
                      target="_blank">
                      <img
                        class="icon__item"
                        src="~/assets/images/footer/bitcoin.svg"/>
                    </a>
                    <a
                      :href="urls.weibo"
                      target="_blank">
                      <img
                        class="icon__item"
                        src="~/assets/images/footer/weibo.svg"/>
                    </a>
                    <wechat></wechat>
                  </div>
                </div>
              </div>
            </div>

            <div class="">
              <div class="copyright mt30">
                <span>
                  © 2018-2020 VITE Labs. All Rights Reserved.
                </span>
              </div>
            </div>
          </div>
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
    navProductionList: {
      type: Array,
      default: () => [],
    },
    navPersonList: {
      type: Array,
      default: () => [],
    },
    navGuideList: {
      type: Array,
      default: () => [],
    },
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
      navExchangeList: [{
        type: 'outer',
        name: 'vitex',
        to: urls.exchange.vitex,
      }, {
        type: 'outer',
        name: 'binance',
        to: urls.exchange.binance,
      }, {
        type: 'outer',
        name: 'okex',
        to: urls.exchange.okex,
      }, {
        type: 'outer',
        name: 'bittrex',
        to: urls.exchange.bittrex,
      }, {
        type: 'outer',
        name: 'okexKr',
        to: urls.exchange.okexKr,
      }],
      urls,
      aboutList: ['tokenUrl'],
      learnList: ['whitePaper', 'document', 'introduction'],
      mediumList: ['medium', 'btt', 'blog'],
      urlShouldTranslate: ['whitePaper', 'telegram', 'introduction'],
      navs: ['team', 'community'],
    };
  },
  computed: {
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
          to: 'syra',
        },
        {
          type: 'outer',
          name: 'vitePay',
          to: 'vitePay',
        },
      ];
    },
    navDevelopmentList() {
      return [
        {
          type: 'inner',
          name: 'devTools',
          to: 'development',
          anchor: 'devTools',
        },
      ];
    },
    navMoreList() {
      return [
        {
          type: 'outer',
          name: 'store',
          to: this.urls.vitestore[this.$i18n.locale],
        }];
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
.secondary-button {
    color: white;;
    padding: 0 0 0 0;
    // font-family: $font-family-light;
    font-size:14px;
    font-family:$font-family-title;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:20px;
    margin-bottom: 6px;
    &:focus {
      border: none;
      box-shadow: none;
    }
    &:hover {
      color: white;
    }
  }

.footer {
  min-height: 315px;
  background-size: cover;
  padding: 0;
  z-index: 3;
  background-color: #006FE9;
  .whole-footer {
    width: 100%;
    padding: 30px 0;
    justify-content: space-between;
    .icon-wrapper {
      position: relative;
      svg{
        position: absolute;
        right: -80px;
      }
    }
  }
  .mt30 {
    margin-top: 10px;
  }
  .footer-tab {
    color: white;
    // justify-self: flex-end;
    // margin-right: 50px;
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
    .social-icons {
      margin-right: 10px;
      .icon__item {
        width: 22px;
        height: 22px;
      }
    }
  }
  .icons {
    text-align: right;
  }
  .copyright {
    font-size: 12px;
    text-align: right;
    margin-right: 10px;
    @media only screen and (min-width: 320px) and (max-width: 1240px)  {
      margin-top: 0px;
      margin-left: 23px;
      text-align: left;
      margin-bottom: 40px;
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
        padding: 0.5rem 10px;
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

  .icon-links-wrapper {
    margin-left: -15px;
    margin-right: -15px;
    @media only screen and (min-width: 320px) and (max-width: 1240px)  {
      text-align: left;
    }
    & > a {
      display: inline-block;
      height: 22px;
    }
    & > a,
    /deep/ .v-popover {
      margin: 10px 15px;
      svg {
        width: 30px;
        height: 30px;
        color: white;
        &:hover {
          // color: #1580E3;
        }
        @include touch {
          width: 30px;
          height: 30px;
        }
      }
    }
    @include until($desktop) {
      padding: 20px;
    }
  }
  .links-wrapper {
    line-height: 1.75rem;
    @include touch {
      text-align: center;
    }
    & > div {
      &:first-child {
        font-size: 16px;
        font-family: $font-family-main;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 20px;
        line-height: 25px;
        @include touch {
          font-size: 15px;
          line-height: 21px;
          margin-bottom: 18px;
        }
      }
    }
  }
}
</style>
