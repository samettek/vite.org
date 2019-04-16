<template>
  <div class="container" id="news">
    <sub-title :title="$t('medium.report.title')"></sub-title>
    <three-column :list="list"></three-column>
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
  data() {
    return {
      list: [{
        img: require('~/assets/images/product/products1.png'),
        date: '2019.01.01',
        desc: '首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游',
        copyright: 'lnc.'
      }, {
        img: require('~/assets/images/product/products1.png'),
        date: '2019.01.01',
        desc: '首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游',
        copyright: 'lnc.'
      }, {
        img: require('~/assets/images/product/products1.png'),
        date: '2019.01.01',
        desc: '首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游首款可战斗的区块链游',
        copyright: 'lnc.'
      }]
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

</style>
