<template>
  <div class="dapps">
    <div
      class="items"
      v-for="(icon,i) in iconList"
      :class="{active:i===1||i===4}"
      :key="i"
    >
      <img :src="icon">
      <div>{{$t(`eco.dapps.child[${i}]`)}}</div>
    </div>
  </div>
</template>

<script type="text/babel">
import entertainment from '~/assets/images/eco/dapps/entertainment.svg';
import game from '~/assets/images/eco/dapps/game.svg';
import iot from '~/assets/images/eco/dapps/iot.svg';
import knowledge from '~/assets/images/eco/dapps/knowledge.svg';
import local from '~/assets/images/eco/dapps/local.svg';
import social from '~/assets/images/eco/dapps/social.svg';

const iconList = [game, local, entertainment, social, knowledge, iot];
export default {
  components: {},
  data() {
    return {
      iconList,
    };
  },
  methods: {},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.dapps {
  height: 280px;
  display: flex;
  justify-content: space-between;
  .items {
    text-align: center;
    width: 120px;
    height: 180px;
    background: #f7fcff;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        margin-bottom:25px;
        width:40px;
        height: 40px;
    }
    &.active {
      background: #0099ff;
      color: #fff;
      font-size: 13px;
      &::before {
        border-left-color: #0099ff;
      }
      &::after {
        border-right-color: #0099ff;
      }
    }
    &::before {
      content: "";
      position: absolute;
      right: -51px;
      width: 0;
      height: 0;
      border-top: 90px solid transparent;
      border-bottom: 90px solid transparent;
      border-left: 52px solid #f7fcff;
    }
    &::after {
      content: "";
      position: absolute;
      left: -51px;
      width: 0;
      height: 0;
      border-top: 90px solid transparent;
      border-bottom: 90px solid transparent;
      border-right: 52px solid #f7fcff;
    }
    &:nth-child(1),
    &:nth-child(3),
    &:nth-child(5) {
      align-self: flex-start;
    }
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(6) {
      align-self: flex-end;
    }
  }
}
</style>
