<template>
  <client-only class="no-ssr">
    <v-popover
      :disabled="!isEnabled"
      popoverClass="v-popover">
        <span class="wp-wrapper">{{$t('home.whitePaper')}}</span>
      <template slot="popover">
        <div class="item-wrapper">
          <div v-for="(item,index) in list" :key="index">
            <a class="tag" target="_blank" :href="urlList[item]">
              {{$t(`urls.whitePaperList.${item}`)}}
            </a>
          </div>
        </div>
      </template>
    </v-popover>
  </client-only>
</template>

<script type="text/babel">
import { VPopover } from 'v-tooltip';
import config from '~/config.js';

export default {
  components: {
    VPopover,
  },
  data() {
    return {
      isEnabled: true,
      urlList: config.urls.whitePaper,
      list: ['english', 'chinese', 'korean', 'french', 'vietnamese', 'russian', 'japan'],
      isBrowser: process.browser,
    };
  },
  methods: {},
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
  @import "assets/vars.scss";

  .no-ssr {
    display: inline-block;
    cursor: pointer;
  }
  .wp-wrapper {
    font-size:16px;
    font-weight:600;
    color:#fff;
    vertical-align: baseline;
    display: inline-block;
    background: #3394ff;
    height: 54px;
    line-height: 54px;
    padding: 0 17px;
    border-radius: 4px;
    min-width: 140px;
    margin-right: 40px;
  }

  .button {
    padding-left: 35px;
    padding-right: 35px;
    font-size:16px;
    font-family: $font-family-title;
    color:#007AFF;
    line-height:60px;
    width: 168px;
    height: 60px;
    border-color: #007AFF;
    background: transparent;
    @include touch {
      width: 155px;
      height: 34px;
      font-size: 18px;
      line-height: 25px;
    }

    svg {
      margin-left: 0.875rem;
      @include touch {
        height: 10px;
        margin-left: 5px;
      }
    }
    &:hover {
      color: #1580E3;
      border-color: #1580E3;
      svg {
        color: #1580E3;
      }
    }
    &:focus {
      outline: none;
    }
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
          text-decoration: none;
        }
      }
    }
  }

  @include until($desktop) {
    .v-popover {
      margin-top: 10px;
    }
    .wp-wrapper {
      display: inline-block;
      background: none;
      padding: 0;
      border-radius: none;
      min-width: unset;
      margin-right: 20px;
      height: 18px;
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #ffffff;
      line-height: 14px;
      vertical-align: middle;
      @include more-icon();
    }
  }
</style>
