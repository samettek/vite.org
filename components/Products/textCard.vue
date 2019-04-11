<template>
  <div class="text-card">
    <sub-title :title="title"></sub-title>
    <div class="text__card-content">
      <div 
        v-for="(item, index) in textList" 
        :key="index" 
        v-if="textList.length"
        class="text__item">
        <div class="name">{{ item.name }}</div>
        <div class="description">{{ item.description }}</div>
      </div>
      <div class="text__outer-link">
        <a>外部链接</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import subTitle from '~/components/subTitle';

export default {
  components: {
    subTitle
  },
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
  font-family:PingFangSC-Semibold;
  .text__card-content {
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
  .text__outer-link {
    margin-top: 21px;
    font-size:16px;
    font-weight:600;
    color:rgba(0,122,255,1);
    line-height:28px;
  }
}
</style>
