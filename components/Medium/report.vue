<template>
  <div class="container">
    <sub-title :title="$t('medium.report.title')"></sub-title>
  </div>
</template>

<script type="text/babel">
import subTitle from '~/components/subTitle';

export default {
  components: {
    subTitle
  } 
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

</style>
