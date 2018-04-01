<template>
  <div class="columns is-multiline">
    <div class="column item is-destop is-6-desktop is-12-tablet is-6-widescreen is-12-mobile" v-for="(item, index) in faqs">
      <div class="is-info">
        <h3> {{`${index + 1}. ${item.question}`}}</h3>
        <div class="answer" v-html="item.answer">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
    export default {
      data: function () {
        return {}
      },
      computed: {
        faqs () {
          let faqs = this.$t('faq.questions')
          return Array.isArray(faqs) ? faqs : []
        }
      },
      methods: {}
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars.scss";


  .is-info {
    h3 {
      font-size: 1.13rem;
      color: #111111;
      line-height: 1.75rem;
      margin-bottom: 0.56rem;
    }
    .answer {
      font-family: $font-family-light;
      font-weight: 300;
      font-size: 1.13rem;
      line-height: 1.75rem;
    }
  }
</style>
