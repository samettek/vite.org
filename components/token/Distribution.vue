<template>
  <div class="distribution">
    <div class="content">
      <div id="distribution-pie"></div>
      <div v-if="footer" class="distribution__footer is-flex">

      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  data() {
    return {
      instance: null,
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    clear() {
      this.mapInstance.clear();
    },
    draw() {
      this.mapInstance = echarts.init(document.getElementById('distribution-pie'));
      this.mapInstance.setOption({
        legend: {
          show: true,
          bottom: '0%',
        },
        series: [{
          type: 'pie',
          labelLine: {
            length: 20,
            length2: 45,
          },
          bottom: 50,
          label: {
            formatter: '{d}%',
          },
          data: [{
            value: 40,
            name: this.$t('token.distribution.sell'),
            label: {
              color: '#FFD307',
            },
            itemStyle: {
              color: '#FFD307',
            },
          }, {
            value: 25,
            name: this.$t('token.distribution.team'),
            label: {
              color: '#FF9F00',
            },
            itemStyle: {
              color: '#FF9F00',
            },
          }, {
            value: 20,
            name: this.$t('token.distribution.foundation'),
            label: {
              color: '#053CCE',
            },
            itemStyle: {
              color: '#053CCE',
            },
          }, {
            value: 10,
            name: this.$t('token.distribution.marketing'),
            label: {
              color: '#A5A5A5',
            },
            itemStyle: {
              color: '#A5A5A5',
            },
          }, {
            value: 5,
            name: this.$t('token.distribution.airdrop'),
            label: {
              color: '#97C9FF',
            },
            itemStyle: {
              color: '#97C9FF',

            },
          }],
        }],
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "assets/vars.scss";
.distribution {
    padding: 30px 0;
    background: #F5FAFF;
}
#distribution-pie {
  width: 100%;
  height: 450px;
}

@include mobile() {

  #distribution-pie {
    width: 100%;
    height: 250px;
  }
}
</style>
