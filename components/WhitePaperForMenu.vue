<template>
  <div class="dropdown is-hoverable is-right dropdown-lv2" :style="{width:isFooter?'':'100%'}">
    <div class="dropdown-trigger">
      <a
        :class="{'foot-btn': isFooter,'dropdown-item':!isFooter}"
      >
        <span>{{$t('nav.whitepaper')}}</span>
      </a>
    </div>
    <div
      class="dropdown-menu"
      id="lang-dropdown-menu"
      role="menu"
    >
      <div class="dropdown-content">
        <template v-for="(item, index) in urlList">
          <a
            class="dropdown-item"
            target="_blank"
            :href="urlMap[item]"
            :key="index"
          >
            {{$t(`urls.whitePaperList.${item}`)}}
          </a>
        </template>
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
      urlMap: config.urls.whitePaper,
    };
  },
  computed: {
    urlList() {
      return [
        'english',
        'chinese',
        'korean',
        'french',
        'vietnamese',
        'russian',
        'japan',
      ];
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

.dropdown-trigger {
  width: 100%;
  .foot-btn {
    font-size: 14px;
    color: white;
    &:hover {
      color: white;
    }
  }
}
.dropdown-lv2:hover .dropdown-content {
  display: block;
}
.dropdown-menu {
  #lang-dropdown-menu{
      overflow-y: scroll;
      max-height: 100px;
    }
  .dropdown-content {
    display: none;
    .dropdown-item {
      color: $common-text-color;
      &:hover {
        color: $common-active-color;
      }
    }
  }
}
</style>
