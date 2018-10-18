<template>
  <div>
    <section class="is-fullheight hero home">
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
          </div>
        </div>
      </div>
    </section>

    <v-news></v-news>

    <v-ecology></v-ecology>

    <v-feature></v-feature>
    
    <v-video></v-video>
    
    <v-roadmap></v-roadmap>

    <!-- <v-teams></v-teams> -->

    <v-investor></v-investor>

    <join-mailing-list></join-mailing-list>
  </div>
</template>

<script>
  // import Teams from '~/components/Teams.vue'
  import News from '~/components/News.vue'
  import Ecology from '~/components/Ecology.vue'
  import Feature from '~/components/Feature.vue'
  import Video from '~/components/Video.vue'
  import Investor from '~/components/Investor'
  import Logo from '~/components/Logo.vue'
  import LogoWord from '~/components/LogoWord'
  import NewRoadMap from '~/components/NewRoadMap'
  import Wechat from '~/components/Wechat'
  import Telegram from '~/components/Telegram'
  import WhitePaper from '~/components/WhitePaper'
  import JoinMailingList from '~/components/JoinMailingList'

  import config from '~/config.js'

  export default {
    components: {
      VNews: News,
      // VTeams: Teams,
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
        urls: config.urls,
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
      @include touch {
        margin-top: 12px;
      }

      & > .v-popover {
        display: inline-block;
      }

      .btn-wrapper {
        display: inline-block;
        margin-left: 1rem;
        &.blue {
          .button {
            color: $light-blue;
            border-color: $light-blue;
            background: transparent;
          }
        }
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
