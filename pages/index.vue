<template>
  <div>
    <section class="hero home">
      <div class="hero-body">
        <div class="container">
          <div class="is-size-1-desktop is-size-2-touch slogan-wrapper">
            <h1>
              VITE
            </h1>
            <h2>{{$t("home.slogan")}}</h2>
          </div>
          <WhitePaper class="wp-btn"></WhitePaper>
          <div class="btn-group-wrapper">
            <v-popover
              offset="16"
              popoverClass="v-popover"
              trigger="hover">
              <div class="pop-btn">{{$t('home.wallet.name')}}</div>
              <template slot="popover" >
                <div class="wallet-app-container">
                  <div class="wallet-item">
                    <img :src="QRcode[$i18n.locale]"  class="wallet-app" />
                  </div>
                </div>
              </template>
            </v-popover>
            <a
              :href="webWallet"
              target="_blank"
              class="pop-btn other-btn"
            >{{$t('home.webWallet')}}</a>
            <a
              :href="explorer"
              target="_blank"
              class="pop-btn other-btn"
            >{{$t('home.explorer')}}</a>
          </div>
        </div>
      </div>
    </section>

    <v-news></v-news>

    <v-ecology></v-ecology>

    <v-feature></v-feature>

    <v-video></v-video>

    <v-roadmap></v-roadmap>

    <v-investor></v-investor>

    <join-mailing-list></join-mailing-list>
  </div>
</template>

<script>
import News from '~/components/News.vue'
import Ecology from '~/components/Ecology'
import Feature from '~/components/feature'
import Video from '~/components/Video.vue'
import Investor from '~/components/Investor'
import Logo from '~/components/Logo.vue'
import LogoWord from '~/components/LogoWord'
import NewRoadMap from '~/components/NewRoadMap'
import Wechat from '~/components/Wechat'
import Telegram from '~/components/Telegram'
import WhitePaper from '~/components/WhitePaper'
import JoinMailingList from '~/components/JoinMailingList'
import { VPopover } from 'v-tooltip'

import config from '~/config.js'

export default {
  components: {
    VPopover,
    VNews: News,
    VEcology: Ecology,
    VFeature: Feature,
    VVideo: Video,
    Logo,
    LogoWord,
    VInvestor: Investor,
    VRoadmap: NewRoadMap,
    Wechat,
    Telegram,
    JoinMailingList,
    WhitePaper
  },
  mounted () {},
  data () {
    return {
      QRcode: {
        zh: require('~/assets/images/zhongapp.png'),
        en: require('~/assets/images/waiapp.png')
      },
      urls: config.urls,
      showNotice: true
    }
  },
  methods: {
    onNavClick () {
      this.navbarActive = false
    }
  },
  computed: {
    vitenet () {
      return config.urls.viteNet[this.$i18n.locale]
    },
    webWallet () {
      return config.urls.webWallet[this.$i18n.locale]
    },
    explorer () {
      return config.urls.explorer[this.$i18n.locale]
    }
  }
}
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
  @include touch {
    .hero-body {
      display: block;
    }
  }

  .slogan-wrapper {
    margin-top: 212px;
    max-width: 590px;
    @include touch {
      max-width: unset;
    }
    @include mobile {
      margin-top: 0;
    }
  }

  h2 {
    margin-top: 30px;
    font-size: 1.5rem;
    color: $common-text-color;
    line-height: 28px;
    font-family: $font-family-light;
    @include touch {
      font-size: 1rem;
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
        width: 100px;
        font-size: 12px;
      }
    }
    .other-btn {
      margin:2px 0 0 20px;
      box-sizing: border-box;
      box-shadow:none;
      border:2px solid rgba(0,122,255,1);
      color:$common-active-color;
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
}
</style>
