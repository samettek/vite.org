<template>
  <div class="youtube__wrapper">
    <div class="container">
      <div class="youtube__content">
        <sub-title title="youtube" style="color: white"></sub-title>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import subTitle from '~/components/subTitle';

export default {
  components: {
    subTitle
  } 
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.youtube__wrapper {
  margin-top: 18px;
  height: 440px;
  background: url("~assets/images/medium/bg.jpg");
  background-size: cover;
  .youtube__content {
    box-sizing: border-box;
    padding: 40px 0 84px 0;
  }
}

</style>
