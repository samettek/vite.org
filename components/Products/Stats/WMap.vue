<template>
  <div class="map-container">
    <div class="content">
      <div id="map" style="width: 100%; height: 249px;"></div>
      <div class="map__footer is-flex">
        <div v-for="(item, index) in valList" :key="index" class="map__footer-wrapper">
          <div>{{item.name}}</div>
          <div style="margin-top:2px;">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';
require('echarts/map/js/world.js');

export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      mapInstance: null,
      valList: [
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        },
        {
          name: '北京',
          value: '1000'
        }
      ]
    };
  },
  watch: {
    list() {
      this.draw();
    }
  },
  mounted() {
    this.draw();
  },
  methods: {
    clear() {
      this.mapInstance.clear();
    },
    convertData() {
      let res = [];
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].ipInfo && this.list[i].ipInfo.lng) {
          res.push({
            name: this.$t('fullNode.popover.nodeName'),
            value: [this.list[i].ipInfo.lng, this.list[i].ipInfo.lat, this.list[i].nodeName]
          });
        }
      }
      return res;
    },
    draw() {
      this.mapInstance = echarts.init(document.getElementById('map'));
      this.mapInstance.setOption({
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return params.name + ' : ' + params.value[2];
          }
        },
        geo: {
          roam: false,
          map: 'world',
          layoutCenter: ['50%', '57%'],
          layoutSize: 500,
          itemStyle: {
            normal: {
              areaColor: 'rgba(85,122,198,0.25)',
              borderWidth: 0
            }
          }
        },
        series: [{
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 8,
          itemStyle: {
            color: 'rgba(0, 122, 255, 1)',
            borderColor: 'rgba(0, 122, 255, 0.2)',
            borderWidth: 8
          },
          data: this.convertData()
        }]
      },true);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars.scss";
.map-container {
  box-sizing: border-box;
  padding: 0 15px;
  .map__footer {
    justify-content: space-between;
    overflow-x: scroll;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(145,154,163,1);
    line-height:18px;
    .map__footer-wrapper {
      margin-top: 5px;
      padding-left: 15px; 
      padding-right: 15px; 
    }
  }
}
</style>