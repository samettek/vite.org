<template>
  <no-ssr class="no-ssr">
    <v-popover
      offset="16"
      :disabled="!isEnabled"
      popoverClass="v-popover">
        <span class="wp-wrapper">{{$t('home.whitePaper')}}</span>
        <svg width="9px" height="12px" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="page" transform="translate(-421.000000, -962.000000)" stroke="#007AFF" stroke-width="2">
                  <g id="Group-14" transform="translate(421.000000, 962.000000)">
                      <polyline id="Shape" points="1 13 7 7 1 1"></polyline>
                  </g>
              </g>
          </g>
        </svg>
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

    <div class="btn-wrapper" slot="placeholder">
      <span class="wp-wrapper">{{$t('home.whitePaper')}}</span>
        <svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="page" transform="translate(-421.000000, -962.000000)" stroke="#007AFF" stroke-width="2">
                  <g id="Group-14" transform="translate(421.000000, 962.000000)">
                      <polyline id="Shape" points="1 13 7 7 1 1"></polyline>
                  </g>
              </g>
          </g>
        </svg>
    </div>
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
        urlList: config.urls.whitePaper,
        list: ['english', 'chinese', 'korean', 'french', 'vietnamese', 'russian', 'japan'],
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
  @import "assets/vars.scss";

  .no-ssr {
    display: inline-block;
    cursor: pointer;
  }
  .wp-wrapper {
    font-size:16px;
    font-weight:600;
    color:rgba(0,122,255,1);
    line-height:18px;
    vertical-align: baseline;
    display: inline-block;
    margin-right: 6px;
    margin-top: 10px;
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
</style>
