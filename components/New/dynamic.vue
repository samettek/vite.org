<template>
  <div id="dynamic">
    <h1 class="is-border-box">{{ $t('New.dynamic.title') }}</h1>
    <div class="pic">
      <three-column :list="list" :is-custom="resAcLen > 3"></three-column>
    </div>
  </div>
</template>
<script type="text/babel">
import ThreeColumn from '~/components/ThreeColumn';

export default {
  components: {
    ThreeColumn,
  },
  async mounted() {
    const url = this.$i18n.locale === 'zh' ? '/discover_zh.json' : '/discover_en.json';
    const reportUrl = this.$i18n.locale === 'zh' ? '/report_zh.json' : '/report_en.json';
    await this.getData(url, reportUrl);
  },
  watch: {
    '$i18n.locale': async function (val) {
      const url = val === 'zh' ? '/discover_zh.json' : '/discover_en.json';
      const reportUrl = val === 'zh' ? '/report_zh.json' : '/report_en.json';
      await this.getData(url, reportUrl);
    },
  },
  methods: {
    async getData(url, reportUrl) {
      const res = await this.$axios.$get(url);
      for (let i = 0; i < res.tags.length; i++) {
        if (res.tags[i].tag === 'news') {
          let res = await this.$axios.$get(url);
          res = res.tags[i].list.filter((item) => item.source === 1);
          const resReport = await this.$axios.$get(reportUrl);
          this.resAcLen = res.length + resReport.length;

          this.dynamics = res.concat(resReport) || [];
        }
      }
    },
  },
  computed: {
    list() {
      return this.dynamics.map((item) => {
        const time = new Date(item.createTime * 1000);
        item.bannerUrl = item.bannerUrl.replace(/\s/ig, '');
        return {
          img: item.bannerUrl,
          desc: item.desc,
          skipUrl: item.skipUrl,
          date: time.toLocaleDateString(),
        };
      }).slice(0, 7);
    },
  },
  data() {
    return {
      dynamics: [],
      resAcLen: 0,
    };
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

h1 {
  padding-top: 90px;
}
.pic {
  overflow-x: scroll;
}
</style>
