<template>
  <div>
    <h1 class="is-border-box">最新活动</h1>
    <div class="pic">

    </div>
    <div>
      <a 
        :href="$i18n.locale === 'zh' ? 
        'https://forum.vite.net/category/21/%E6%B4%BB%E5%8A%A8%E4%B8%93%E5%8C%BA' : 
        'https://forum.vite.net/category/22/campaigns'" 
        target="_blank">
        查看更多
      </a>
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

h1 {
  padding-top: 90px; 
}
</style>