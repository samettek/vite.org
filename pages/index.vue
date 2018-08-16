<template>
  <div>
    <section class="is-fullheight hero home">
      <!--<div v-if="$i18n.locale === 'en' && showNotice" class="home-notification notification">-->
        <!--<button class="delete" @click="showNotice = false"></button>-->
        <!--Our tokens are now listed on <a href="https://www.okex.com/spot/trade#product=vite_okb" target="_blank">OKEx</a>!.-->
      <!--</div>-->
      <div class="hero-body">
        <div class="container">
          <div class="is-size-1-desktop is-size-2-touch slogan-wrapper">
            <h1>
              VITE
            </h1>
            <h2>{{$t("home.slogan")}}</h2>
          </div>

          <div class="btn-group-wrapper">
            <white-paper></white-paper>
            <div class="social">
              <a :href="socialUrls.twitter" target="_blank"><fa-icon class="icon" :icon="['fab', 'twitter']" /></a>
              <telegram></telegram>
              <a :href="socialUrls.github" target="_blank"><fa-icon class="icon" :icon="['fab', 'github']" /></a>
              <a :href="socialUrls.discord" target="_blank"><fa-icon class="icon" :icon="['fab', 'discord']" /></a>
              <a :href="socialUrls.reddit" target="_blank"><fa-icon class="icon" :icon="['fab', 'reddit']" /></a>
              <a :href="socialUrls.youtube" target="_blank"><fa-icon class="icon" :icon="['fab', 'youtube']" /></a>
              <wechat></wechat>
            </div>
          </div>
        </div>
      </div>
      <icosahedron></icosahedron>
    </section>
    <v-feature></v-feature>

    <v-roadmap></v-roadmap>

    <v-teams></v-teams>

    <v-investor></v-investor>

    <join-mailing-list></join-mailing-list>
  </div>
</template>

<script>
  import Teams from '~/components/Teams.vue'
  import Icosahedron from '~/components/Icosahedron/index.vue'
  import Feature from '~/components/Feature'
  import Investor from '~/components/Investor'
  import Logo from '~/components/Logo.vue'
  import LogoWord from '~/components/LogoWord'
  import Roadmap from '~/components/Roadmap'
  import Wechat from '~/components/Wechat'
  import Telegram from '~/components/Telegram'
  import WhitePaper from '~/components/WhitePaper'
  import JoinMailingList from '~/components/JoinMailingList'

  import config from '~/config.js'

  export default {
    components: {
      VTeams: Teams,
      VFeature: Feature,
      Logo,
      LogoWord,
      VInvestor: Investor,
      Icosahedron,
      VRoadmap: Roadmap,
      Wechat,
      Telegram,
      JoinMailingList,
      WhitePaper
    },
    mounted () {},
    data () {
      return {
        socialUrls: config.urls,
        showNotice: true
      }
    },
    methods: {
      onNavClick () {
        this.navbarActive = false
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "assets/vars.scss";

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
    background: #1580E3;
    color: white;
  }

  .home {
    position: relative;
    font-family: $font-family-title;

    background-image: url("~assets/images/detail_bg.svg");
    background-size: cover;
    padding-top: 72px;

    @include touch {
      .hero-body {
        display: block;
      }
    }

    .slogan-wrapper {
      max-width: 590px;
      @include touch {
        max-width: unset;
      }
    }

    h1 {
      font-size: 72px;
      color:rgba(51,51,51,1);
      line-height:100px;
      @include mobile {
        font-size: 60px;
        line-height: 84px;
      }
    }
    h2 {
      font-size: 1.75rem;
      font-family: $font-family-light;
      @include touch {
        font-size: 18px;
      }
    }
    .btn-group-wrapper {
      margin-top: 3rem;
      @include touch {
        margin-top: 12px;
      }

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
      .social {
        margin-top: 29px;
        @include touch {
          margin-top: 25px;
        }
        .icon, /deep/ svg {
          height: 30px;
          width: 30px;
          color: #C4C4C4;
          transition: color 0.1s ease-in-out;

          @include touch {
            height: 24px;
            width: 24px;
          }

          &:hover {
            color: #1580E3;
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
