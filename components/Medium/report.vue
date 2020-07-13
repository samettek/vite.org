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
    ThreeColumn,
  },
  async mounted() {
    const url = this.$i18n.locale === 'zh' ? '/report_zh.json' : '/report_en.json';
    const res = await this.$axios.$get(url) || [];
    console.log(res);
    this.resAcLen = res.length;
    this.reports = res || [];
  },
  watch: {
    '$i18n.locale': async function (val) {
      const url = val === 'zh' ? '/report_zh.json' : '/report_en.json';
      const res = await this.$axios.$get(url) || [];
      this.resAcLen = res.length;
      this.reports = res || [];
    },
  },
  computed: {
    list() {
      if (this.resAcLen && this.reports) {
        return this.reports.map((item) => {
          const time = new Date(item.createTime * 1000);
          return {
            img: item.bannerUrl,
            desc: item.desc,
            skipUrl: item.skipUrl,
            date: time.toLocaleDateString(),
            from: item.from,
          };
        });
      }
      return [];
    },
  },
  data() {
    return {
      resAcLen: 0,
      reports: [],
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

</style>
