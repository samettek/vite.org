<template>
  <div class="">
    <div class="secondary-button">
      <span>{{ footerName }}</span>
    </div>
    <div class="secondary-menu" role="menu">
      <div class="secondary-content" v-if="list.length">
        <template v-for="(item, index) in list">
          <div
            class="secondary-item-wrapper"
            :key="index"
            v-if="item.type && item.type === 'outer'"
            >
            <a
              v-if="item.to"
              class="secondary-item"
              target="_blank"
              :href="item.to"
              >
              {{$t(`nav.${item.name}`)}}
            </a>
          </div>
          <div
            v-else
            class="secondary-item-wrapper"
            :key="index">
            <nuxt-link
              :to="item.anchor ? `${localePath(item.to)}#${item.anchor}` : localePath(item.to)"
              class="secondary-item">
              {{$t(`nav.${item.name}`)}}
            </nuxt-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
// secondaryList   item {type: inner/outer, name: xxx, to: xxx}
import config from '~/config';

export default {
  props: {
    footerName: {
      type: String,
      default: '',
    },
    secondaryList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    list() {
      return this.secondaryList.map((item) => {
        let url = item.to;
        if (item.type === 'outer' && url && url.indexOf('http') === -1) {
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

  .secondary-menu {
    .secondary-content {
      .secondary-item-wrapper {
        margin-bottom: 6px;
      }
      .secondary-item {
        font-size:14px;
        color: white;
        &:hover {
          color: white;
        }
      }
    }
  }
</style>
