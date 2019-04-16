<template>
  <div class="three-column is-flex">
    <div v-for="(item, index) in list" :key="index" class="three-column-item">
      <img :src="item.img" width="320px" height="213px"/>
      <div class="date">{{ item.date }}</div>
      <div class="desc">{{ item.desc }}</div>
      <div class="copyright">@ {{ item.copyright }}</div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
  
    data: function () {
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
    },
    methods: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

.three-column {
  justify-content: space-between;
  @include mobile {
    flex-direction: column;
  }
  .three-column-item {
    @include mobile {
      box-sizing: border-box;
      padding: 30px;
    }
  }
  .date {
    font-size:13px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(145,154,163,1);
    line-height:16px;
    margin: 11px 0; 
  }
  .desc {
    font-size:14px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(23,28,52,1);
    line-height:18px;
  }
  .copyright {
    margin-top: 8px;
    font-size:13px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(23,28,52,1);
    line-height:16px;
  }
}

</style>
