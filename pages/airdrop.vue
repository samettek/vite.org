<template>
  <div>
    <section class="airdrop">
      <div class="hero-body">
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
                  placement="bottom-center"
                  popoverClass="v-popover"
                  trigger="true">
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
    </section>
    <section class="steps">
      <div class="container">
        <h1 class="title">{{ $t('airdrop.title2' ) }}</h1>
        <div class="timeline">
          <div class="step-title"> {{ $t('airdrop.step') }} </div>
          <ul class="is-flex">
            <li>
              <div class="desc-wrapper">
                <div class="text"> {{ $t('airdrop.step1') }} </div>
                <img :src="step1Pic" class="image"/>
              </div>
            </li>
            <li>
              <div class="desc-wrapper">
                <div class="text"> {{ $t('airdrop.step2') }} </div>
                <img :src="step2Pic" class="image"/>
              </div>
            </li>
            <li>
              <div class="desc-wrapper">
                <div class="top">
                  <div class="text">{{ $t('airdrop.annual') }} <span class="nums">20%</span></div>
                  <div class="check-btn">
                    <a href=""
                       target="_blank"
                    >
                      {{ $t('airdrop.btn2') }}
                    </a>
                  </div>
                </div>
                <div class="triangle"></div>
                <div class="desc">
                  <div class="text"> {{$t('airdrop.step3f') }} <span class="nums">8000+ VITE</span> {{$t('airdrop.step3e') }}</div>
                  <img :src="step3Pic" class="image"/>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>
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
        rightPic: require('~/assets/images/airdrop/right.png'),
        step1Pic: require('~/assets/images/airdrop/step1.png'),
        step2Pic: require('~/assets/images/airdrop/step2.png'),
        step3Pic: require('~/assets/images/airdrop/step3.png')
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .wallet-app-container {
    display: flex;
    display: -webkit-flex;
    padding: 0;
    background: #ffffff;
    font-size: 14px;
    color: #5e6875;
    letter-spacing: 0;
    text-align: center;
    .wallet-app {
      width: 120px;
      height: 120px;
    }
    .wallet-item + .wallet-item{
      margin-left: 20px;
    }

  }

  .airdrop {
    height: 700px;
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
        max-width: 500px;
        ul{
          list-style: disc $common-active-color;
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
        background: $common-active-color;
        @include touch {
          font-size: 12px;
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
  .steps{
    .title{
      padding-top: 80px;
      text-align: center;
    }
    height: 700px;
    background-color: $common-bg-color;

    $dot-size: 3rem;
    $dot-gap: 0.5;
    .timeline {
      min-height: 500px;
      @include mobile {
        min-height: 280px;
      }
      .step-title{
        font: $font-family-title 24px;
        color: $common-active-color;
      }
      ul {
        padding-top: 150px;
        @include mobile {
          padding-top: 70px;
        }
        & li:first-child {
          &::after{
            background: no-repeat url("~assets/images/airdrop/1.svg");
          }
        }
        & li:nth-child(2) {
          min-width: 300px;
          &::after{
            background: no-repeat url("~assets/images/airdrop/2.svg");
          }
        }
        & li:last-child {
          border: 0;
          border-right: none;
          &::after {
            background: no-repeat url("~assets/images/airdrop/3.svg");
          }
        }
        li {
          list-style-type: none;
          position: relative;
          left: 24%;
          min-width: 300px;
          margin: 0;
          border-top: 2px solid $timelineColor;
          &::after {
            content: "";
            position: absolute;
            left: 68%;
            transform: translateX(-800%);
            width: 1.75rem;
            height: 1.75rem;
            border-radius: 50%;
            top: -($dot-size * ((1 - $dot-gap) / 2));
          }
        }
        .desc-wrapper {
          position: relative;
          font-family: $font-family-title;
          color: #171C34;
          .text{
            font-size: 14px;
          }
          .nums{
            color: $common-active-color;
          }
          .check-btn{
            padding-top: 10px;
            font-size: 12px;
          }
          .top {
            position: absolute;
            top: -42%;
            right: 79%;
            min-width: 140px;
            max-height: 82px;
            padding: 20px 8px;
            text-align: center;
            box-shadow: 0 -5px 30px 0 rgba(126, 183, 238, 0.83);
            background-color: #ffffff;
          }
          .desc {

          }
        }
      }
    }
  }

</style>
