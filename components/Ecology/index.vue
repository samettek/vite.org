<template>
  <div class="scroll-container">
    <div class="eco-title">{{$t('ecoTitle')}}</div>
    <div class="eco-title2">{{$t('ecoTitle2')}}</div>
    <div class="eco">
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
import dapps from './dapps';
import worth from './worth';

export default {
  components: {
    dapps,
    worth,
  },
  methods: {},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.scroll-container {
  width: 100%;
  display: flex;
  margin-top: 240px;
  overflow-x: auto;
  flex-direction: column;
  font-family: $font-family-title;
  @include mobile {
    margin-top: 90px;
    height: 700px;
  }
}
.eco {
  @include mobile {
    transform: scale(0.7);
    transform-origin: 0 0;
    margin-left: 40px;
  }
  display: flex;
  flex-direction: column;
  min-width: 1052px;
  margin: 0 auto;
  .dapps-container {
    margin-top: 60px;
  }
}
.eco-title {
  color: #171c34;
  font-size: 44px;
  text-align: center;
  width: 100%;
}
.eco-title2 {
  text-align: center;
  width: 100%;
  margin-bottom: 60px;
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
