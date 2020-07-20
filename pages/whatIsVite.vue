<template>
    <div class="page-what-is-vite">
        <page-header name="whatIsVite"></page-header>
        <div class="sub-section-wrapper">
          <sub-section name="tech" class="sub-section"></sub-section>
          <sub-section name="dex" class="sub-section"></sub-section>
        </div>
        <home-section class="home-section-fullnode" name="fullnode" :render="['img']" center>
          <template v-slot:img>
            <w-map :list="nodeList"></w-map>
          </template>
        </home-section>
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import SubSection from '~/components/whatIsVite/SubSection.vue';
import HomeSection from '~/components/HomeSection.vue';
import WMap from '~/components/whatIsVite/WMap.vue';
import nodeList from '~/components/whatIsVite/nodeList.js';

export default {
  components: {
    PageHeader,
    SubSection,
    HomeSection,
    WMap,
  },
  data() {
    return {
      nodeList,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.home-section-fullnode {
  background-color: #f5faff;
  padding-top: 90px;
  padding-bottom: 90px;
}
.sub-section-wrapper {
  padding-top: 125px;
  padding-bottom: 125px;
  .sub-section {
    &:last-child {
      margin-top: 90px;
    }
  }
}
</style>
