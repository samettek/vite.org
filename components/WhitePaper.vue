<template>
  <no-ssr class="no-ssr">
    <v-popover
      offset="16"
      :disabled="!isEnabled"
      popoverClass="v-popover">
      <div class="btn-wrapper">
        <a class="button tooltip-target">
          {{$t('home.whitePaper')}}
        </a>
      </div>

      <template slot="popover">
        <div class="item-wrapper">
          <div v-for="(item, index) in list" :key="index">
            <a class="tag" target="_blank" :href="urlList[item]">
              {{$t(`urls.whitePaperList.${item}`)}}
            </a>
          </div>
        </div>
      </template>
    </v-popover>

    <div class="btn-wrapper" slot="placeholder">
      <a class="button" :href="$t('urlSrc.whitePaper')" target="_blank">
        {{$t('home.whitePaper')}}
      </a>
    </div>
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
        urlList: config.urls.whitePaper,
        list: ['english', 'chinese', 'korean', 'french', 'vietnamese', 'russian'],
        isBrowser: process.browser
      }
    },
    methods: {}
  }
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
  }

  .button {
    padding-left: 35px;
    padding-right: 35px;
    background: #007AFF;
    box-shadow: 0 10px 40px 0 rgba(126,183,238,0.83);
    width: 200px;
    font-family: $font-family-title;
    letter-spacing: 1px;
    color: white;
    line-height:3.75rem;
    height:3.75rem;
    @include touch {
      width: 155px;
      height: 34px;
      font-size: 18px;
      line-height: 25px;
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
</style>
