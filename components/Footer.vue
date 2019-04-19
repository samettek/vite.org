<template>
  <section>
    <footer class="footer">
      <div clss="ft-container">
        <div class="is-flex whole-footer">
          <div class="icon-wrapper is-one-third is-hidden-touch">
            <logo-without-words></logo-without-words>
          </div>
          <div class="footer-tab">
            <div class="is-flex footer-tab-wrapper">
              <div class="is-flex footer-nav">
                <div class="is-flex">
                  <div class="nav-item">
                    <footer-menu 
                      :footer-name="$t(`nav.production`)"
                      :secondary-list="navProductionList">
                    </footer-menu>
                  </div>
                  <div class="nav-item">
                    <footer-menu 
                      :footer-name="$t(`nav.person`)"
                      :secondary-list="navPersonList">
                    </footer-menu>
                  </div>
                </div>
                <div class="is-flex">
                  <div class="nav-item">
                    <footer-menu 
                      :footer-name="$t('nav.notice.name')"
                      :secondary-list="navNodeList">
                    </footer-menu>
                  </div>
                  <div class="nav-item">
                    <footer-menu 
                      :footer-name="$t('nav.media')"
                      :secondary-list="navMediaList">
                    </footer-menu>
                  </div>
                </div>
                <div class="is-flex">
                  <div class="nav-item">
                    <footer-menu 
                      :footer-name="$t('nav.tokenTransaction')"
                      :secondary-list="navExchangeList">
                    </footer-menu>
                  </div>
                  <div class="nav-item">
                    <footer-menu 
                      :footer-name="$t('nav.guide')"
                      :secondary-list="navGuideList">
                    </footer-menu>
                  </div>
                </div>
                <!-- <div class="nav-item">
                  <nuxt-link
                    :to="localePath('airdrop')"
                    class="text-hover-transition">
                    {{$t('nav.airdrop')}}
                  </nuxt-link>
                </div> -->
                <div class="is-flex">
                  <div class="nav-item">
                    <about></about>
                  </div>
                  <div class="nav-item">
                    <footer-menu 
                      :footer-name="$t(`nav.more`)"
                      :secondary-list="navMoreList">
                    </footer-menu>
                  </div>
                </div>
              </div>
              <div class="social-icons">
                <div class="icons mt30">
                  <div class="icon-links-wrapper">
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
                  © 2018-2019 VITE Labs. All Rights Reserved.
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

export default {
  components: {
    LogoWithoutWords,
    Wechat,
    Telegram,
    Exchange,
    about,
    SecondaryMenu,
    FooterMenu
  },
  props: {
    navProductionList: {
      type: Array,
      default: ()=> []
    },
    navPersonList: {
      type: Array,
      default: ()=> []
    },
    navGuideList: {
      type: Array,
      default: ()=> []
    },
    navMediaList: {
      type: Array,
      default: ()=> []
    }
  },
  data: function () {
    let { urls } = config;
    return {
      navNodeList: [{
        type: 'inner',
        name: 'nodeList',
        to: 'nodeList'
      }, {
        type: 'inner',
        name: 'superNodes',
        to: 'superNodes'
      }, {
        type: 'outer',
        name: 'notice.apply',
        to: urls.vote.apply[this.$i18n.locale]
      }],
      navExchangeList: [{
        type: 'outer',
        name: 'okex',
        to: urls.exchange.okex
      }, {
        type: 'outer',
        name: 'bittrex',
        to: urls.exchange.bittrex
      }, {
        type: 'outer',
        name: 'upbit',
        to: urls.exchange.upbit
      }],
      navMoreList: [{
        type: 'outer',
        name: 'explorer',
        to: 'https://explorer.vite.net'
      }, {
        type: 'outer',
        name: 'store',
        to: this.$i18n.locale === 'zh' ? 'https://vite.store/' : 'https://global.vite.store'
      }],
      urls,
      aboutList: ['tokenUrl'],
      learnList: ['whitePaper', 'document', 'introduction'],
      mediumList: ['medium', 'btt', 'blog'],
      urlShouldTranslate: ['whitePaper', 'telegram', 'introduction'],
      navs: ['team', 'community']
    };
  },
  methods: {
    getUrl (item) {
      if (this.urlShouldTranslate.indexOf(item) > -1) {
        return this.$t(`urlSrc.${item}`);
      }
      return config.urls[item];
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

.footer {
  min-height: 315px;
  background: url("~assets/images/footer/footer.svg") 100% no-repeat;
  z-index: 3;
  padding: 0;
  .ft-container {
    display: flex;
    justify-content: space-around;
  }
  @include touch {
    background: url("~assets/images/footer/footer.svg") 75% 60%;
  }
  .whole-footer {
    padding-top: 28px;
    justify-content: space-between;
    .icon-wrapper {
      margin-left: 50px;
    }
  }
  .mt30 {
    margin-top: 10px;
  }
  .footer-tab {
    color: white;
    // justify-self: flex-end;
    margin-right: 50px;
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
    @include mobile {
      margin-top: 0px;
      margin-left: 23px;
      text-align: left;
      margin-bottom: 40px;
    }
  }
  .footer-nav {
    justify-content: flex-start;
    flex-wrap: wrap;
    @include touch {
      flex-direction: column;
      justify-content: space-between;
    }
    a {
      color: white;
    }
    .nav-item {
      display: flex;
      align-items: flex-start;
      padding: 0.5rem 23px;
      color: $common-text-color;
      font-family: $font-family-light;
      @include touch {
        display: block;
        padding: 0.5rem 23px;
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
  }

  .icon-links-wrapper {
    @include mobile {
      text-align: left;
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
      @include touch {
        margin: 10px 20px;
      }
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
