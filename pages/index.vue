<template>
  <div>
    <section class="hero home">
      <div class="hero-body container">
          <div class="topinfo">
            <div class="slogan-wrapper">
              <h1>
                VITE
              </h1>
              <h2>{{$t("home.slogan")}}</h2>
            </div>
            <div class="btn-group-wrapper">
              <WhitePaper class="wp-btn"></WhitePaper>
              <a
                href="https://docs.vite.org/go-vite/bridge/ViteBridge.html"
                target="_blank"
                class="pop-btn"
              >{{$t('home.bridgeWhitepaper')}}</a>
            </div>
          </div>
        </div>
    </section>

    <home-section key="whatIsVite" name="whatIsVite" :buttons="[
            {
              name: 'learn',
              url: {
                name: 'whatIsVite',
              },
            },
          ]" :center="false"></home-section>

    <section class="feature-section">
      <div class="container">
        <h1 class="section-header">Features</h1>
      </div>
      <div class="container">
        <div class="feature-item">
          <div class="icon">
            <img src="~assets/images/home/trustlessness.png" alt="">
          </div>
          <div class="feature-content">
            <h3>{{$t('home.features.0.title')}}</h3>
            <div v-html="$t('home.features.0.content')"></div>
          </div>
        </div>
        <div class="feature-item">
          <div class="icon">
            <img src="~assets/images/home/universality.png" alt="">
          </div>
          <div class="feature-content">
            <h3>{{$t('home.features.1.title')}}</h3>
            <div v-html="$t('home.features.1.content')"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="bridge-section">
      <div class="container">
        <h1>{{$t('home.sections.bridge.title')}}</h1>
        <div class="bridge-content">
          <div class="bridge-item-wrapper" v-for="item in $t('home.sections.bridge.useCase')" :key="item.title">
            <div class="bridge-item">
              <h3>{{item.title}}</h3>
              <div>{{item.content}}</div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <home-section v-for="item in sectionList" :key="item.name" :name="item.name" :buttons="item.buttons" :center="item.center"></home-section>

    <v-new></v-new>

    <v-roadmap></v-roadmap>

    <!-- <join-mailing-list></join-mailing-list> -->
  </div>
</template>

<script>
import { VPopover } from 'v-tooltip';
import isMobile from 'is-mobile';
import New from '~/components/New/index.vue';
import WhitePaper from '~/components/WhitePaper';
import Video from '~/components/Video.vue';
import Logo from '~/components/Logo.vue';
import LogoWord from '~/components/LogoWord';
import RoadMap from '~/components/RoadMap/index.vue';
import Wechat from '~/components/Wechat';
import Telegram from '~/components/Telegram';
import JoinMailingList from '~/components/JoinMailingList';
import HomeSection from '~/components/HomeSection';
import Countdown from '~/components/Countdown';

import config from '~/config.js';
import imgEn from '~/assets/images/notice/en.jpg';
import imgZh from '~/assets/images/notice/zh.jpg';

