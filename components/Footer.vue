<template>
  <section>
    <footer class="footer">
      <div clss="ft-container">
        <div class="is-flex whole-footer">
          <div class="icon-wrapper is-one-third is-hidden-touch">
            <logo-without-words></logo-without-words>
          </div>
          <div class="footer-tab">
            <div class="">
              <div class="is-flex footer-nav">
                <div class="nav-item">
                  <secondary-menu 
                    :footer-name="$t(`nav.production`)"
                    :secondary-list="navProductionList"
                    :is-footer="true">
                  </secondary-menu>
                </div>
                <div class="nav-item">
                  <secondary-menu 
                    :footer-name="$t(`nav.person`)"
                    :secondary-list="navPersonList"
                    :is-footer="true">
                  </secondary-menu>
                </div>
                <div class="nav-item">
                  <voteNotice 
                    :is-footer="true">
                  </voteNotice>
                </div>
                <div class="nav-item">
                  <secondary-menu 
                    :is-footer="true"
                    :footer-name="$t(`nav.media`)"
                    :secondary-list="navMediaList">
                  </secondary-menu>
                </div>
                <div class="nav-item">
                  <Exchange
                   :is-footer="true">
                  </Exchange>
                </div>
                <div class="nav-item">
                  <secondary-menu 
                    :footer-name="$t(`nav.guide`)"
                    :secondary-list="navGuideList"
                    :is-footer="true">
                  </secondary-menu>
                </div>
                <div class="nav-item">
                  <nuxt-link
                    :to="localePath('airdrop')"
                    class="text-hover-transition">
                    {{$t('nav.airdrop')}}
                  </nuxt-link>
                </div>
                <div class="nav-item">
                  <about
                    :is-footer="true">
                  </about>
                </div>
                <div class="nav-item">
                  <secondary-menu 
                    :footer-name="$t(`nav.more`)"
                    :secondary-list="navMoreList"
                    :is-footer="true">
                  </secondary-menu>
                </div>
              </div>
              <div class="social-icons">
                <div class="icons mt40">
                  <div class="icon-links-wrapper">
                    <a
                      :href="urls.github"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <fa-icon
                        class="icon"
                        :icon="['fab', 'github']"
                      ></fa-icon>
                    </a>
                    <a
                      :href="urls.discord"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <fa-icon
                        class="icon"
                        :icon="['fab', 'discord']"
                      ></fa-icon>
                    </a>
                    <a
                      :href="urls.twitter"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <fa-icon
                        class="icon"
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
                        class="icon"
                        :icon="['fab', 'reddit']"
                      /></a>
                    <a
                      :href="urls.youtube"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <fa-icon
                        class="icon"
                        :icon="['fab', 'youtube']"
                      /></a>
                    <a
                      :href="urls.forum"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <img
                        class="icon forum"
                        src="~/assets/images/community/forum-icon.svg"
                      /></a>
                    <a
                      :href="urls.weibo"
                      target="_blank"
                      class="text-hover-transition"
                    >
                      <fa-icon
                        class="icon"
                        :icon="['fab', 'weibo']"
                      /></a>
                    <wechat></wechat>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="copyright mt40">
                  <span>
                    © 2018-2019 VITE Labs. All Rights Reserved.
                  </span>
                </div>
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
import voteNotice from '~/components/voteNotice.vue';
import about from '~/components/about';
import SecondaryMenu from '~/components/SecondaryMenu.vue';

export default {
  components: {
    LogoWithoutWords,
    Wechat,
    Telegram,
    Exchange,
    voteNotice,
    about,
    SecondaryMenu
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
      navMoreList: [{
        type: 'inner',
        name: 'explorer',
        to: 'xxx'
      }, {
        type: 'inner',
        name: 'store',
        to: 'xxx'
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
    background: url("~assets/images/footer/footer.svg") 100% 60%;
  }
  .whole-footer {
    justify-content: space-between;
    .icon-wrapper {
      margin-left: 50px;
    }
  }
  .mt40 {
    margin-top: 40px;
  }
  .footer-tab {
    color: white;
    justify-self: flex-end;
    margin-right: 50px;
    @include touch {
      margin: 0 auto;
    }
    @include mobile {
      width: 100%;
    }
    .social-icons {
      margin-right: 10px;
      .forum {
        width: 28px;
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
    @include touch {
      text-align: center;
    }
  }
  .footer-nav {
    justify-content: flex-end;
    flex-wrap: wrap;
    @include touch {
      flex-wrap: wrap;
      justify-content: center;
    }
    a {
      color: white;
    }
    .nav-item {
      padding: 0.5rem 23px;
      color: $common-text-color;
      font-family: $font-family-light;
      &:hover {
        color: $common-active-color;
      }
      &.active {
        color: $common-active-color;
      }
    }
  }

  .icon-links-wrapper {
    @include touch {
      text-align: center;
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
