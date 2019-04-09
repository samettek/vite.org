<template>
  <div class="dropdown lang-btn is-hoverable">
    <div class="dropdown-trigger">
      <button
        class="button"
        :class="{'foot-btn': isFooter}"
      >
        <span>{{$t('nav.about')}}</span>
      </button>
    </div>
    <div
      class="dropdown-menu"
      id="lang-dropdown-menu"
      role="menu"
    >
      <div class="dropdown-content">
        <a class="dropdown-item" target="_blank" :href="url.blog">{{$t('about.blog')}}</a>
        <whitepaper></whitepaper>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import config from '~/config';
import whitepaper from './WhitePaperForMenu';

export default {
  components: { whitepaper },
  props: {
    isFooter: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    url(){
      return {
        introduction:config.urls.introduction[this.$i18n.locale],
        blog:config.urls.blog[this.$i18n.locale]
      };
    }
  }
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
          background-color: whitesmoke;
          color: $common-active-color;
        }
      }
    }
  }
}
</style>


