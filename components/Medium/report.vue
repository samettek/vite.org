<template>
  <div class="container" id="news">
    <sub-title :title="$t('medium.report.title')"></sub-title>
    <three-column></three-column>
  </div>
</template>

<script type="text/babel">
import subTitle from '~/components/subTitle';
import ThreeColumn from '~/components/ThreeColumn';

export default {
  components: {
    subTitle,
    ThreeColumn
  } 
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

</style>
