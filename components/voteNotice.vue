<template>
  <div class="dropdown lang-btn is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" :class="{'foot-btn': isFooter}">
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
import config from '~/config';

export default {
  props: {
    isFooter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      voteMap: config.urls.vote,
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .lang-btn {
    .dropdown-trigger {
      button {
        color: $common-text-color;
        background: transparent;
        padding: 0 0 0 0;
        border-radius: 0.35rem;
        height: (40rem/16);
        border: transparent;
        font-family: $font-family-light;
        &:focus {
          border: none;
          box-shadow: none;
        }
        &:hover {
          color: $common-active-color;
        }
      }
      .foot-btn {
        color: white;
        &:hover {
          color: white;
        }
      }
    }
    .dropdown-menu {
      .dropdown-content {
        .dropdown-item {
          color: $common-text-color;
          &:hover {
            color: $common-active-color
          }
        }
      }
    }
  }
</style>
