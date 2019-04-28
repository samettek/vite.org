<template>
  <div id="activity">
    <h1 class="is-border-box">{{ $t('New.activity.title') }}</h1>
    <div class="pic">
      <three-column :list="list"></three-column>
    </div>
    <div>
      <a 
        :href="$i18n.locale === 'zh' ? 
        'https://forum.vite.net/category/21/%E6%B4%BB%E5%8A%A8%E4%B8%93%E5%8C%BA' : 
        'https://forum.vite.net/category/22/campaigns'" 
        target="_blank">
        {{ $t('New.activity.more') }}
        <img src="~/assets/images/arrow_forward.svg"/>
      </a>
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
    let res = await this.$axios.$get(url);
    let resAcLen = res.tags[1].list.length;
    if (resAcLen < 3) {
      this.activitys = res || [];
    } else {
      this.activitys = res.tags[1].list.slice(resAcLen - 3, resAcLen) || [];
    }
  },
  computed: {
    list() {
      return this.activitys.map(item=> {
        return {
          img: item.imgUrl,
          title: item.title,
          skipUrl: item.skipUrl,
        };
      });
    }
  },
  data() {
    return {
      activitys: []
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