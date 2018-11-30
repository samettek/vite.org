<template>
  <div class="dropdown lang-btn is-hoverable">
    <div class="dropdown-trigger">
      <button class="button">
        <span>{{$t('nav.notice.name')}}</span>
      </button>
    </div>
    <div class="dropdown-menu" id="lang-dropdown-menu" role="menu">
      <div class="dropdown-content">
        <nuxt-link :to="localePath('nodeList')" class="dropdown-item">
          {{$t(`nav.nodeList`)}}
        </nuxt-link>
        <nuxt-link :to="localePath('superNodes')" class="dropdown-item">
          {{$t(`nav.superNodes`)}}
        </nuxt-link>
        <a class="dropdown-item" target="_blank" :href="voteMap.apply[$i18n.locale]">
          {{$t(`nav.notice.apply`)}}
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import config from '~/config'

  export default {
    data () {
      return {
        voteMap: config.urls.vote
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .lang-btn {
    .dropdown-trigger {
      button {
        color: #999999;
        background: transparent;
        padding: 0 1rem 0 0;
        border-radius: 0.35rem;
        height: (40rem/16);
        border: transparent;
        font-family: $font-family-main;
        @include touch {
          font-size: 14px;
        }
        &:focus {
          border: none;
          box-shadow: none;
        }
        &:hover {
          color: #333333;
        }
      }
    }
    .dropdown-menu {
      .dropdown-content {
        .dropdown-item {
          color: rgba(0,0,0,0.8);
          &:hover {
            color: rgba(0,0,0,0.9)
          }
        }
      }
    }
  }
</style>
