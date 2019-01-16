<template>
  <div>
    <section class="airdrop">
      <div class="hero-body part1">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <div class="slogan-wrapper">
                <h1> {{ $t('airdrop.title1' )}}</h1>
                <ul>
                  <li>{{ $t('airdrop.text1') }}</li>
                  <li>{{ $t('airdrop.text2') }}</li>
                </ul>
              </div>
              <div class="btn-group-wrapper">
                <v-popover
                  offset="16"
                  popoverClass="v-popover"
                  trigger="hover">
                  <div class="pop-btn">{{$t('airdrop.btn1')}}</div>
                  <template slot="popover">
                    <div class="wallet-app-container">
                      <div class="wallet-item">
                        <img :src="QRcode[$i18n.locale]" class="wallet-app"/>
                      </div>
                    </div>
                  </template>
                </v-popover>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="part2"></div>
    </section>
  </div>
</template>

<script type="text/babel">
  import {VPopover} from 'v-tooltip'

  export default {
    components: {
      VPopover
    },
    data: function () {
      return {
        QRcode: {
          zh: require('~/assets/images/zhongapp.png'),
          en: require('~/assets/images/waiapp.png')
        },
        rightPic: require('~/assets/images/airdrop/right.png')
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .airdrop {
    padding-top: 92px;
    .container {
      .is-info {
        display: flex;
      }
      .columns {
        margin-top: 60px;
        margin-bottom: 80px;
      }

      .slogan-wrapper {
        max-width: 590px;
        ul{
          list-style: disc outside $common-active-color;
        }
        @include touch {
          max-width: unset;
        }
        @include mobile {
          margin-top: 0;
        }
      }
    }

    .btn-group-wrapper {
      margin-top: 3.75rem;
      height: 60px;
      color: white;
      letter-spacing: 1px;
      text-align: center;
      line-height: 60px;
      display: flex;
      cursor: pointer;

      .pop-btn {
        box-shadow: 0 10px 40px 0 rgba(126, 183, 238, 0.83);
        display: inline-block;
        width: 168px;
        height: 60px;
        line-height: 60px;
        color: white;
        background: #007aff;
        @include touch {
          font-size: 12px;
        }
      }
      .other-btn {
        margin-left: 20px;
        box-sizing: border-box;
        box-shadow: none;
        border: 2px solid rgba(0, 122, 255, 1);
        color: #007AFF;
        background: transparent;
        @include touch {
          font-size: 12px;
          margin-left: 10px;
        }
      }
      @include touch {
        margin-top: 12px;
      }

      .button {
        border-radius: 100px;
        padding-left: 35px;
        padding-right: 35px;
        font-size: 1.88rem;
        font-family: $font-family-title;
        color: rgba(51, 51, 51, 1);
        line-height: 3.75rem;
        height: 3.75rem;
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
          color: #1580e3;
          border-color: #1580e3;
          svg {
            color: #1580e3;
          }
        }
      }
      .social {
        margin-top: 29px;
        @include touch {
          margin-top: 25px;
        }
        .icon,
        /deep/ svg {
          height: 30px;
          width: 30px;
          color: #c4c4c4;
          transition: color 0.1s ease-in-out;

          @include touch {
            height: 24px;
            width: 24px;
          }

          &:hover {
            color: #1580e3;
          }
        }

        /*  cover the v-popover component style  */
        /deep/ .v-popover {
          margin-left: 20px;
          @include touch {
            margin-left: 19px;
          }
        }

        a {
          margin-left: 20px;
          @include touch {
            margin-left: 19px;
          }

          &:first-child {
            margin-left: 0;
          }
        }
      }
    }

    @include touch {
      padding-top: 25px;
      padding-bottom: 25px;
      .container {
        & > h2 {
          font-size: 24px;
          line-height: 34px;
          margin-bottom: 25px;
        }
      }
    }
  }

</style>
