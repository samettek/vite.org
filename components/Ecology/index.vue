<template>
  <div class="scroll-container">
    <div class="eco">
      <div class="eco-title">{{$t('ecoTitle')}}</div>
      <div>
        <div class="eco-sub-title">
          <div>
            <img src="~/assets/images/eco/worth/worth.svg">
          </div>
          <div>{{$t('eco.worth.title')}}</div>
        </div>
        <worth></worth>
      </div>
      <div class="dapps-container">
        <div class="eco-sub-title">
          <div>
            <img src="~/assets/images/eco/dapps/dapps.svg">
          </div>
          <div>{{$t('eco.dapps.title')}}</div>

        </div>
        <dapps></dapps>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import dapps from "./dapps";
import worth from "./worth";
export default {
  components: {
    dapps,
    worth
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.scroll-container {
  width: 100%;
  display: flex;
  margin-top:240px;
}
.eco {
  display: flex;
  flex-direction: column;
  min-width: 1052px;
  margin: 0 auto;
  font-family: $font-family-title;
  .dapps-container{
      margin-top:60px;
  }
}
.eco-title {
  color: #171c34;
  font-size: 44px;
  text-align: center;
}
.eco-sub-title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  font-size: 24px;
  color: #007aff;
  > div:first-child {
    width: 65px;
    height: 65px;
    border-radius: 100%;
    background: #007aff;
    margin-right: 13px;
  }
}
</style>
