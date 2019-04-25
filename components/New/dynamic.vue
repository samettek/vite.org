<template>
  <div id="dynamic">
    <h1 class="is-border-box">{{ $t('New.dynamic.title') }}</h1>
    <div class="pic">
      <three-column :list="list"></three-column>
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
    let url = this.$i18n.locale === 'zh' ? '/discover_zh' : '/discover_en';
    let res = await this.$axios.$get(url);
    let resAcLen = res.tags[2].list.length;
    if (resAcLen < 3) {
      this.dynamics = res || [];
    } else {
      this.dynamics = res.tags[2].list.slice(0, 3) || [];
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
      dynamics: []
    };
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

h1 {
  padding-top: 90px;
}
</style>