<template>
  <section class="section">
    <div class="container">
      <Elector></Elector>
    </div>
  </section>
</template>

<script type="text/babel">
  import Elector from '~/components/Elector'

  export default {
    components: {
      Elector
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
    @include touch {
      padding-top: (52rem/16) + 2rem;
    }
  }
</style>
