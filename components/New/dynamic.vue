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
    ThreeColumn
  },
  async mounted() {
    let url = this.$i18n.locale === 'zh' ? '/discover_zh.json' : '/discover_en.json';
    let reportUrl = this.$i18n.locale === 'zh' ? '/report_zh.json' : '/report_en.json';
    let res = await this.$axios.$get(url);
    let resReport = await this.$axios.$get(reportUrl);
    this.resAcLen = res.tags[2].list.length + resReport.length;
   
    this.dynamics = res.tags[2].list.concat(resReport) || [];
  },
  watch: {
    '$i18n.locale': async function(val) {
      let url = val === 'zh' ? '/discover_zh.json' : '/discover_en.json';
      let reportUrl = val === 'zh' ? '/report_zh.json' : '/report_en.json';
      let res = await this.$axios.$get(url);
      let resReport = await this.$axios.$get(reportUrl);
      this.resAcLen = res.tags[2].list.length + resReport.length;
   
      this.dynamics = res.tags[2].list.concat(resReport) || [];
    }
  },
  computed: {
    list() {
      return this.dynamics.map(item=> {
        let time = new Date(item.createTime * 1000);
        return {
          img: item.bannerUrl,
          desc: item.desc,
          skipUrl: item.skipUrl,
          date: time.toLocaleDateString()
        };
      });
    }
  },
  data() {
    return {
      dynamics: [],
      resAcLen: 0
    };
  }
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