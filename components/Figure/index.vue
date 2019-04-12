<template>
  <section>
    <Teams></Teams>
    <Community></Community>
    <Investor></Investor>
  </section>
</template>
<script type="text/babel">
import Teams from './Team/Teams';
import Community from './Community';
import Investor from '~/components/Investor';

export default {
  components: {
    Teams,
    Community,
    Investor
  } 
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
