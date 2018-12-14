<template>
  <div class="dropdown lang-btn is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" :class="{'foot-btn': isFooter}">
        <span>{{$t('nav.media')}}</span>
      </button>
    </div>
    <div class="dropdown-menu" id="lang-dropdown-menu" role="menu">
      <div class="dropdown-content">
        <template v-for="(item, index) in mediaList">
          <a class="dropdown-item" target="_blank" :href="mediaMap[item]" :key="index">
            {{$t(`media.${item}`)}}
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import config from '~/config'

  export default {
    props: {
      isFooter: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        mediaMap: config.urls.media
      }
    },
    computed: {
      mediaList: function () {
        return ['medium', 'bitcointalk']
      }
    }
  }
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
