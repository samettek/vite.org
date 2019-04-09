<template>
  <div class="dropdown lang-btn is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="lang-dropdown-menu">
        <span>{{$t('lang')}}</span>
      </button>
    </div>
    <div v-if="this.$i18n.locales.length > 1" class="dropdown-menu" id="lang-dropdown-menu" role="menu">
      <div class="dropdown-content">
        <template v-for="(item, index) in locales">
          <nuxt-link class="dropdown-item"
                     :key="index"
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
        return this.$i18n.locales;
      }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .lang-btn {
    .dropdown-trigger {
      button {
        color: $common-text-color;
        background: transparent;
        padding: 0 1rem 0 0;
        border-radius: 0.35rem;
        height: (40rem/16);
        border: transparent;
        font-family: $font-family-light;
        &:focus {
          border: none;
          box-shadow: none;
        }
        &:hover {
          color: $lang-select-color;
        }
        &::after {
          border: 2px solid $common-text-color;
          margin-top: -.375em;
          right: -0.2rem;
          border-radius: 2px;
          border-right: 0;
          border-top: 0;
          content: " ";
          display: block;
          height: .625em;
          pointer-events: none;
          position: absolute;
          top: 50%;
          transform: rotate(-45deg);
          transform-origin: center;
          width: .625em;
        }
      }
    }
    .dropdown-menu {
      .dropdown-content {
        .dropdown-item {
          color: $common-text-color;
          &:hover {
            color: $lang-select-color;
          }
        }
      }
    }
  }
</style>
