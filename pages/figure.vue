<template>
  <div class="figure-wrapper">
    <Figure></Figure>
  </div>

</template>

<script>
  import Figure from '~/components/Figure';

  export default {
    components: {
      Figure
    },
    computed: {
    }
  };
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";
  .figure-wrapper {
    padding-top: 92px;
  }

</style>