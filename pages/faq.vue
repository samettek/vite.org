<template>
    <section class="section">
      <div class="container">
        <faq></faq>
      </div>
    </section>
</template>

<script>
  import Faq from '~/components/FAQ'

  export default {
    components: {
      Faq
    }
  }
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";

  .section {
    background: #d6e6f7;
    padding-top: $nav-height + 3rem;
    @include touch {
      padding-top: (52rem/16) + 2rem;
    }
  }

</style>
