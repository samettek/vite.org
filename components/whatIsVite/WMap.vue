<template>
  <div class="map-container">
    <div class="content">
      <div id="map" style="width: 100%; height: 249px;"></div>
      <div v-if="footer" class="map__footer is-flex">
        <div
          v-for="(item, index) in compulist"
          :key="index"
          class="map__footer-wrapper"
          v-if="compulist.length">
          <div>{{item.city}}</div>
          <div style="margin-top:2px;">{{item.count}}</div>
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
      default: () => [],
    },
    footer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mapInstance: null,
    };
  },
  watch: {
    list() {
      this.draw();
    },
  },
  mounted() {
    this.draw();
  },
  computed: {
    compulist() {
      return this.list.slice(0, 6);
    },
  },
  methods: {
    clear() {
      this.mapInstance.clear();
    },
    convertData() {
      const res = [];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].lng && this.list[i].lng) {
          res.push({
            name: this.$t('products.platform.fullnode.nodeName'),
            value: [this.list[i].lng, this.list[i].lat, this.list[i].nodeNames],
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
          formatter(params) {
            if (params.value[2].length > 6) {
              params.value[2] = params.value[2].slice(0, 6);
            }
            return `${params.name} : ${params.value[2]}`;
          },
        },
        geo: {
          roam: false,
          map: 'world',
          layoutCenter: ['50%', '57%'],
          layoutSize: 500,
          itemStyle: {
            normal: {
              areaColor: 'rgba(85,122,198,0.25)',
              borderWidth: 0,
            },
          },
        },
        series: [{
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 8,
          itemStyle: {
            color: 'rgba(0, 122, 255, 1)',
            borderColor: 'rgba(0, 122, 255, 0.2)',
            borderWidth: 8,
          },
          data: this.convertData(),
        }],
      }, true);
    },
  },
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
    font-family: $font-family-light;
    font-weight:400;
    color:rgba(145,154,163,1);
    line-height:18px;
    .map__footer-wrapper {
      margin-top: 5px;
    }
  }
}
</style>
