<template>
  <div class="dropdown" :class="[`dropdown_${theme}`]">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" :class="{'foot-btn': isFooter}">
        <span v-if="!footerTo" class="btn__click">{{ footerName }}</span>
        <nuxt-link :to="localePath(footerTo)" v-else class="btn__click">{{ footerName }}</nuxt-link>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
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
          <div class="nested dropdown dropdown-item" v-if="item.type && item.type === 'menu'"
               :key="index">
            <secondary-menu
              :footer-name="$t(`nav.${item.name}`)"
              :secondary-list="item.subList"
            ></secondary-menu>
          </div>
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
  name: 'secondaryMenu',
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
          url = this.$link(url);
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
