<template>
    <div class="page-what-is-vite">
        <page-header name="whatIsVite"></page-header>
        <div class="sub-section-wrapper">
          <sub-section name="tech" class="sub-section sub-section-tech"></sub-section>
          <sub-section name="dex" class="sub-section"></sub-section>
        </div>
        <home-section class="home-section-fullnode" :buttons="btnGroups" name="fullnode" :render="['img']" center>
          <template v-slot:img>
            <w-map :list="nodeList" class="node-map"></w-map>
          </template>
        </home-section>
        <!-- <section id="team" class="section-team">
          <teams></teams>
        </section> -->
        <!-- <investor id="investor" :title="$t('whatIsVite.investor')" type="investor" class="section-investor"></investor> -->
        <investor id="partner" :title="$t('whatIsVite.partner')" type="partner" class="section-partner"></investor>
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import SubSection from '~/components/whatIsVite/SubSection.vue';
import HomeSection from '~/components/HomeSection.vue';
import WMap from '~/components/whatIsVite/WMap.vue';
import nodeList from '~/components/whatIsVite/nodeList.js';
import Teams from '~/components/whatIsVite/Team/Teams';
import Investor from '~/components/whatIsVite/Investor';

export default {
  components: {
    PageHeader,
    SubSection,
    HomeSection,
    WMap,
    Teams,
    Investor,
  },
  data() {
    return {
      nodeList,
    };
  },
  computed: {
    btnGroups() {
      return [
        {
          name: 'sbp',
          url: {
            name: 'superNodes',
          },
        },
        {
          name: 'fullnode',
          url: this.$link('docs.fullnode'),
        },
      ];
    },
  },
  mounted() {
    this.getNodeList();
  },
  methods: {
    async getNodeList() {
      const data = await this.$axios.$get('https://stats.vite.net/api/peers/city/aggr');
      if (data && data.city_info) {
        this.nodeList = data.city_info;
      }
    },
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
.section-team {
  padding-top: 150px;
}
.section-investor {
  background: #f5faff;
}
.node-map {
  margin-top: 60px;
}

.sub-section-tech {
  /deep/ .sub-section__desc-content {
    & > div {
      text-align: center;
    }
  }
}
</style>
