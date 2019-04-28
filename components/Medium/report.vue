<template>
  <div class="container" id="news">
    <sub-title :title="$t('medium.report.title')"></sub-title>
    <three-column :list="list" :is-custom="resAcLen < 3" :is-more="resAcLen > 3"></three-column>
  </div>
</template>

<script type="text/babel">
import subTitle from '~/components/subTitle';
import ThreeColumn from '~/components/ThreeColumn';

export default {
  components: {
    subTitle,
    ThreeColumn
  },
  async mounted() {
    let url = this.$i18n.locale === 'zh' ? '/report_zh.json' : '/report_en.json';
    let res = await this.$axios.$get(url) || [];
    this.resAcLen = res.length;
    this.reports = res || [];
  },
  computed: {
    list() {
      return this.reports.map(item=> {
        let time = new Date(item.createTime * 1000);
        return {
          img: item.bannerUrl,
          desc: item.desc,
          skipUrl: item.skipUrl,
          date: time.toLocaleDateString(),
          from: item.from
        };
      });
    }
  },
  data() {
    return {
      resAcLen: 0,
      reports: []
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

</style>
