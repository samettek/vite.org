<template>
  <div class="team-wrapper">
    <teams></teams>
  </div>

</template>

<script>
  import Teams from '~/components/Teams.vue';

  export default {
    components: {
      Teams
    },
    computed: {
    }
  };
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";
  .team-wrapper {
    padding-top: 92px;
  }

</style>
