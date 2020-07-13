<template>
  <div>
    <section class="hero home">
      <div class="hero-body">
        <div class="container is-flex topinfo">
          <div class="topinfo__left">
            <div class="is-size-1-desktop is-size-2-touch slogan-wrapper">
              <h1>
                VITE
              </h1>
              <h2>{{$t("home.slogan")}}</h2>
            </div>
            <div class="btn-group-wrapper">
              <a
                href="#activity"
                class="pop-btn"
              >{{$t('home.activity1')}}</a>
              <a
                href="#dynamic"
                class="pop-btn"
              >{{$t('home.activity2')}}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <home-section v-for="item in sectionList" :key="item.name" :name="item.name" :buttons="item.buttons"></home-section>

    <v-roadmap></v-roadmap>

    <join-mailing-list></join-mailing-list>
  </div>
</template>

<script>
import { VPopover } from 'v-tooltip';
import isMobile from 'is-mobile';
import product from '~/components/product.vue';
import New from '~/components/New/index.vue';
import Video from '~/components/Video.vue';
import Logo from '~/components/Logo.vue';
import LogoWord from '~/components/LogoWord';
import RoadMap from '~/components/RoadMap/index.vue';
import Wechat from '~/components/Wechat';
import Telegram from '~/components/Telegram';
import WhitePaper from '~/components/WhitePaper';
import JoinMailingList from '~/components/JoinMailingList';
import HomeSection from '~/components/HomeSection';

import config from '~/config.js';
import imgEn from '~/assets/images/notice/en.jpg';
import imgZh from '~/assets/images/notice/zh.jpg';

export default {
  components: {
    VPopover,
    VNew: New,
    VProduct: product,
    VVideo: Video,
    Logo,
    LogoWord,
    VRoadmap: RoadMap,
    Wechat,
    Telegram,
    JoinMailingList,
    WhitePaper,
    HomeSection,
  },
  mounted() {},
  data() {
    return {
      isMobile: isMobile(),
      syraWP: config.urls.SyraWP,
      activity: config.urls.mainnetRelease,
      showNotice: true,
      imgObj: {
        en: imgEn,
        zh: imgZh,
      },
      sectionList: [
        {
          name: 'whatIsVite',
          buttons: [
            {
              name: 'learn',
              url: {
                name: 'whatIsVite',
              },
            },
          ],
        },
        {
          name: 'product',
          buttons: [
            {
              name: 'learn',
              url: 'https://vite.net',
            },
          ],
        },
      ],
    };
  },
  methods: {
    openSyraWP() {
      window.open(this.syraWP[this.$i18n.locale]);
    },
    openLink() {
      window.open(this.activity[this.$i18n.locale]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";

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

.mobile-btn-group {
    display: flex;
    margin-top: 1.75rem;
    flex-direction: column;
    .download-btn {
      display: flex;
      box-shadow: 0 10px 40px 0 rgba(126, 183, 238, 0.83);
      height: 60px;
      width: 210px;
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

.section-title {
  text-align: center;
  font-size: 2rem;
  color: #111111;
  font-family: $font-family-light;
  font-weight: normal;
  margin-bottom: 3rem;
}

.home-notification {
  position: absolute;
  z-index: 1;
  max-width: 300px;
  right: 30px;
  top: 15px + 72px;
  background: #1580e3;
  color: white;
}

.home {
  position: relative;
  font-family: $font-family-title;
  height: 819px;
  @include touch {
    .hero-body {
      display: block;
    }
  }
  .topinfo {
    @include mobile {
      flex-direction: column;
    }
  }
  .topinfo__left {
    padding-bottom: 5.625rem;
    margin-right: 50px;
    @include mobile {
      padding-bottom: 40px;
      margin-right: 0px;
    }
  }
  .topinfo__right {
    align-self: flex-end;
    img{
      margin-bottom: 6%;
      cursor: pointer;
    }
    @include mobile {
      align-self: stretch;
    }
  }

  .slogan-wrapper {
    margin-top: 149px;
    max-width: 590px;
    h1 {
      font-weight: 600;
      font-size: 60px;
      color: #ffffff;
      font-family: PingFangSC, PingFangSC-Semibold;
    }
    h2 {
      margin-top: 50px;
      font-size: 32px;
      color: #fff;
      font-family: $font-family-light;
      @include touch {
        font-size: 1rem;
      }
    }
    @include touch {
      max-width: unset;
    }
    @include mobile {
      margin-top: 0;
    }
  }

  .wp-margin{
    margin-top: 12px;
  }
  .wp-syra{
    margin-right: 20px;
  }
  .wp-wrapper {
    font-size:16px;
    font-weight:600;
    color:rgba(0,122,255,1);
    line-height:18px;
    vertical-align: baseline;
    margin-right: 6px;
    cursor: pointer;
  }

  .btn-group-wrapper {
    margin-top: 86px;
    height: 60px;
    color: white;
    letter-spacing: 1px;
    text-align: center;
    line-height: 60px;
    display: flex;
    cursor: pointer;

    .pop-btn {
      box-shadow: none;
      display: inline-block;
      width: 168px;
      height: 54px;
      line-height: 54px;
      color: white;
      background: rgba(255,255,255,0.2);
      font-size: 16px;
      border-radius: 4px;
      font-weight: 600;
      margin-right: 40px;
      &:hover {
        background: rgba(255,255,255,0.1);
      }
      @include touch {
        width: 124px;
        height: 50px;
        font-size: 12px;
        line-height: 50px;
        margin-right: 14px;
      }
    }
    .other-btn {
      margin:0 0 0 20px;
      box-sizing: border-box;
      box-shadow:none;
      border:2px solid rgba(0,122,255,1);
      color:$common-active-color;
      background: transparent;
       @include touch {
        font-size: 12px;
        margin-left: 0;
        margin-right: 10px;
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
}
</style>
