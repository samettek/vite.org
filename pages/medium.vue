<template>
  <section class="section">
    <div class="container">
      <h1>{{$t('medium.title')}}</h1>
    </div>
    <Medium></Medium>
    <div class="container">
      官方博客
      最新报道
    </div>
  </section>
</template>

<script>
import Medium from '~/components/Medium';

export default {
  components: {
    Medium
  },
  data: function() {
    return {
    };
  },
  methods: {}
};
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
@import "assets/vars.scss";
.section {
  padding: 0px;
  padding-top: 92px;
  
}
</style>
