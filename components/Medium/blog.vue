<template>
  <div class="container" id="blogs">
    <a :href="href" target="_blank">
      <div class="blog__card is-flex">
      <div>
        <div class="blog__card-title">{{ $t('medium.blog.title') }}</div>
        <div class="blog__card-desc">{{ $t('medium.blog.desc') }}</div>
      </div>
      <div class="M-img"><img :src="imgSrc"/></div>
    </div>
    </a>

  </div>
</template>

<script type="text/babel">
import config from '~/config.js';

export default {
  data() {
    return {
      imgSrc: this.$i18n.locale === 'zh' ? require('~/assets/images/medium/f.svg') : require('~/assets/images/medium/M.svg'),
    };
  },
  computed: {
    href() {
      return this.$i18n.locale === 'zh' ? config.urls.forum : config.urls.medium;
    },
  },
  components: {
  },
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
  margin-bottom: 100px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(211,234,255,1);
  .blog__card-title {
    font-size:24px;
    font-family:$font-family-title;
    font-weight:600;
    color:rgba(23,28,52,1);
    line-height:28px;
  }
  .blog__card-desc {
    margin-top: 26px;
    font-size:14px;
    font-family:$font-family-light;
    font-weight:400;
    color:rgba(23,28,52,1);
    line-height:20px;
  }
  .M-img {
    margin-left: 20px;
  }
}

</style>
