<template>
  <div class="dropdown lang-btn is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="lang-dropdown-menu">
        <span>{{$t('lang')}}</span>
      </button>
    </div>
    <div v-if="this.$i18n.locales.length > 1" class="dropdown-menu" id="lang-dropdown-menu" role="menu">
      <div class="dropdown-content">
        <template v-for="item in locales">
          <nuxt-link class="dropdown-item"
                     v-if="item.code !== $i18n.locale"
                     :to="switchLocalePath(item.code)"
                     active-class="none"
                     exact>
            {{item.name}}
          </nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    computed: {
      locales: function () {
        return this.$i18n.locales
      }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .lang-btn {
    .dropdown-trigger {
      button {
        color: white;
        background: transparent;
        padding-left: 26px;
        padding-right: 26px;
        border-radius: 0.35rem;
        height: 40px;
      }
    }
    .dropdown-menu {
      .dropdown-content {
        .dropdown-item {
          color: rgba(0,0,0,0.8);
          &:hover {
            color: rgba(0,0,0,0.9)
          }
        }
      }
    }
  }
</style>
