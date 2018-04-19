<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column icon-wrapper is-half">
          <div class="logo-wrapper">
            <logo class="logo"></logo>
          </div>
          <div class="icon-links-wrapper">
            <a :href="urls.github" target="_blank" class="icon">
              <fa-icon :icon="['fab', 'github']"></fa-icon>
            </a>
            <a :href="urls.discord" target="_blank" class="icon">
              <fa-icon :icon="['fab', 'discord']"></fa-icon>
            </a>
            <a :href="urls.twitter" target="_blank" class="icon">
              <fa-icon :icon="['fab', 'twitter']"></fa-icon>
            </a>
          </div>
        </div>
        <div class="column">
          <div class="columns is-mobile">
            <div class="column links-wrapper is-half">
              <div>学习</div>
              <ul>
                <li><a :href="urls.whitePaper" target="_blank">{{$t('urls.whitePaper')}}</a></li>
                <li><a :href="urls.document" target="_blank">{{$t('urls.document')}}</a></li>
              </ul>
            </div>
            <div class="column links-wrapper">
              <div>关于</div>
              <ul>
                <li><a :href="urls.telegramEn" target="_blank">{{$t('urls.telegramEn')}}</a></li>
                <li><a :href="urls.telegramZh" target="_blank">{{$t('urls.telegramZh')}}</a></li>
                <li><a :href="urls.loopring" target="_blank">Loopring</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="all-rights">
        <span>
          Vite Labs Limited, All rights reserved.
        </span>
      </div>
    </div>
  </footer>
</template>

<script type="text/babel">
  import Logo from '~/components/Logo.vue'
  import config from '~/config.js'

  export default {
    components: {
      Logo
    },
    data: function () {
      return {
        urls: config.urls
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .footer {
    padding-top: 5.44rem;
    padding-bottom: 1rem;

    .all-rights {
      width: 100%;
      text-align: center;
      color: rgba(255,255,255,0.8);
      font-size: 1rem;
      font-family: $font-family-light;
      font-weight: 300;
    }
    .logo-wrapper {
      @include mobile {
        display: flex;
        .logo {
          flex: 1;
        }
      }
      .logo {
        margin-bottom: 2.63rem;
        color: white;
      }
    }
    .icon-links-wrapper {
      font-size: 2rem;
      @include mobile {
        text-align: center;
      }
      .icon {
        color: rgba(255,255,255,0.8);
        margin-left: 2rem;
        &:hover {
          color: white;
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
          color: white;
          margin-bottom: 2rem;
        }
      }
      ul {
        li {
          a {
            color: rgba(255,255,255,0.7);
            &:hover {
              color: white;
            }
          }
        }
      }
    }
  }
</style>
