<template>
  <section>
    <h1 class="roadmap-title">{{ $t('roadmap.title')}}</h1>

    <div class="container is-flex">
      <!-- <div
        class="timeline"
        ref='container'>
        <ul
          class="is-flex"
          ref="nodes">
          <li
            class="in-view"
            :class="{ 'is-finish': index<=finished }"
            :key="item.time"
            v-for="(item, index) in timelines">
            <div class="desc-wrapper">
              <span class="time">{{item.time}}</span>
              <div class="desc">
                <div
                  v-for="(desc, index) in item.description"
                  :key="index">
                <p v-if="!(desc instanceof Object)"> {{desc}} </p>
                <a v-else
                    :href="desc.url"
                    target="_blank">
                    <p>
                      {{ desc.text }}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="in-view"></li>
        </ul>
      </div> -->
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
  
  
}
</style>
