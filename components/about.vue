<template>
  <div>
    <div class="secondary-button">
      <span>{{ $t(`nav.about`) }}</span>
    </div>
    <whitepaper :is-footer="true"></whitepaper>
    <footer-menu
      :secondary-list="navAboutList">
    </footer-menu>
  </div>
</template>

<script type="text/babel">
import config from '~/config';
import whitepaper from './WhitePaperForMenu';
import FooterMenu from '~/components/FooterMenu.vue';

export default {
  components: {
    whitepaper,
    FooterMenu
  },
  props: {
  },
  computed: {
    url() {
      return {
        introduction: config.urls.introduction[this.$i18n.locale],
        blog: config.urls.blog[this.$i18n.locale],
        wiki: config.urls.wiki[this.$i18n.locale],
      };
    },
  },
  data() {
    return {
      navAboutList: [{
        type: 'outer',
        name: 'wiki',
        to: config.urls.wiki[this.$i18n.locale],
      }, {
        type: 'outer',
        name: 'blog',
        to: config.urls.blog[this.$i18n.locale],
      }],
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.secondary-button {
    color: white;;
    padding: 0 0 0 0;
    // font-family: $font-family-light;
    font-size:14px;
    font-family:$font-family-title;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:20px;
    margin-bottom: 6px;
    &:focus {
      border: none;
      box-shadow: none;
    }
    &:hover {
      color: white;
    }
  }
</style>
