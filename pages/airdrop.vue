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
                  <li
                    class="text"
                    v-html="$t('airdrop.text1')"
                  ></li>
                  <!--<li class="text">{{ $t('airdrop.text2') }}</li>-->
                </ul>
              </div>
              <div
                class="btn-group-wrapper"
                v-if="!isMobile">
                <v-popover
                  offset="16"
                  placement="bottom-center"
                  popoverClass="v-popover"
                  trigger="hover">
                  <div class="pop-btn">{{$t('airdrop.btnIos')}}</div>
                  <template slot="popover">
                    <div class="wallet-app-container">
                      <div class="wallet-item">
                        <img
                          :src="QRcode[$i18n.locale]"
                          class="wallet-app"
                        />
                      </div>
                    </div>
                  </template>
                </v-popover>
                <v-popover
                  style="margin-left: 30px;"
                  offset="16"
                  placement="bottom-center"
                  popoverClass="v-popover"
                  trigger="hover">
                  <div class="pop-btn pop-btn-android">{{$t('airdrop.btnAndroid')}}</div>
                  <template slot="popover">
                    <div class="wallet-app-container">
                      <div class="wallet-item">
                        <img
                          :src="QRAndroidcode[$i18n.locale]"
                          class="wallet-app"
                        />
                      </div>
                    </div>
                  </template>
                </v-popover>
              </div>
              <div
                v-else
                class="mobile-btn-group">
                <a
                  class="download-btn"
                  href='https://itunes.apple.com/us/app/vite-official-hd-wallet/id1437629486?mt=8'>
                    {{$t('airdrop.btnIos')}}
                </a>
                <a
                  class="download-btn"
                  download="vite.apk"
                  href='https://play.google.com/store/apps/details?id=net.vite.wallet'>
                  {{$t('airdrop.btnAndroid')}}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="steps">
      <div class="container">
        <h1 class="title">{{ $t('airdrop.title2' ) }}</h1>
        <div class="timeline">
          <div class="step-title"> {{ $t('airdrop.step') }}</div>
          <ul class="is-flex-desktop">
            <li>
              <div class="desc-wrapper">
                <div class="text"> {{ $t('airdrop.step1') }}</div>
                <img
                  :src="step1Pic"
                  class="image"
                />
              </div>
            </li>
            <li>
              <div class="desc-wrapper">
                <div class="text"> {{ $t('airdrop.step2') }}</div>
                <img
                  :src="step2Pic"
                  class="image"
                />
              </div>
            </li>
            <li>
              <div class="desc-wrapper">
                <div class="top">
                  <div class="text __text-popover">{{ $t('airdrop.annual') }} <span class="nums">20%</span></div>
                  <div
                    class="check-btn"
                    @click="openRewardPage"
                  >
                    <div class="link">
                      {{ $t('airdrop.btn2') }}
                    </div>
                  </div>
                </div>
                <div class="desc">
                  <div class="text"> {{$t('airdrop.step3f') }} <span class="nums">8000+ VITE</span>
                    {{$t('airdrop.step3e') }}
                  </div>
                  <img
                    :src="step3Pic"
                    class="image"
                  />
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script type="text/babel">
import { VPopover } from 'v-tooltip';
import isMobile from 'is-mobile';

