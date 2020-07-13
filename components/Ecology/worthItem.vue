<template>
  <div class="worth-item">
    <div class="worth-item-title">
      <img :src="iconMap[itemKey]">
      <div>{{$t(`eco.worth.${itemKey}.title`)}}</div>
    </div>
    <div
      v-for="i in $t(`eco.worth.${itemKey}.child`)"
      :key="i"
      class="worth-item-child"
    >
      <img :src="checkIcon">
      <div>{{i}}</div>
    </div>
  </div>
</template>

<script type="text/babel">
import checkIcon from '~/assets/images/eco/worth/checkIcon.svg';
import dex from '~/assets/images/eco/worth/dex.svg';
import finance from '~/assets/images/eco/worth/finance.svg';
import pay from '~/assets/images/eco/worth/pay.svg';

export default {
  data() {
    return { iconMap: { dex, finance, pay }, checkIcon };
  },
  props: {
    itemKey: { type: String, default: '' },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.worth-item{
    display:flex;
    flex-direction: column;
    .worth-item-title{
        display: flex;
        align-items: center;
        img{
            margin-right: 20px;
        }
    }
    .worth-item-child{
        text-align: center;
        display:flex;
        margin-left: 80px;
        color:#919AA3;
        font-size: 14px;
        line-height: 34px;
        align-items: center;
        img{
            margin-right: 8px;
            height: 14px;
        }
    }
}
</style>
