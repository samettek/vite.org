<template>
  <section class="is-border-box">
    <activity></activity>
    <dynamic></dynamic>
  </section>
</template>
<script type="text/babel">
import activity from './activity';
import dynamic from './dynamic';

export default {
  components: {
    activity,
    dynamic
  } 
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
  text-align: center;
  background: $common-bg-color;
  padding-bottom: 90px;
  @include mobile {
    height: 360px;
  }
}
</style>
