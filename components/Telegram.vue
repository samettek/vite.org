<template>
  <no-ssr class="no-ssr">
    <v-popover
      offset="16"
      :disabled="!isEnabled"
      popoverClass="v-popover">
      <a class="tooltip-target"  target="_blank"><fa-icon :icon="['fab', 'telegram-plane']" /></a>

      <template slot="popover">
        <div class="item-wrapper">
          <div v-for="(item, index) in list" :key="index">
            <a class="tag" target="_blank" :href="urlList[item]">
              {{$t(`urls.telegram.${item}`)}}
            </a>
          </div>
        </div>
      </template>
    </v-popover>

    <a slot="placeholder" target="_blank"><fa-icon :icon="['fab', 'telegram-plane']" /></a>
  </no-ssr>
</template>

<script type="text/babel">
  import config from '~/config.js';
  import { VPopover } from 'v-tooltip';

  export default {
    components: {
      VPopover
    },
    data: function () {
      return {
        isEnabled: true,
        urlList: config.urls.telegram,
        list: ['ann', 'english', 'chinese', 'russia', 'vietnamese', 'korean', 'thailand'],
        isBrowser: process.browser
      };
    },
    methods: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .v-popover {
    .popover-inner {
      max-width: 300px;
    }
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
    height: 30px;
    width: 30px;
    margin-left: 20px;
  }
  .no-ssr {
    display: inline-block;
    height: 30px;
    width: 30px;
    margin-left: 20px;
  }

  .item-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    & > div {
      padding: 5px;
      .tag {
        background: none;
        &:hover {
          background: #0072e3;
          color: white;
          border-radius: 2px;
          text-decoration: none;
        }
      }
    }
  }
</style>
