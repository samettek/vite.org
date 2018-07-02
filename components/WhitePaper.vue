<template>
  <no-ssr class="no-ssr">
    <v-popover
      offset="16"
      :disabled="!isEnabled"
      popoverClass="v-popover">
      <div class="btn-wrapper">
        <a class="button text-hover-transition tooltip-target">
          {{$t('home.whitePaper')}}
          <svg class="text-hover-transition" width="13px" height="22px" viewBox="0 0 13 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="home——PC" transform="translate(-526.000000, -473.000000)" stroke-width="2" stroke="currentColor">
                <g id="Group" transform="translate(360.000000, 152.000000)">
                  <polyline id="Rectangle-2-Copy-2" transform="translate(172.000000, 332.000000) scale(-1, 1) translate(-172.000000, -332.000000) " points="177 342 167 332 177 322"></polyline>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </div>

      <template slot="popover">
        <div class="item-wrapper">
          <div v-for="item in list">
            <a class="tag" target="_blank" :href="urlList[item]">
              {{$t(`urls.whitePaperList.${item}`)}}
            </a>
          </div>
        </div>
      </template>
    </v-popover>

    <div class="btn-wrapper" slot="placeholder">
      <a class="button text-hover-transition" :href="$t('urlSrc.whitePaper')" target="_blank">
        {{$t('home.whitePaper')}}
        <svg class="text-hover-transition" width="13px" height="22px" viewBox="0 0 13 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="home——PC" transform="translate(-526.000000, -473.000000)" stroke-width="2" stroke="currentColor">
              <g id="Group" transform="translate(360.000000, 152.000000)">
                <polyline id="Rectangle-2-Copy-2" transform="translate(172.000000, 332.000000) scale(-1, 1) translate(-172.000000, -332.000000) " points="177 342 167 332 177 322"></polyline>
              </g>
            </g>
          </g>
        </svg>
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
        list: ['english', 'chinese', 'french'],
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
      background: #2b2c30 !important;
    }
    .popover-arrow {
      border-color: #2b2c30 !important;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";

  .button {
    border-radius: 100px;
    padding-left: 35px;
    padding-right: 35px;
    font-size:1.88rem;
    font-family: $font-family-title;
    color:rgba(51,51,51,1);
    line-height:3.75rem;
    height:3.75rem;
    border-color: #999999;
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
        color: rgba(255,255,255,0.7);
        &:hover {
          background: #0072e3;
          color: white;
        }
      }
    }
  }
</style>
