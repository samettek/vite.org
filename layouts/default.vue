<template>
  <div>
    <headroom>
      <div class="headroom navbar" :class="`is-${routeName}-page`">
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

          <div class="navbar-menu" :class="{ 'is-active': navbarActive }">
            <div class="navbar-end">
              <nuxt-link :key="item" :to="localePath(item)" class="nav-item" :class="{active: routeName === item}" v-for="item in navs">
                {{$t(`nav.${item}`)}}
              </nuxt-link>
              <div class="nav-item">
                <lang-select></lang-select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </headroom>
    <div class="nuxt-content">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script type="text/babel">
  import { headroom } from 'vue-headroom'
  import LangSelect from '~/components/LangSelect.vue'
  import Logo from '~/components/Logo.vue'
  import LogoWithoutWords from '~/components/LogoWithoutWords.vue'

  export default {
    components: {
      LangSelect,
      Logo,
      LogoWithoutWords,
      headroom
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

  .headroom--not-top {
    border-bottom: 1px solid #C6C6C6;
  }

  .navbar {
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
      &:hover {
        color: #333333;
      }
      &.active {
        color: #333333;
      }
    }
  }

</style>
