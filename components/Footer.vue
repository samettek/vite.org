<template>
  <section>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column icon-wrapper is-half">
            <div class="logo-wrapper">
              <logo class="logo"></logo>
            </div>
            <div class="icon-links-wrapper">
              <a :href="urls.github" target="_blank" class="text-hover-transition"><fa-icon class="icon" :icon="['fab', 'github']"></fa-icon></a>
              <a :href="urls.discord" target="_blank" class="text-hover-transition"><fa-icon class="icon" :icon="['fab', 'discord']"></fa-icon></a>
              <a :href="urls.twitter" target="_blank" class="text-hover-transition"><fa-icon class="icon" :icon="['fab', 'twitter']"></fa-icon></a>
              <a :href="$t('urlSrc.telegram')" target="_blank" class="text-hover-transition"><fa-icon class="icon" :icon="['fab', 'telegram-plane']"/></a>
              <a :href="urls.reddit" target="_blank" class="text-hover-transition"><fa-icon class="icon" :icon="['fab', 'reddit']"/></a>
              <no-ssr><wechat></wechat></no-ssr>
            </div>
          </div>

          <div class="column link-tab">
            <div class="columns is-mobile">
              <div class="column links-wrapper">
                <div>学习</div>
                <ul>
                  <li v-for="item in learnList">
                    <a class="text-hover-transition" :href="getUrl(item)" target="_blank">{{$t(`urls.${item}`)}}</a>
                  </li>
                </ul>
              </div>
              <div class="column links-wrapper">
                <div>关于</div>
                <ul>
                  <li v-for="item in aboutList">
                    <a class="text-hover-transition" :href="getUrl(item)" target="_blank">{{$t(`urls.${item}`)}}</a>
                  </li>
                </ul>
              </div>
              <div class="column links-wrapper">
                <div>媒体</div>
                <ul>
                  <li v-for="item in mediumList">
                    <a class="text-hover-transition" :href="getUrl(item)" target="_blank">{{$t(`urls.${item}`)}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer class="footer all-rights">
      <div class="container">
          <span>
            Vite Labs Limited, All Rights Reserved.
            <br class="is-hidden-desktop"/>
            Copyright © 2018 VITE Labs
          </span>
      </div>
    </footer>
  </section>
</template>

<script type="text/babel">
  import Logo from '~/components/Logo.vue'
  import Wechat from '~/components/Wechat'
  import config from '~/config.js'

  export default {
    components: {
      Logo,
      Wechat
    },
    data: function () {
      let {urls} = config
      return {
        urls,
        aboutList: ['loopring'],
        learnList: ['whitePaper'],
        mediumList: ['medium', 'telegram'],
        urlShouldTranslate: ['whitePaper', 'telegram']
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
    &:first-child {
      padding-top: 78px;
      border-bottom: 1px solid rgba(0,0,0,0.08);
      @include touch {
        padding-top: 35px;
      }
    }

    &:last-child {
      padding: 31px;
      @include touch {
        padding: 15px;
      }
    }

    &.all-rights {
      font-size:14px;
      font-family: $font-family-main;
      color:rgba(188,188,188,1);
      line-height:20px;
      text-align: center;

      @include touch {
        font-size: 12px;
        line-height: 17px;
      }
    }

    .link-tab {
      padding-top: 30px;
    }

    .logo-wrapper {
      @include mobile {
        display: flex;
        .logo {
          flex: 1;
        }
      }
      .logo {
        margin-bottom: 42px;
        color: #1580E3;
        height: 116px;
        width: auto;
        @include touch {
          height: 78px;
          margin-bottom: 22px;
        }
      }
    }
    .icon-links-wrapper {
      @include mobile {
        text-align: center;
      }
      & > a, /deep/ .v-popover {
        margin-left: 29px;
        svg {
          width: 36px;
          height: 36px;
          color: #C4C4C4;
          &:hover {
            color: #1580E3;
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
            font-size:15px;
            font-family: $font-family-main;
            color:rgba(188,188,188,1);
            line-height:25px;

            @include touch {
              font-size: 14px;
              line-height: 20px;
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
