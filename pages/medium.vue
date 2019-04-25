<template>
  <section>
    <div class="container medium__title">
      <h1>{{$t('medium.title')}}</h1>
    </div>
    <youtube class="section"></youtube>
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
.medium__title {
  padding-top: 92px;
  @include touch {
    padding-left: 24px;
    padding-top: 50px;
  }
}
</style>
