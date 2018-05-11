<template>
  <section class="section">
    <div class="container">
      <tech></tech>
    </div>
  </section>
</template>

<script type="text/babel">
  import Tech from '~/components/Tech'

  export default {
    components: {
      Tech
    },
    head () {
      let title = `${this.$t('nav.technology')} - ${this.$t('head.title')}`
      let description = this.$t('head.technologyDesc')
      return {
        title,
        htmlAttrs: {
          lang: this.$i18n.locale
        },
        meta: [
          { hid: 'description', name: 'description', content: description },

          // Open Grapg
          { name: 'og:title', content: title, hid: 'og:title' },
          { name: 'og:description', content: description, hid: 'og:description' },
          { name: 'og:type', content: 'website', hid: 'og:type' },
          { name: 'og:url', content: 'https://vite.org', hid: 'og:url' },
          { name: 'og:image', content: 'https://www.vite.org/logo_appstore.png' },

          // Twitter Card
          { name: 'twitter:card', content: 'summary', hid: 'twitter:card' },
          { name: 'twitter:site', content: '@vitelabs', hid: 'twitter:site' },
          { name: 'twitter:title', content: title, hid: 'twitter:title' },
          { name: 'twitter:description', content: description, hid: 'twitter:description' },
          { name: 'twitter:image', content: 'https://www.vite.org/logo_appstore.png' },
          { name: 'twitter:image:alt', content: 'Vite Logo', hid: 'twitter:image:alt' }
        ]
      }
    },
    data: function () {
      return {}
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";

  .section {
    background: #fafafa;
    @include touch {
      padding-top: (52rem/16) + 2rem;
    }
  }
</style>
