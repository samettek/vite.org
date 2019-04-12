<template>
  <section class="section">
    <div class="container">
      <h1>{{$t('medium.title')}}</h1>
    </div>
    <youtube></youtube>
    <blog></blog>
    <report></report>
  </section>
</template>

<script>
import youtube from '~/components/Medium/youtube';
import blog from '~/components/Medium/blog';
import report from '~/components/Medium/report';

export default {
  components: {
    youtube,
    blog,
    report
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
