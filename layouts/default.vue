<template>
  <div>
    <div id="home-nav" class="hero-head headroom" :class="`is-${routeName}-page`" v-headroom>
      <scrollactive class="navbar" :modify-url="true" :offset="0">
        <div class="container is-widescreen" :class="{ 'is-open': navbarActive }" @click="onNavClick">
          <div class="navbar-brand">
            <div @click="onLogoClick">
              <a v-if="isIndexPage" class="nav-item navbar-item scrollactive-item" href="#home-nav">
                <logo-without-words class="logo"></logo-without-words>
              </a>
              <nuxt-link class="navbar-item nav-item" :to="localePath('index')" v-else>
                <logo-without-words class="logo"></logo-without-words>
              </nuxt-link>
            </div>
            <div class="navbar-burger" @click="navbarActive = !navbarActive">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="navbar-menu" :class="{ 'is-active': navbarActive }">
            <div class="navbar-end">
              <template v-if="isIndexPage">
                <a :key="item" :href="`#${item}`" class="nav-item scrollactive-item" v-for="item in navs">
                  {{$t(`nav.${item}`)}}
                </a>
              </template>

              <template v-else>
                <nuxt-link :key="item" :to="{path: localePath('index'), hash: item}" class="nav-item" v-for="item in navs">
                  {{$t(`nav.${item}`)}}
                </nuxt-link>
              </template>

              <nuxt-link :key="item" v-for="item in otherNavs" :to="localePath(item)" class="nav-item">
                {{$t(`nav.${item}`)}}
              </nuxt-link>

              <div class="nav-item">
                <lang-select></lang-select>
              </div>
            </div>
          </div>
        </div>
      </scrollactive>
    </div>
    <nuxt></nuxt>
  </div>
</template>

<script type="text/babel">
  import LangSelect from '~/components/LangSelect.vue'
  import Logo from '~/components/Logo.vue'
  import LogoWithoutWords from '~/components/LogoWithoutWords.vue'

  export default {
    components: {
      LangSelect,
      Logo,
      LogoWithoutWords
    },
    data: function () {
      return {
        navbarActive: false,
        navs: ['feature', 'roadmap', 'team'],
        otherNavs: []
      }
    },
    computed: {
      isIndexPage () {
        return this.$route.name === `index-${this.$i18n.locale}`
      },
      routeName () {
        return this.$route.name.split('-')[0]
      }
    },
    methods: {
      onNavClick (e) {
        let {target} = e
        if (target.className && typeof target.className === 'string' && target.className.indexOf('nav-item') > -1) {
          this.navbarActive = false
        }
      },
      onLogoClick () {
        this.navbarActive = false
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";

  $nav-item-size: 1rem;
  $nav-height: (130rem/16);
  $nav-height-small: (52rem/16);
  $font-family-bold: HelveticaNeue-Bold,HelveticaNeue;

  .nuxt-link-exact-active {
    color: rgba(255,255,255,1);
    background: rgba(255,255,255, 0.05);
  }

  #home-nav {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 2343;
    transition: transform 0.4s ease;
    .navbar {
      height: $nav-height;
      @include touch {
        height: $nav-height-small;
      }
    }

    .navbar-burger {
      color: white;
    }

    .navbar-brand {
      .nav-item {
        height: 100%;
      }
    }

    &.is-faq-page, &.is-technology-page {
      &.headroom.headroom--pinned.headroom--not-top {
        background: none;
        & > nav.navbar {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
      background: $background-image;
    }

    &.is-careers-page {
      background: transparent;
    }

    &.headroom--top {
      height: $nav-height;
      .navbar {
        height: $nav-height;
      }
      @include touch {
        height: (52rem/16);
        .navbar {
          height: (52rem/16);
        }
      }

      .navbar-brand {
        .navbar-item {
          .logo {
            height: 52px;
          }
        }
      }
    }
    &.headroom--not-top {
      .navbar .navbar-brand {
        .navbar-item {
          .logo {
            height: 3.25rem - 1rem;
          }
        }
      }
      .home-navbar {
        .nav-item {
          font-size: 1rem;
        }
      }
    }

    &.headroom--top {
      .navbar {
        background: transparent;
      }
    }

    &.headroom--not-top{
      height: $nav-height-small;
      .navbar {
        height: $nav-height-small;
      }
      &.headroom--pinned, &:not(.headroom--unpinned):not(.headroom--pinned){
        .navbar {
          background-color: rgba(0,0,0,0.5);
        }
      }
      &.headroom--unpinned {
        .navbar {
          background: transparent;
        }
      }
    }

    .navbar {
      background-color: transparent;
      font-size: $nav-item-size;
      & > .container {
        &.is-open {
          background: $background-image;
          .navbar-brand {
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .navbar-menu {
            background: $background-image;
          }
          .nav-item {
            color: rgba(255,255,255,0.7);
          }
        }
      }

      .navbar-brand {
        .navbar-item {
          &.is-active {
            background: transparent;
          }
          .logo {
            height: 3.25rem - 1rem;
            width: auto;
            color: rgba(255,255,255,1);
            transition: color 0.5s;
            &:hover {
              color: $light-blue;
            }

            @include desktop {
              height: (52rem/16);
            }
          }
          &:hover {
            background: transparent;
          }
        }
      }

      .nav-item {
        font-size: $nav-item-size;
        padding-left: 2rem;
        padding-right: 2rem;
        color: rgba(255,255,255,0.8);
        &:last-child {
          &:hover {
            background: transparent;
          }
        }
        &:hover {
          color: rgba(255,255,255,1);
          background: rgba(255,255,255, 0.05);
        }

        &.is-active {
          color: white;
          background: rgba(255,255,255, 0.05);
        }

        &.lang-btn {
          .dropdown-trigger {
            height: 40px;
            button {
              height: 40px;
            }
          }
        }
      }
    }
  }

  .headroom.headroom--pinned {
    transform: translateY(0);
    &.headroom--top {
      transform: none;
      background-color: transparent;
    }
  }
  .headroom.headroom--unpinned {
    transform: translateY(-100%);
  }
  .headroom.headroom--unpinned > nav.navbar,
  .headroom.headroom--top > nav.navbar {
    background-color: transparent;
  }
  .headroom.headroom--pinned.headroom--not-top>nav.navbar {
    background: $background-image;
  }
</style>
