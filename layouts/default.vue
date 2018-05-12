<template>
  <div>
      <div class="navbar headroom" :class="`is-${routeName}-page`" v-headroom>
        <div class="container is-widescreen" :class="{ 'is-open': navbarActive }" @click="onNavClick">
          <div class="navbar-brand">
            <div @click="onLogoClick">
              <nuxt-link class="navbar-item nav-item" :to="localePath('index')">
                <logo-without-words class="logo"></logo-without-words>
              </nuxt-link>
            </div>
            <div class="navbar-burger" @click="navbarActive = !navbarActive">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="navbar-menu" :class="{ 'is-active': navbarActive }" :style="navbarEndStyle">
            <div ref="navbarEnd" class="navbar-end">
              <nuxt-link :key="item" :to="localePath(item)" class="nav-item text-hover-transition" :class="{active: routeName === item}" v-for="item in navs">
                {{$t(`nav.${item}`)}}
              </nuxt-link>
              <div class="line is-hidden-desktop"></div>
              <div class="nav-item">
                <lang-select></lang-select>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="nuxt-content">
      <nuxt></nuxt>
    </div>
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
        navs: ['index', 'technology', 'faq', 'careers']
      }
    },
    computed: {
      routeName () {
        if (!this.$route || !this.$route.name) return ''
        return this.$route.name.split('-')[0]
      },
      navbarEndStyle () {
        if (this.navbarActive) {
          return {
            height: this.$refs.navbarEnd.clientHeight + 'px',
            overflowY: 'hidden'
          }
        } else {
          return {
            height: 0
          }
        }
      }
    },
    methods: {
      onNavClick (e) {
        let {target} = e
        if (target && target.className && typeof target.className === 'string' && target.className.indexOf('nav-item') > -1) {
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

  .nuxt-content {
    margin-top: 72px;
  }

  .navbar {
    border-bottom: 1px solid transparent;
    &.headroom--not-top {
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    .navbar-brand {
      height: $navbar-height;
      .nav-item {
        height: 100%;
      }
      .logo {
        height: 41px;
        color: #1580E3;
      }
    }
    .nav-item {
      padding: 0.5rem 18px;
      color: #999999;
      font-family: $font-family-main;
      &:hover {
        color: #333333;
      }
      &.active {
        color: #333333;
      }
    }
    .navbar-menu {
      @include desktop {
        height: auto !important;
      }
    }
  }

  @include touch {
    .nuxt-content {
      margin-top: 41px;
    }
    .navbar {
      min-height: 40px;
      height: auto;
      .navbar-brand {
        min-height: 40px;
        height: 40px;
        .logo {
          height: 22px;
        }
        .navbar-burger {
          height: 40px;
          width: 49px;
          span {
            width: 19px;
            right: 50%;
            left: auto;
            margin-right: -10px;
            &:nth-child(2) {
              width: 15px;
            }
          }
        }
      }

      .nav-item {
        padding: 11px 16px;
        font-size: 14px;
      }

      .navbar-menu {
        padding: 0 32px;
        transition: all 0.5s ease-in-out;
        &:not(.is-active) {
          height: 0;
          overflow-y: hidden;
          display: block;
        }
        .navbar-end {
          padding: 0.5rem 0;
        }
        .nav-item {
          height: 48px;
          padding-left: 0;
        }
        .line {
          height: 1px;
          margin: 0.5rem 0;
          background: rgba(0,0,0,0.05);
          padding: 0;
        }
      }

      & > .container {
        min-height: 40px;
        height: auto;
      }
    }
  }
</style>
