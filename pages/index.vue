<template>
  <div>
    <section class="is-fullheight home">
      <div class="container">
        <div class="is-size-1-desktop is-size-2-touch">
          <h1>
            VITE
          </h1>
          <h2>{{$t("home.contract")}}</h2>
        </div>

        <div class="btn-group-wrapper">
          <div class="btn-wrapper">
            <a class="button" :href="$t('urlSrc.whitePaper')" target="_blank">
              {{$t('home.whitePaper')}}
              <svg width="13px" height="22px" viewBox="0 0 13 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="home——PC" transform="translate(-526.000000, -473.000000)" stroke-width="2" stroke="currentColor">
                    <g id="Group" transform="translate(360.000000, 152.000000)">
                      <polyline id="Rectangle-2-Copy-2" transform="translate(172.000000, 332.000000) scale(-1, 1) translate(-172.000000, -332.000000) " points="177 342 167 332 177 322"></polyline>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div class="social">
            <a :href="socialUrls.discord" target="_blank"><fa-icon class="icon" :icon="['fab', 'discord']" /></a>
            <a :href="$t('urlSrc.telegram')" target="_blank"><fa-icon class="icon" :icon="['fab', 'telegram-plane']" /></a>
            <a :href="socialUrls.twitter" target="_blank"><fa-icon class="icon" :icon="['fab', 'twitter']" /></a>
            <a :href="socialUrls.github" target="_blank"><fa-icon class="icon" :icon="['fab', 'github']" /></a>
          </div>
        </div>
      </div>
      <!--<home-animation></home-animation>-->
    </section>

    <v-feature></v-feature>

    <v-roadmap></v-roadmap>

    <v-teams></v-teams>

    <v-investor></v-investor>

    <v-footer></v-footer>
  </div>
</template>

<script>
  import Teams from '~/components/Teams.vue'
  import Footer from '~/components/Footer.vue'
  import Feature from '~/components/Feature'
  import Investor from '~/components/Investor'
  import Tech from '~/components/Tech'
  import Logo from '~/components/Logo.vue'
  import LogoWord from '~/components/LogoWord'
  import Roadmap from '~/components/Roadmap'
  import HomeAnimation from '~/components/HomeAnimation'

  import config from '~/config.js'

  export default {
    components: {
      VTeams: Teams,
      VFooter: Footer,
      VFeature: Feature,
      Tech,
      Logo,
      LogoWord,
      VInvestor: Investor,
      VRoadmap: Roadmap,
      HomeAnimation
    },
    head () {
      let title = this.$t('head.title')
      let description = this.$t('head.homeDesc')
      return {
        title,
        meta: [
          { hid: 'description', name: 'description', content: description },

          // Open Grapg
          { name: 'og:title', content: title, hid: 'og:title' },
          { name: 'og:description', content: description, hid: 'og:description' },
          { name: 'og:type', content: 'website', hid: 'og:type' },
          { name: 'og:url', content: 'http://doc.vite.org', hid: 'og:url' },
          // { name: 'og:image', content: 'https://i.imgur.com/PzEm5j2.png' },

          // Twitter Card
          { name: 'twitter:card', content: 'summary', hid: 'twitter:card' },
          { name: 'twitter:site', content: '@vitelabs', hid: 'twitter:site' },
          { name: 'twitter:title', content: title, hid: 'twitter:title' },
          { name: 'twitter:description', content: description, hid: 'twitter:description' },
          // { name: 'twitter:image', content: 'https://i.imgur.com/PzEm5j2.png' },
          { name: 'twitter:image:alt', content: 'Vite Logo', hid: 'twitter:image:alt' }
        ]
      }
    },
    mounted () {},
    data () {
      return {
        socialUrls: config.urls
      }
    },
    methods: {
      onNavClick () {
        this.navbarActive = false
      }
    }
  }
</script>

<style lang="scss">
  .particles-js-canvas-el {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

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

  .home {
    min-height: 100vh;
    padding-top: 25vh;
    position: relative;
    font-family: $font-family-title;
    h1 {
      font-size: 72px;
      color:rgba(51,51,51,1);
      line-height:100px;
    }
    h2 {
      font-size: 1.75rem;
      font-family: $font-family-light;
    }
    .btn-group-wrapper {
      margin-top: 3rem;
      .button {
        border-radius: 100px;
        width:230px;
        font-size:1.88rem;
        font-family: $font-family-title;
        color:rgba(51,51,51,1);
        line-height:3.75rem;
        height:3.75rem;
        border-color: #999999;
        svg {
          margin-left: 0.875rem;
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
        .icon {
          height: 36px;
          width: 36px;
          color: #C4C4C4;
          &:hover {
            color: #1580E3;
          }
        }
        a {
          margin-left: 28px;
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }


  #feature {
    padding-top: 6.25rem;
    background: white;
  }

  #tech {
    background: #fafafa;
    @include mobile {
      & > .container {
        width: 100%;
      }
    }

    h2 {
      margin-bottom: 4rem;
    }
  }

  #roadmap {
    background: lighten(#f7f7f7, 0%);
    @include mobile {
      .container {
        margin: 0;
      }
    }
    h2 {
      margin-bottom: 4rem;
    }
  }

  #team {
    .sub-title {
      font-family: $font-family-light;
      font-size: 1rem;
      color: #111111;
      text-align: center;
      line-height: 1.75rem;
      font-weight: 300;
      margin-bottom: 4.44rem;
    }
  }

  #faq {
    background: rgba(214,230,247,1);;
  }

  #token {
    background-color: rgba(216,216,216, 0.2);
  }
</style>
