<template>
  <div class="dropdown is-hoverable" :class="[`dropdown_${theme}`]">
    <div class="dropdown-trigger">
      <button class="button" :class="{'foot-btn': isFooter}">
        <span v-if="!footerTo">{{ footerName }}</span>
        <nuxt-link :to="localePath(footerTo)" v-else class="btn__click">{{ footerName }}</nuxt-link>
      </button>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content" v-if="list.length">
        <template v-for="(item, index) in list">
          <a
            class="dropdown-item"
            target="_blank"
            :href="item.to"
            v-if="item.type && item.type === 'outer'"
            :key="index"
          >{{$t(`nav.${item.name}`)}}</a>
          <nuxt-link
            :to="item.anchor ? `${localePath(item.to)}#${item.anchor}` : localePath(item.to)"
            class="dropdown-item"
            v-if="item.type && item.type === 'inner'"
            :key="index"
          >{{$t(`nav.${item.name}`)}}</nuxt-link>
        </template>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
// secondaryList   item {type: inner/outer, name: xxx, to: xxx}
import config from '~/config';

export default {
  props: {
    isFooter: {
      type: Boolean,
      default: false,
    },
    footerName: {
      type: String,
      default: '',
    },
    footerTo: {
      type: String,
      default: '',
    },
    secondaryList: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
      default: 'gray',
    },
  },
  computed: {
    list() {
      return this.secondaryList.map((item) => {
        let url = item.to;
        if (item.type === 'outer' && item.to.indexOf('http') === -1) {
          url = this.$t(`nav.links.${item.to}`);
        }
        return {
          ...item,
          to: url,
        };
      });
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
@import "~assets/subnav";
</style>
