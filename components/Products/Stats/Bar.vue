<template>
  <div class="bar-container">
    <div class="content">
      <div :style="barStyle" ref="bar"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  props: {
    list: {
      type: Array,
      default: ()=> []
    },
    barStyle: {
      type: Object,
      default: ()=> {}
    },
    showAxis: {
      type: Boolean,
      default: true
    },
    yMax: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      echarsInstance: null,
    };
  },
  watch: {
    list() {
      this.draw();
    }
  },
  mounted() {
    this.echarsInstance = echarts.init(this.$refs.bar);
    this.draw();
  },
  methods: {
    clear() {
      this.echarsInstance.clear();
    },
    dispatchBarColor(name) {
      if (name >= 0 && name <= 10) return '#EE2E38';
      if (name > 10 && name <= 40) return '#E87400';
      if (name > 40 && name <= 80) return '#F4CD41';
      if (name > 80) return '#5CB85C';
      return '';
    },
    draw() {
      let xAxis = Object.assign({
        show: this.showAxis,
        axisLabel : { 
          formatter : '{value}%' 
        },
        splitLine:{ 
          show:false 
        }
      });
      this.echarsInstance.setOption({
        xAxis: xAxis,
        yAxis:  {
          show: this.showAxis,
          type: 'category',
          data: this.list.map(item => {
            return item.count;
          })
        },
        tooltip: {
          trigger: 'item'
        },
        series: [{
          type: 'bar',
          data: this.list.map(item => {
            return Math.round(item.item);
          }),
          animation: false,
          barWidth: '50%',
          itemStyle: {
            color: params =>{
              let itemList = this.list[params.dataIndex];
              let percent = itemList.item;
              return this.dispatchBarColor(+percent) || '';
            }
          },
          tooltip: {
            position: 'top',
            formatter: params=> {
              let index = params.dataIndex;
              let listItem = this.list[index];
              return `<div class="">
                <div class="">${this.$t('products.platform.supernode.count')}：${listItem.item}%</div> 
              </div>`;
            }
          }
        }]
      });
    },
    // refreshData() {
    //   if(!this.echarsInstance){
    //     return;
    //   }
    //   var option = this.echarsInstance.getOption();
    //   option.series[0].data = this.type === "mini" ? this.list: this.list.map(item => {
    //     return item.percent * 100;
    //   });   
    //   this.echarsInstance.setOption(option);   
    // }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
  .bar-container {
    .mini-header {
      font-size: 9px;
    }
  }
</style>