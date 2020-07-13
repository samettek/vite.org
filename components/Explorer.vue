<template>
  <div class="dropdown is-hoverable  dropdown-lv2" :class="{'is-right': !isFooter}" :style="{width:isFooter?'':'100%'}">
    <div class="dropdown-trigger">
      <a
        :class="{'foot-btn': isFooter,'dropdown-item':!isFooter}"
      >
        <span>{{$t('nav.explorer')}}</span>
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
            :href="urlMap[item][$i18n.locale]"
            :key="index"
          >
            {{$t(`nav.${item}`)}}
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
      urlMap: config.urls.explorer,
    };
  },
  computed: {
    urlList() {
      return [
        'viteExplorer',
        'viteScan',
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
  .dropdown-content {
    display: none;
    .dropdown-item {
      @include navbar-submenu();
    }
  }
}
.dropdown.is-right .dropdown-menu {
  left: 100%;
  top: 0;
}
</style>
