 <template>
  <section>
    <div class="line">
      <card :info="info.broadcast" class="card-multi">
        <template slot="nodeContent">
          <bar :bar-style="barStyle" :list="percents"></bar>
        </template>
      </card>
      <card :info="info.nodePosition" class="card-multi mt">
        <template slot="nodeContent">
          <w-map :list="mapList"></w-map>
        </template>
      </card>
    </div>
    <div class="text__outer-link">
      <a 
        :href="outerLink.url" 
        target="_blank">
        {{ outerLink.name }}
        <img src="~/assets/images/arrow_forward.svg"/>
      </a>
    </div>
  </section>
</template>

<script type="text/babel">

import card from './card.vue';
import Bar from './Bar.vue';
import WMap from './WMap.vue';

export default {
  components: {
    card,
    Bar,
    WMap
  },
  computed: {
    info() {
      return {
        broadcast: {
          img: require('~/assets/images/product/supernode.svg'),
          title: this.$t('products.platform.supernode.title'),
          rightLink: 'https://explorer.vite.net/FullNode'
        },
        nodePosition: {
          img: require('~/assets/images/product/fullnode.svg'),
          title: this.$t('products.platform.fullnode.title'),
          rightLink: 'https://explorer.vite.net/FullNode'
        },
        
      };
    }
  },
  data: function () {
    return {
      barStyle: {
        width: '110%',
        height: '250px',
        marginTop: '0px',
        marginLeft: '-40px'
      },
      percents: [
        {
          'name': '0s',
          'percent': 0.02,
          'sumPercent': 0.02
        }, {
          'name': '0.25s',
          'percent': 0.3,
          'sumPercent': 0.32
        }, {
          'name': '0.5s',
          'percent': 0.3,
          'sumPercent': 0.62
        }, {
          'name': '0.75s',
          'percent': 0.3,
          'sumPercent': 0.92
        }, {
          'name': '0.75s',
          'percent': 0.08,
          'sumPercent': 1.0
        }
      ],
      mapList: [
        {
          'avgBroadcastTime': 0,
          'broadcastTime': 0,
          'getAvgBroadcastTime': 0,
          'ipInfo': {
            'area_code': 0,
            'country_name': 'USA',
            'found': 0,
            'lat': 31.0,
            'lng': 111.0,
            'metro_code': 0,
            'region_name': 'California'
          },
          'latestBlockHeight': 0,
          'latestBlockTime': 0,
          'nodeDelayTime': 0,
          'nodeName': 'AAABBB',
          'onlinePercent': 0.0,
          'peersNum': 0
        }
      ],
      outerLink: {
        name: this.$t('products.platform.explorer'),
        url: 'https://explorer.vite.net/'
      }
    };
  },
  
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
  .line {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    margin-top: 70px;
    @include mobile {
      flex-direction: column;
    }
  }
  .card-multi {
    width: 516px;
    height: 375px;
    @include mobile {
      width: 100%;
    }
  }
  .mt {
    @include mobile {
      margin-top: 20px;
    }
  }
  .text__outer-link {
    text-align: center;
    margin-top: 37px;
    font-size:16px;
    font-weight:600;
    color:rgba(0,122,255,1);
    line-height:28px;
  }

</style>

 
