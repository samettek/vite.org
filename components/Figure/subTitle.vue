<template>
  <div class="figure__card-title">
    <span class="icon"></span>
    {{ title }}
  </div>
</template>
<script type="text/babel">

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

.figure__card-title {
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

</style>
