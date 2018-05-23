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
