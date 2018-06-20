<template>
  <no-ssr class="no-ssr">
    <v-popover
      offset="16"
      :disabled="!isEnabled"
      popoverClass="v-popover">
      <a class="tooltip-target"  target="_blank"><fa-icon :icon="['fab', 'telegram-plane']" /></a>

      <template slot="popover">
        <div>
          <a v-for="item in list" class="tag is-info" target="_blank" :href="urlList[item]">
            {{$t(`urls.telegram.${item}`)}}
          </a>
        </div>
      </template>
    </v-popover>

    <a slot="placeholder" target="_blank"><fa-icon :icon="['fab', 'telegram-plane']" /></a>
  </no-ssr>
</template>

<script type="text/babel">
  import config from '~/config.js'
  import { VPopover } from 'v-tooltip'

  export default {
    components: {
      VPopover
    },
    data: function () {
      return {
        isEnabled: true,
        urlList: config.urls.telegram,
        list: ['ann', 'english', 'chinese', 'vietnamese', 'korean', 'russia'],
        isBrowser: process.browser
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .popover-inner {
    max-width: 250px;
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  img {
    max-width: 200px;
    width: 200px;
  }
  .icon {
    height: 100%;
    width: 100%;
    color: #C4C4C4;
    &:hover {
      color: #1580E3;
    }
  }
  .v-popover {
    display: inline-block;
    height: 36px;
    width: 36px;
    margin-left: 28px;
  }
  .ann-wrapper {
    text-align: center;
  }
  .is-info {
    margin-top: 10px;
    margin-left: 10px;
  }
  .no-ssr {
    display: inline-block;
    height: 36px;
    width: 36px;
    margin-left: 28px;
  }
</style>
