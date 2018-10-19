<template>
  <section>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column icon-wrapper is-one-third">
            <logo-without-words></logo-without-words>
          </div>
          <div class="column footer-tab">
            <div class="columns is-mobile">
              <div class="column" v-for="(item, index) in navs" :key="index">
                <nuxt-link :key="item" :to="localePath(item)" class="nav-item text-hover-transition">
                  {{$t(`nav.${item}`)}}
                </nuxt-link>
              </div>
              <div class="column">
                <Media></Media>
              </div>
              <div class="column">
                <Exchange></Exchange>
              </div>
              <div class="column">
              </div>
            </div>
            <div class="icons mt40">
              <div class="icon-links-wrapper">
                <a :href="urls.github" target="_blank" class="text-hover-transition"><fa-icon class="icon" :icon="['fab', 'github']"></fa-icon></a>
                <a :href="urls.discord" target="_blank" class="text-hover-transition"><fa-icon class="icon" :icon="['fab', 'discord']"></fa-icon></a>
                <a :href="urls.twitter" target="_blank" class="text-hover-transition"><fa-icon class="icon" :icon="['fab', 'twitter']"></fa-icon></a>
                <telegram></telegram>
                <a :href="urls.reddit" target="_blank" class="text-hover-transition"><fa-icon class="icon" :icon="['fab', 'reddit']"/></a>
                <a :href="urls.youtube" target="_blank" class="text-hover-transition"><fa-icon class="icon" :icon="['fab', 'youtube']"/></a>
                <wechat></wechat>
              </div>
            </div>
            <div class="copyright mt40">
              <span>
                © 2018 VITE Labs. All Rights Reserved. 
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script type="text/babel">
  import LogoWithoutWords from '~/components/LogoWithoutWords.vue'
  import Wechat from '~/components/Wechat'
  import Telegram from '~/components/Telegram'
  import config from '~/config.js'
  import Exchange from '~/components/Exchange.vue'
  import Media from '~/components/Media.vue'

  export default {
    components: {
      LogoWithoutWords,
      Wechat,
      Telegram,
      Exchange,
      Media
    },
    data: function () {
      let {urls} = config
      return {
        urls,
        aboutList: ['tokenUrl'],
        learnList: ['whitePaper', 'document', 'introduction'],
        mediumList: ['medium', 'btt', 'blog'],
        urlShouldTranslate: ['whitePaper', 'telegram', 'introduction'],
        navs: ['team', 'partnership', 'community', 'faq']
      }
    },
    methods: {
      getUrl (item) {
        if (this.urlShouldTranslate.indexOf(item) > -1) {
          return this.$t(`urlSrc.${item}`)
        }
        return config.urls[item]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .footer {
    height: 315px;
    background: url("~assets/images/footer/footer.svg") 40% 60%;
    .mt40 {
      margin-top: 40px;
    }
    .footer-tab {
      color: white;
    }
    .icons {
      text-align: right;
    }
    .copyright {
      font-size: 12px;
      text-align: right;
    }
    
    .icon-links-wrapper {
      @include mobile {
        text-align: center;
      }
      & > a, /deep/ .v-popover {
        margin-left: 25px;
        svg {
          width: 30px;
          height: 30px;
          color: white;
          &:hover {
            // color: #1580E3;
          }
          @include touch {
            width: 24px;
            height: 24px;
          }
        }
        @include touch {
          margin-left: 19px;
        }
        &:first-child {
          margin-left: 0;
        }
      }
    }
    .links-wrapper {
      line-height: 1.75rem;
      @include mobile {
        text-align: center;
      }
      & > div {
        &:first-child {
          font-size:16px;
          font-family: $font-family-main;
          color: rgba(51,51,51,1);
          margin-bottom: 20px;
          line-height: 25px;
          @include touch {
            font-size: 15px;
            line-height: 21px;
            margin-bottom: 18px;
          }
        }
      }
      ul {
        li {
          a {
            font-size:16px;
            font-family: $font-family-main;
            color:white;
            line-height:25px;

            @include touch {
              font-size: 14px;
              line-height: 20px;
            }

            @include widescreen-desktop {
              font-size: 15px;
            }

            &:hover {
              color: #1580E3;
            }
          }
        }
      }
    }
  }
</style>
