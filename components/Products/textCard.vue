<template>
  <div class="text-card">
    <div class="text__card-title"><span class="icon"></span>{{ title }}</div>
    <div class="text__card-content">
      <div v-for="(item, index) in textList" :key="index" v-if="textList.length">
        <div class="name">{{ item.name }}</div>
        <div class="description">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    textList: {
      type: Array,
      default: () => []
    }
  },  
  data: function () {
    return {
    };
  },
  methods: {
    
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.text-card {
  .text__card-title {
    height:28px;
    font-size:24px;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(23,28,52,1);
    line-height:28px;
    .icon {
      display: inline-block;
      width: 4px;
      height: 20px;
      background-color: $common-active-color;
      margin-right: 12px;
      vertical-align: baseline;
    }
  }
  .text__card-content {
    font-family:PingFangSC-Semibold;
    font-size:14px;
    font-weight:600;
    line-height:18px;
    .name {
      margin-top: 18px;
      color:rgba(23,28,52,1);
    }
    .description {
      margin-top: 8px;
      color:rgba(145,154,163,1);
    }
  }
}
</style>
