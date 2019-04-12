<template>
  <div class="container">
    <div class="blog__card is-flex">
      <div>
        <div class="blog__card-title">{{ $t('medium.blog.title') }}</div>
        <div class="blog__card-desc">{{ $t('medium.blog.desc') }}</div>
      </div>
      <div><img src="~/assets/images/medium/M.svg"/></div>
    </div>
  </div>
</template>

<script type="text/babel">

export default {
  components: {
  } 
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.blog__card {
  justify-content: space-between;
  box-sizing: border-box;
  padding: 50px;
  height:180px;
  margin-top: 88px;
  margin-bottom: 127px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(211,234,255,1);
  .blog__card-title {
    font-size:24px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(23,28,52,1);
    line-height:28px;
  }
  .blog__card-desc {
    margin-top: 26px;
    font-size:14px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(23,28,52,1);
    line-height:20px;
  }
}

</style>