export default {
  components: {
    VPopover,
  },
  data() {
    return {
      isMobile: isMobile(),
      QRcode: {
        zh: require('~/assets/images/zhongapp.png'),
        en: require('~/assets/images/waiapp.png'),
      },
      QRAndroidcode: {
        zh: require('~/assets/images/airdrop/android.png'),
        en: require('~/assets/images/airdrop/android.png'),
      },
      rightPic: require('~/assets/images/airdrop/right.png'),
      step1Pic: require('~/assets/images/airdrop/step1.png'),
      step2Pic: require('~/assets/images/airdrop/step2.png'),
      step3Pic: require('~/assets/images/airdrop/step3.png'),
    };
  },
  methods: {
    openRewardPage() {
      window.open(
        this.$i18n.locale === 'zh'
          ? 'https://reward.vite.net/?language=zh'
          : 'https://reward.vite.net',
      );
    },
  },
};
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
  .wallet-item + .wallet-item {
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
    .is-half{
      margin: 8% 20% 5% 2%;
    }
    .slogan-wrapper {
      max-width: 500px;
      h1{
        font-size: 40px;
      }
      ul {
        margin-left: 3%;
        padding-top: 20px;
        li {
          &::before {
            content: " • ";
            margin-left: -1rem;
            color: $common-active-color;
          }
        }
        .text {
          font-size: 20px;
          color: #9b9b9b;
        }
      }
      @include touch {
        max-width: unset;
      }
      @include mobile {
        margin-top: 0;
      }
    }
  }
  .mobile-btn-group {
    display: flex;
    margin-top: 3.75rem;
    flex-direction: column;
    .download-btn {
      display: flex;
      box-shadow: 0 10px 40px 0 rgba(126, 183, 238, 0.83);
      height: 60px;
      width: 220px;
      line-height: 60px;
      color: white;
      background: $common-active-color;
      cursor: pointer;
      justify-content: center;
      &:first-child {
        margin-bottom: 20px;
      }
      @include touch {
        font-size: 12px;
      }
    }
  }
  .btn-group-wrapper {
    margin-top: 6%;
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
      width: 140px;
      height: 60px;
      line-height: 60px;
      color: white;
      background: $common-active-color;
      @include touch {
        font-size: 12px;
      }
    }
    .pop-btn-android {
      width: 140px;
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

.steps {
  .title {
    padding-top: 80px;
    text-align: center;
  }
  height: 700px;
  background-color: $common-bg-color;
  @include mobile {
    height: auto;
  }
  $dot-size: 3.5rem;
  $dot-gap: 0.5;
  .timeline {
    min-height: 500px;
    @include mobile {
      min-height: unset;
      text-align: center;
    }
    .step-title {
      text-align: center;
      padding-bottom: 30px;
      font-family: $font-family-title;
      font-size: 24px;
      color: $common-active-color;
      @include mobile {
        padding: 0 15px;
        font-size: 18px;
      }
    }
    ul {
      padding-top: 150px;
      @include mobile {
        display: block;
        padding-top: 10px;
      }
      & li:first-child {
        &::after {
          background: no-repeat url("~assets/images/airdrop/1.svg") 2px 2px;
        }
      }
      & li:nth-child(2) {
        min-width: 300px;
        &::after {
          background: no-repeat url("~assets/images/airdrop/2.svg") 2px 2px;
        }
      }
      & li:last-child {
        border: 0;
        border-right: none;
        &::after {
          background: no-repeat url("~assets/images/airdrop/3.svg") 2px 2px;
        }
      }
      li {
        list-style-type: none;
        position: relative;
        left: 20%;
        min-width: 300px;
        margin: 0;
        border-top: 2px solid $timelineColor;
        &::after {
          content: "";
          position: absolute;
          left: 70%;
          transform: translateX(-800%);
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 50%;
          top: -($dot-size * ((1 - $dot-gap) / 2));
          @include mobile {
            top: 0;
          }
        }
        @include mobile {
          border-top: 0;
          margin-top: 30px;
          &:last-child {
            margin-top: 140px;
          }
          &::after {
            top: 10px;
            left: 200px;
          }
        }
      }
      .desc-wrapper {
        position: relative;
        top: 10%;
        left: -20%;
        margin-right: 30px;
        font-family: $font-family-title;
        color: #171c34;
        @include mobile {
          display: block;
          position: static;
          padding-top: 10px;
        }
        .image {
          margin-left: -30px;
          &:first-child {
          }
          @include mobile {
            margin: 0;
          }
        }
        .text {
          max-width: 160px;
          min-height: 64px;
          padding: 0 10px;
          font-size: 14px;
          @include mobile {
            min-height: unset;
            max-width: 200px;
            margin: 0;
            padding-bottom: 10px;
          }
        }
        .nums {
          font-size: 16px;
          color: $common-active-color;
        }
        .check-btn {
          font-size: 12px;
        }
        .link {
          font-size: 12px;
          color: $common-active-color;
          cursor: pointer;
        }
        .top {
          position: absolute;
          top: -57%;
          right: 41%;
          min-width: 200px;
          max-height: 100px;
          padding: 20px 8px;
          text-align: center;
          box-shadow: 0 -5px 30px 0 rgba(126, 183, 238, 0.83);
          background-color: #ffffff;
          .__text-popover {
            margin: 0;
            padding: 0;
            max-width: unset;
            min-height: 50px;
          }
          &::after {
            content: " ";
            display: inline-block;
            border: 6px solid transparent;
            border-top: 6px solid #ffffff;
            position: absolute;
            bottom: -12px;
            left: 50%;
            margin-left: -6px;
          }
          @include mobile {
            top: -105px;
            left: -4px;
            max-width: 200px;
            &::after {
              border: 0;
            }
          }
        }
      }
    }
  }
}
</style>
