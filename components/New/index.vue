<template>
  <section>
    <div class="container">
      <activity></activity>
      <dynamic></dynamic>
    </div>
  </section>
</template>
<script type="text/babel">
import activity from './activity';
import dynamic from './dynamic';

export default {
  components: {
    activity,
    dynamic,
  },
  data() {
    return {
    };
  },

};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
  text-align: center;
  background: $common-bg-color;
  padding-bottom: 90px;
}
</style>
