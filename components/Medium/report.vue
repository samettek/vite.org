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
  computed: {
    list() {
      return this.$i18n.locale === 'zh' ? this.list_zh : this.list_en;
    }
  },
  data() {
    return {
      list_zh: [{
        img: require('~/assets/images/medium/1.jpg'),
        skipUrl: 'https://www.jinse.com/news/blockchain/352453.html',
        date: '2019.04.23',
        desc: '退房租押金要21天？美国城市政府与Vite实验室探索通过区块链技术解决民生问题',
        // copyright: 'lnc.'
      }, {
        img: require('~/assets/images/medium/2.jpg'),
        date: '2019.04.19',
        skipUrl: 'https://www.jinse.com/blockchain/350551.html',
        desc: '币圈一级防空警报，VITE钱包空投来袭',
      }, {
        img: require('~/assets/images/medium/3.jpg'),
        skipUrl: 'https://www.jinse.com/blockchain/347878.html',
        date: '2019.04.16',
        desc: '全球第一个基于DAG的去中心化交易所ViteX正式公测',
      }],

      list_en: [{
        img: require('~/assets/images/medium/1.jpg'),
        skipUrl: 'https://www.jinse.com/news/blockchain/352453.html',
        date: '2019.04.23',
        desc: '退房租押金要21天？美国城市政府与Vite实验室探索通过区块链技术解决民生问题',
        // copyright: 'lnc.'
      }, {
        img: require('~/assets/images/medium/2.jpg'),
        date: '2019.04.19',
        skipUrl: 'https://www.jinse.com/blockchain/350551.html',
        desc: '币圈一级防空警报，VITE钱包空投来袭',
      }, {
        img: require('~/assets/images/medium/3.jpg'),
        skipUrl: 'https://www.jinse.com/blockchain/347878.html',
        date: '2019.04.16',
        desc: '全球第一个基于DAG的去中心化交易所ViteX正式公测',
      }]
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

</style>
