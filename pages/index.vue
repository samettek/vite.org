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

    <v-new></v-new>

    <v-roadmap></v-roadmap>

    <!-- <join-mailing-list></join-mailing-list> -->
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
        {
          name: 'ecosystem',
          buttons: [
            {
              name: 'learn',
              url: 'https://vite.net',
            },
          ],
        },
        {
          name: 'development',
          buttons: [
            {
              name: 'join',
              url: 'https://vite.net',
            },
          ],
        },
        {
          name: 'wallet',
          buttons: [
            {
              name: 'ios',
              url: 'https://vite.net',
            },
            {
              name: 'android',
              url: 'https://vite.net',
            },
            {
              name: 'qr',
              url: 'https://vite.net',
            },
            {
              name: 'learn',
              url: 'https://vite.net',
            },
          ],
        },
        {
          name: 'vitex',
          buttons: [
            {
              name: 'toViteX',
              url: 'https://x.vite.net',
            },
            {
              name: 'getVX',
              url: 'https://vitex.net/zh/mine',
            },
            {
              name: 'learn',
              url: 'https://forum.vite.net/category/33/vitex%E4%BA%A4%E6%98%93%E6%89%80',
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
  background-image: url("~assets/images/home/top.svg");
  background-size: contain;
  background-repeat: no-repeat;

  .topinfo__left {
    padding-bottom: 5.625rem;
    margin-right: 50px;
    @include mobile {
      padding-bottom: 40px;
      margin-right: 0px;
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
      background: #3394ff;
      font-size: 16px;
      border-radius: 4px;
      font-weight: 600;
      margin-right: 40px;
      &:hover {
        background: lighten(#3394ff, 10%);
      }
      @include touch {
        width: 124px;
        height: 50px;
        font-size: 12px;
        line-height: 50px;
        margin-right: 14px;
      }
    }
    @include touch {
      margin-top: 12px;
    }
  }

  @include until($fullhd) {
    height: auto;
  }
  @include until($widescreen) {
    background-size: 120% 100%;
  }
  @include until($tablet) {
    background-size: 100%;
    margin-top: 60px;
    .hero-body {
      padding-top: 70px;
    }
    .slogan-wrapper {
      h1 {
        font-size: 20px;
        line-height: 20px;
        margin-top: 10px;
      }
      h2 {
        margin-top: 20px;
        font-size: 18px;
        color: #9acaff;
      }
    }
    .btn-group-wrapper {
      margin-top: 30px;
      .pop-btn {
        background: transparent;
        padding: 0;
        height: 18px;
        line-height: 18px;
        text-align: left;
        width: auto;
      }
    }
  }
}
</style>
