<template>
  <div
    :class="`dropdown_${theme}`"
    class="dropdown lang-btn is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="lang-dropdown-menu">
        <span>{{$t('lang')}}</span>
      </button>
    </div>
    <div
      v-if="this.$i18n.locales.length > 1"
      class="dropdown-menu"
      id="lang-dropdown-menu"
      role="menu"
    >
      <div class="dropdown-content">
        <template v-for="(item, index) in locales">
          <nuxt-link
            class="dropdown-item"
            :key="index"
            :to="switchLocalePath(item.code)"
            active-class="none"
            exact
          >{{item.name}}</nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  props: {
    theme: {
      default: 'gray',
      type: String,
    },
  },
  computed: {
    locales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
@import "~assets/subnav";
</style>
