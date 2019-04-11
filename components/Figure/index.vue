<template>
  <section>
    <Teams></Teams>
    <Community></Community>
  </section>
</template>
<script type="text/babel">
import Teams from './Team/Teams';
import Community from './Community';

export default {
  components: {
    Teams,
    Community
  } 
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
}
</style>
