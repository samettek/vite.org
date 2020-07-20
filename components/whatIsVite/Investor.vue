<template>
  <section id="investor" class="section">
    <div class="container">
      <h1>{{title}}</h1>
      <div class="columns is-multiline is-mobile is-centered">
        <div :key="item.key" v-for="(item, index) in list" class="item">
          <a
            :href="item.url"
            target="_blank"
            @mouseover="onHover(index)"
            @mouseout="onOut(index)"
            :class="`key-${item.key}`"
          >
            <div class="img-wrapper">
              <img class="investor-logo" :src="item.logo" alt />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const dataMap = {
  investor: [
    {
      key: 'bitmain',
      logo: require('~/assets/images/investor/bitmain-blue.png'),
      url: 'https://www.bitmain.com/',
    },
    {
      key: 'ok',
      logo: require('~/assets/images/investor/ok-blue.png'),
      url: 'https://www.okex.com/project/9',
    },
    {
      key: 'ld',
      logo: require('~/assets/images/investor/ld-blue.png'),
      url: 'http://www.ldcap.com/',
    },
    {
      key: 'genesisCapital',
      logo: require('~/assets/images/investor/genesis-blue.png'),
      url: 'http://www.newgenesiscap.com/',
    },
    {
      key: 'bp',
      logo: require('~/assets/images/investor/bp-blue.png'),
      url: 'http://byzantinepartners.com/',
    },
    {
      key: 'kosmos',
      logo: require('~/assets/images/investor/kosmos-blue.png'),
      url: 'http://kosmos.capital/',
    },
    {
      key: 'distributed-fund',
      logo: require('~/assets/images/investor/distributed-fund-blue.png'),
      url: 'http://distributed.fund',
    },
    {
      key: 'bigcoin',
      logo: require('~/assets/images/investor/bigcoin-blue.png'),
      url: 'https://www.linkedin.com/company/bigcoin-capital/',
    },
    {
      key: 'wanbu',
      logo: require('~/assets/images/investor/wanbu-blue.png'),
      url: 'http://wandarin.org/',
    },
    {
      key: 'funcityCapital',
      logo: require('~/assets/images/investor/funcity-blue.png'),
      url: 'http://www.funcityholding.com/',
    },
    {
      key: 'nodeCapital',
      logo: require('~/assets/images/investor/node-blue.png'),
      url: 'http://www.nodecap.com/',
    },
    {
      key: 'linkvc',
      logo: require('~/assets/images/investor/linkvc-blue.png'),
      url: 'http://www.linkvc.com/',
    },
    {
      key: 'zhizi',
      logo: require('~/assets/images/investor/zhizi-blue.png'),
    },
    {
      key: 'hot',
      logo: require('~/assets/images/investor/hot-blue.png'),
    },
    {
      key: 'dazhi',
      logo: require('~/assets/images/investor/dazhi-blue.png'),
    },
    {
      key: 'UniValues',
      logo: require('~/assets/images/investor/UniValues-blue.png'),
    },
    {
      key: 'axi',
      logo: require('~/assets/images/investor/axi-blue.png'),
    },
    {
      key: 'handsome',
      logo: require('~/assets/images/investor/handsome-blue.png'),
    },
    {
      key: 'hesheng',
      logo: require('~/assets/images/investor/hesheng-blue.png'),
    },
    {
      key: 'b100',
      logo: require('~/assets/images/investor/b100-blue.png'),
    },
    {
      key: 'bn',
      logo: require('~/assets/images/investor/bn-blue.png'),
    },
  ],
  partner: [
    {
      key: 'alchemy',
      logo: require('~/assets/images/partner/alchemy.png'),
      url: 'https://www.alchemytech.io/',
    },
    {
      key: 'ankr',
      logo: require('~/assets/images/partner/ankr.png'),
      url: 'https://www.ankr.com/',
    },
    {
      key: 'bi23',
      logo: require('~/assets/images/partner/bi23.png'),
      url: 'https://www.bi23.com/#/',
    },
    {
      key: 'btc.com',
      logo: require('~/assets/images/partner/btc.com.png'),
      url: 'https://btc.com/',
    },
    {
      key: 'harmony',
      logo: require('~/assets/images/partner/harmony.png'),
      url: 'https://harmony.one/',
    },
    {
      key: 'hashfi',
      logo: require('~/assets/images/partner/hashfin.png'),
      url: 'https://www.hashfin.com/',
    },
    {
      key: 'troy',
      logo: require('~/assets/images/partner/troy.png'),
      url: 'https://troytrade.com/',
    },
    {
      key: 'vitescan',
      logo: require('~/assets/images/partner/vitescan.png'),
      url: 'https://vitescan.io/',
    },
  ],
};

export default {
  props: {
    type: {
      type: String,
      default: 'investor',
    },
    title: {
      type: String,
      default: '',
    },
  },
  name: 'investment',
  data() {
    return {
      hover: null,
    };
  },
  computed: {
    list() {
      return dataMap[this.type];
    },
  },
  methods: {
    onHover(index) {
      this.hover = index;
    },
    onOut() {
      this.hover = null;
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.is-multiline {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.section {
  padding-top: 90px;
  padding-bottom: 90px;
  h1 {
    margin-bottom: 90px;
    text-align: center;
  }
}

.img-wrapper {
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 140px;
    height: auto;
  }
}

.columns {
  flex-direction: row;
  margin: -36px;
  justify-content: flex-start;
  .item {
    flex-grow: 0;
    margin: 30px 36px;
    & > a {
      display: flex;
      width: 140px;
      height: 140px;
      &:hover {
        border-color: $light-blue;
      }
      &.key-hot {
        padding: 20px;
      }
    }
  }
}

@include until($tablet) {
  .columns {
    .item {
      padding: 0;
      margin: 10px;
      & > a {
        width: 95px;
        height: 95px;
      }
    }
  }
  .section {
    padding-top: 25px;
    padding-bottom: 25px;
    h1 {
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 30px;
    }
  }
}
</style>
