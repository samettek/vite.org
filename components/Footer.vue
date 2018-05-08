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
              <a :href="urls.github" target="_blank" class="icon"><fa-icon :icon="['fab', 'github']"></fa-icon></a>
              <a :href="urls.discord" target="_blank" class="icon"><fa-icon :icon="['fab', 'discord']"></fa-icon></a>
              <a :href="urls.twitter" target="_blank" class="icon"><fa-icon :icon="['fab', 'twitter']"></fa-icon></a>
              <a :href="$t('urlSrc.telegram')" target="_blank" class="icon"><fa-icon :icon="['fab', 'telegram-plane']"/></a>
              <a :href="urls.reddit" target="_blank" class="icon"><fa-icon :icon="['fab', 'reddit']"/></a>
            </div>
          </div>

          <div class="column link-tab">
            <div class="columns is-mobile">
              <div class="column links-wrapper">
                <div>学习</div>
                <ul>
                  <li v-for="item in learnList">
                    <a :href="getUrl(item)" target="_blank">{{$t(`urls.${item}`)}}</a>
                  </li>
                </ul>
              </div>
              <div class="column links-wrapper">
                <div>关于</div>
                <ul>
                  <li v-for="item in aboutList">
                    <a :href="getUrl(item)" target="_blank">{{$t(`urls.${item}`)}}</a>
                  </li>
                </ul>
              </div>
              <div class="column links-wrapper">
                <div>媒体</div>
                <ul>
                  <li v-for="item in mediumList">
                    <a :href="getUrl(item)" target="_blank">{{$t(`urls.${item}`)}}</a>
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
            Copyright © 2018 VITE Labs
          </span>
      </div>
    </footer>
  </section>
</template>

<script type="text/babel">
  import Logo from '~/components/Logo.vue'
  import config from '~/config.js'

  export default {
    components: {
      Logo
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
      border-bottom: 1px solid #C6C6C6;
    }
    &:last-child {
      padding: 31px;
    }

    &.all-rights {
      font-size:14px;
      font-family:PingFangSC-Medium;
      color:rgba(188,188,188,1);
      line-height:20px;
      text-align: center;
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
      }
    }
    .icon-links-wrapper {
      font-size: 36px;
      @include mobile {
        text-align: center;
      }
      .icon {
        color: #C4C4C4;
        margin-left: 29px;
        &:hover {
          color: #1580E3;
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
          font-size:18px;
          font-family:PingFangSC-Medium;
          color:rgba(51,51,51,1);
          line-height:28px;
          margin-bottom: 48px;
        }
      }
      ul {
        li {
          a {
            font-size:18px;
            font-family:PingFangSC-Medium;
            color:rgba(188,188,188,1);
            line-height:28px;

            &:hover {
              color: #1580E3;
            }
          }
        }
      }
    }
  }
</style>