export default {
  components: {
    VPopover,
    VNew: New,
    VVideo: Video,
    Logo,
    LogoWord,
    VRoadmap: RoadMap,
    Wechat,
    Telegram,
    JoinMailingList,
    WhitePaper,
    HomeSection,
    Countdown,
  },
  mounted() {},
  data() {
    return {
      isMobile: isMobile(),
      syraWP: config.urls.syraWP,
      activity: config.urls.mainnetRelease,
      showNotice: true,
      imgObj: {
        en: imgEn,
        zh: imgZh,
      },
    };
  },
  computed: {
    sectionList() {
      return [
        // {
        //   name: 'product',
        //   buttons: [
        //     {
        //       name: 'learn',
        //       url: this.$link('viteNet'),
        //     },
        //   ],
        //   center: true,
        // },
        // {
        //   name: 'ecosystem',
        //   buttons: [
        //     {
        //       name: 'learn',
        //       url: {
        //         name: 'ecosystem',
        //       },
        //     },
        //   ],
        //   center: true,
        // },
        {
          name: 'development',
          buttons: [
            {
              name: 'join',
              url: {
                name: 'development',
              },
            },
          ],
          center: true,
        },
        {
          name: 'wallet',
          buttons: [
            {
              name: 'ios',
              url: this.$link('viteApp.ios'),
            },
            {
              name: 'android',
              url: this.$link('viteApp.android'),
            },
            {
              name: 'qr',
              url: this.$link('app'),
            },
            {
              name: 'learn',
              url: this.$link('forumContent.app'),
            },
          ],
        },
        {
          name: 'vitex',
          buttons: [
            {
              name: 'toViteX',
              url: this.$link('webWallet'),
            },
            {
              name: 'getVX',
              url: this.$link('vitexMine'),
            },
            {
              name: 'learn',
              url: this.$link('docs.vitex'),
            },
          ],
          center: true,
        },
      ];
    },
  },
  methods: {
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
  background-color: #007AFF;
  .container {
    background-image: url("~assets/images/home/new-bg.png");
    background-size: cover;
    margin-top: 40px;
  }

  .topinfo {
    text-align: center;
    padding-bottom: 5.625rem;
    @include mobile {
      padding-bottom: 40px;
      margin-right: 0px;
    }
  }

  .slogan-wrapper {
    margin-top: 149px;
    h1 {
      @include title();
      font-weight: 500;
      font-size: 80px;
      color: #ffffff;
      @include touch {
        font-size: 28px;
      }
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
  }

  .btn-group-wrapper {
    margin-top: 50px;
    color: white;
    letter-spacing: 1px;
    text-align: center;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    justify-content: center;

    .pop-btn {
      box-shadow: none;
      display: inline-block;
      min-width: 140px;
      padding: 0 17px;
      height: 54px;
      line-height: 54px;
      color: white;
      background: transparent;
      border: 1px solid #ffffff;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 600;
      margin-right: 40px;
      &:hover {
        background: rgba(0,0,0,0.05);
      }
      @include touch {
        width: 124px;
        height: 50px;
        font-size: 12px;
        line-height: 50px;
        margin-right: 14px;
      }
      @include until($desktop) {
        border: none;
      }
    }

    .wp-btn {
      /deep/ .trigger {
        span {
          background: white;
          color: #007AFF;
          padding-left: 35px;
          padding-right: 35px;
          @include until($desktop) {
            background: none;
            color: white;
          }
        }
      }
    }
  }

  @include until($fullhd) {
    height: auto;
  }
  @include until($widescreen) {
    background-size: 120% 100%;
    background-size: cover;
  }
  @include until($desktop) {
    background-size: cover;
    margin-top: 60px;
    padding-bottom: 0;
    background-position: bottom;
    .hero-body {
      padding-top: 70px;
      padding-bottom: 0;
    }
    .slogan-wrapper {
      margin-top: 30px;
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
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 12px;
      .pop-btn {
        background: transparent;
        padding: 0;
        height: 18px;
        line-height: 18px;
        font-size: 14px;
        text-align: left;
        width: auto;
        min-width: unset;
        margin-top: 10px;
        @include more-icon();
      }
    }
  }
  @include until($tablet) {
    background-size: cover;
    background-position: bottom;
    .hero-body {
      padding-top: 70px;
    }
    .slogan-wrapper {
      margin-top: 0px;
      h1 {
        font-size: 30px;
        line-height: 28px;
        margin-top: 10px;
      }
      h2 {
        margin-top: 10px;
        font-size: 14px;
        color: #9acaff;
      }
    }
  }

  @include until(615px) {
    background-image: url("~assets/images/home/top-mobile.png");
    background-size: 120% 100%;
  }
  @include until(391px) {
    background-size: 130% 100%;
    background-position: top;
    .hero-body {
      padding-bottom: 50px;
    }
  }
}

.feature-section {
  background: #F5FAFF;
  padding: 100px 0;
  margin-top: 100px;

  .section-header {
    text-align: center;
    display: block;
    font-size: 44px;
    @include title();
    color: #171c34;
    line-height: 48px;
    width: 100%;
    margin-bottom: 60px;
  }
  .feature-item {
    flex: 1;
    flex-direction: column;
    align-items: center;
    display: flex;
    .icon {
      width: 180px;
      height: 180px;
    }
  }
  .feature-content {
    margin-top: 80px;
    width: 100%;
    text-align: center;
    h3 {
      margin-bottom: 38px;
      font-size: 34px;
      font-weight: 400;
      color: #171c34;
      line-height: 38px;
      font-family: $font-family-title;
    }
    & > div {
      font-size: 24px;
      font-weight: 400;
      color: #000000;
      line-height: 34px;
    }
  }
  & > .container {
    display: flex;
    flex-direction: row;
  }

  @include until($tablet) {
    padding: 60px 0;
    .section-header {
      margin-bottom: 30px;
    }
    .feature-content {
      margin-top: 30px;
      h3 {
        font-size: 22px;
      }
      & > div {
        font-size: 20px;
      }
    }
    .feature-item {
      .icon {
        width: 140px;
        height: 140px;
      }
      margin-bottom: 60px;
    }
    & > .container {
      display: flex;
      flex-direction: column;
    }
  }
}

.bridge-section {
  padding-top: 100px;
  padding-bottom: 100px;
  h1 {
    text-align: center;
    display: block;
    font-size: 44px;
    @include title();
    color: #171c34;
    line-height: 48px;
    width: 100%;
    margin-bottom: 100px;
  }
  .bridge-content {
    display: flex;
    flex-direction: row;
    margin: 0 -15px;
    .bridge-item-wrapper {
      padding: 15px;
      flex: 1;
    }
    .bridge-item {
      height: 480px;
      border: 1px solid #000000;
      padding: 90px 24px 24px 24px;
      h3 {
        font-size: 28px;
        font-family: $font-family-title;
        font-weight: 600;
        text-align: left;
        color: #000000;
        line-height: 50px;
        margin-bottom: 50px;
      }
      & > div {
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        color: #000000;
        line-height: 30px;
      }
    }
  }
  @include until($desktop) {
    padding-top: 60px;
    padding-bottom: 60px;
    h1 {
      margin-bottom: 30px;
    }
  }
  @include until($tablet) {
    padding-left: 20px;
    padding-right: 20px;
    .bridge-content {
      flex-direction: column;
      .bridge-item {
        padding: 30px 15px;
        height: auto;
        h3 {
          font-size: 22px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
