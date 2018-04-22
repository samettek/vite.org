<template>
  <div class="page-home">
    <section id="home" class="is-info is-fullheight " v-in-viewport>
      <div class="hero-body">
          <div class="container" v-in-viewport.once>
            <div class="has-text-centered hvr-bounce-in is-size-1-desktop is-size-2-touch hvr-grow">
              <h1 class="inview2 delay-0-700 animated fadeInDown">
                <logo-word></logo-word>
              </h1>
              <h2 class="inview2 delay-0-700 animated fadeInUp">{{$t("home.contract")}}</h2>
            </div>
            <div class="hero-btn-wrapper inview1 delay-0-800 animated fadeInUp">
              <a class="button hvr-float-shadow" :href="socialUrls.whitePaper" target="_blank">
                {{$t('home.whitePaper')}}
              </a>
              <div class="social">
                <a :href="socialUrls.discord" target="_blank"><fa-icon class="icon" :icon="['fab', 'discord']" /></a>
                <a :href="socialUrls.telegramEn" target="_blank"><fa-icon class="icon" :icon="['fab', 'telegram-plane']" /></a>
                <a :href="socialUrls.twitter" target="_blank"><fa-icon class="icon" :icon="['fab', 'twitter']" /></a>
                <a :href="socialUrls.github" target="_blank"><fa-icon class="icon" :icon="['fab', 'github']" /></a>
              </div>
            </div>
          </div>
      </div>
    </section>

    <section id="feature" class="section">
      <div class="container" v-in-viewport.once>
        <div class="columns is-multiline" v-in-viewport.once>
          <v-feature></v-feature>
        </div>
      </div>
    </section>

    <!--<section id="tech" class="section">-->
      <!--<div class="container" v-in-viewport.once>-->
          <!--<h2 class="title section-title animated fadeInUp inview1">-->
            <!--{{$t('tech.title')}}-->
          <!--</h2>-->
          <!--<tech></tech>-->
      <!--</div>-->
    <!--</section>-->

    <section id="roadmap" class="section">
      <div class="container" v-in-viewport>
        <h2 class="title section-title animated fadeInUp inview1">
          {{$t('roadmap.title')}}
        </h2>
        <timeline></timeline>
      </div>
    </section>

    <section id="team" class="section">
      <div class="container" v-in-viewport>
        <h2 class="title section-title inview1 animated fadeInDown delay-0-800">
          {{$t('team.title')}}
        </h2>
        <teams></teams>
      </div>
    </section>

    <v-footer></v-footer>
  </div>
</template>

<script>
  import Timeline from '~/components/Timeline.vue'
  import Teams from '~/components/Teams.vue'
  import Footer from '~/components/Footer.vue'
  import Feature from '~/components/Feature'
  import Nav from '~/components/Nav'
  import Tech from '~/components/Tech'
  import Logo from '~/components/Logo.vue'
  import LogoWord from '~/components/LogoWord'

  import config from '~/config.js'

  // Only run on brower
  if (process.browser) {
    require('particles.js')
  }

  export default {
    components: {
      Timeline,
      Teams,
      VFooter: Footer,
      VFeature: Feature,
      VNav: Nav,
      Tech,
      Logo,
      LogoWord
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
    mounted () {
      if (process.browser) {
        window.particlesJS.load('home', '/particlesjs-config.json', function () {
          console.log('callback - particles.js config loaded')
        })
      }
    },
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
  @import "assets/vars.scss";

  .page-home {
    font-family: $font-family-main;
    .particles-js-canvas-el {
      position: absolute;
      top: 0;
    }

    .section-title {
      text-align: center;
      font-size: 2rem;
      color: #111111;
      font-family: $font-family-light;
      font-weight: normal;
    }

    #home {
      background-image: $background-image;
      color: rgba(255,255,255,0.9);
      padding-top: 0;
      padding-bottom: 0;
      font-family: $font-family-light;
      .hero-body {
        z-index: 8;
        height: 100vh;
        .container {
          text-align: center;
          margin-top: 25vh;
          z-index: 100;
          max-width: 50rem;
        }
        .hero-btn-wrapper {
          margin-top: 4rem;
          padding: 0;
          font-family: $font-family-main;
          .social {
            font-size: 3rem;
            margin-top: 1rem;
            .icon {
              color: rgba(255,255,255,0.7);
              &:hover {
                color: white;
              }
            }
          }
          .button {
            height: 3.75rem;
            font-size: 1rem;
            width: 13.44rem;
            color: rgba(45,45,45,1);
            border: none;
            line-height: 1.38rem;
            display: inline-flex;

            @include mobile {
              height: 3rem;
              font-size: 1rem;
            }

            &:before {
              background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 80%);
            }

            &:hover {
              color: rgba(255,255,255, 1);
              background: rgba(54, 130, 222, 1);
            }
            &:focus {
              border: none;
            }
          }
        }

        h1 {
          @include mobile {
            font-size: 3.2rem;
            line-height: 3.2rem * 1.5;
          }
          @include tablet {
            font-size: 3.6rem;
            line-height: 3.6rem * 1.5;
          }
          @include desktop {
            font-size: 4rem;
            line-height: 4rem * 1.5;
          }
          @include fullhd {
            font-size: 4.5rem;
            line-height: 4.5rem * 1.5;
          }
        },
        h2 {
          color: rgba(255,255,255, 0.8);
          font-size: 1.5rem;
          line-height: 2rem;
          font-weight: 200;
          @include mobile {
            font-size: 1.2rem;
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
      .section-title {
        margin-bottom: 4rem;
      }
      .sub-title {
        overflow: hidden;
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
      .section-title {
        margin-bottom: 3.69rem;
      }
    }

    #token {
      background-color: rgba(216,216,216, 0.2);
      .section-title {
        margin-bottom: 4rem;
      }
    }
  }
</style>
