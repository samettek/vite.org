<template>
  <div class="dropdown is-hoverable is-right dropdown-lv2" :style="{width:isFooter?'':'100%'}">
    <div class="dropdown-trigger">
      <a
        :class="{'foot-btn': isFooter,'dropdown-item':!isFooter}"
      >
        <span>{{$t('about.whitepaper')}}</span>
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
      urlMap: config.urls.whitePaper
    }
  },
  computed: {
    urlList: function () {
      return [
        'english',
        'chinese',
        'korean',
        'french',
        'vietnamese',
        'russian'
      ]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

.dropdown-trigger {
  width: 100%;
  button {
    font-size: 14px;
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
.dropdown-lv2:hover .dropdown-content {
  display: block;
}
.dropdown-menu {
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


