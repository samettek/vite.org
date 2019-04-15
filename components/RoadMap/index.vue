<template>
  <section>
    <h1 class="roadmap-title">{{ $t('roadmap.title')}}</h1>

    <div class="container is-flex roadmap__timeline">
      <timeline :time-lines="completedList" type="completed"></timeline>
      <timeline :time-lines="inProgress" type="inProgress"></timeline>
      <timeline :time-lines="nextStep" type="nextStep"></timeline>
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
  computed: {
    completedList() {
      return this.getTimelines().slice(0, 9);
    },
    inProgress() {
      return this.getTimelines().slice(9, 10);
    },
    nextStep() {
      return this.getTimelines().slice(10);
    }
  },
  methods: {
    getTimelines() {
      let roadmaps = this.$t('roadmap.timelines');
      if (!Array.isArray(roadmaps)) {
        return [];
      }
      return roadmaps.map(item => {
        if (!Array.isArray(item.description)) {
          return {
            ...item,
            description: [item.description]
          };
        }
        return item;
      });
    }
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
