<template>
  <section>
    <h1 class="roadmap-title">{{ $t('roadmap.title')}}</h1>

    <div class="container is-flex roadmap__timeline">
      <timeline></timeline>
      <timeline></timeline>
      <timeline></timeline>
    </div>
  </section>
</template>

<script type="text/babel">
import timeline from './timeline';

export default {
  components: {
    timeline
  },
  data: function () {
    return {
      finished: 8
    };
  },
  
  watch: {
  },
  methods: {
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
  height: 700px;
  @include mobile {
    height: 360px;
  }
  .roadmap-title {
    text-align: center;
    padding-top: 109px;
    @include mobile {
      padding-top: 30px;
    }
  }
  .roadmap__timeline {
    margin-top: 50px;
    justify-content: space-between;
  }
  
  
}
</style>
