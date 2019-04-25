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
          titleData: '99.9%',
          rightLink: 'https://explorer.vite.net/FullNode'
        },
        nodePosition: {
          img: require('~/assets/images/product/fullnode.svg'),
          title: this.$t('products.platform.fullnode.title'),
          titleData: '1047',
          rightLink: 'https://explorer.vite.net/FullNode'
        },
        
      };
    }
  },
  data: function () {
    return {
      barStyle: {
        width: '100%',
        height: '315px',
        marginTop: '0px',
        marginLeft: '0px'
      },
      percents: [
        {
          'count': '10',
          'item': '9.98'
        }, {
          'count': '20',
          'item': '37.98'
        }, {
          'count': '30',
          'item': '59.98'
        }, {
          'count': '40',
          'item': '70.98'
        }, {
          'count': '50',
          'item': '99.98'
        }
      ],
      mapList:[
        {
          'city':'A_0',
          'count':5,
          'lat':51.2993,
          'lng':9.491,
          'nodeNames':['0nodename','1nodename','2nodename','3nodename','4nodename']
        },
        {
          'city':'A_1',
          'count':7,
          'lat':40.7939,
          'lng':-74.0258,
          'nodeNames':['0nodename','1nodename','2nodename','3nodename','4nodename','5nodename']
        },
        {
          'city':'A_2',
          'count':9,
          'lat':50.1153,
          'lng':8.6823,
          'nodeNames':['0nodename','1nodename','2nodename','3nodename','4nodename','5nodename','6nodename']
        },
        {
          'city':'A_3',
          'count':11,
          'lat':60.1708,
          'lng':24.9375,
          'nodeNames':['0nodename','1nodename','2nodename','3nodename','4nodename','5nodename','6nodename','7nodename']
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

 
