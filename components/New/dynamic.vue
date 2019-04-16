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
  data() {
    return {
      list: [{
        img: require('~/assets/images/product/products1.png'),
        date: '2019.01.01',
        desc: '首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游',
      }, {
        img: require('~/assets/images/product/products1.png'),
        date: '2019.01.01',
        desc: '首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游',
      }, {
        img: require('~/assets/images/product/products1.png'),
        date: '2019.01.01',
        desc: '首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游',
      }]
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