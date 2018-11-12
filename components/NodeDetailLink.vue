<template>
  <div class="link-wrapper">
    <div class="link-title">{{ $t('elector.rightCommonPart.title') }}</div>
    <div class="link-content" v-for="(item, index) in desc" :key="index">
      <div class="" >
        <div class="links-title">{{ $t(`elector.rightCommonPart.${item.name}`) }}</div>
        <div class="links">
          <a :href="link" 
             target="_blank" 
             class="link-url" 
             v-for="(link, index) in item.links" 
             :key="index">
             {{ link }}
          </a>
        </div>
      </div>
    </div>
    <div class="medium-container">
      <p v-for="(item, index) in medium" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      desc: {
        type: Array,
        default: () => []
      },
      medium: {
        type: Array,
        default: () => []
      }
    },
    data: function () {
      return {}
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";
  .link-wrapper {
    background: #F5FAFF;
    padding: 22px;
    box-sizing: border-box;
    .medium-container {
      margin-top: 20px;
      p {
        font-size: 14px;
        color: #919AA3;
      }
    }
    .link-title {
      font-family: $font-family-title;
      font-size: 20px;
      color: #171C34;
      letter-spacing: 0;
    }
    .links-title {
      font-family: $font-family-title;
      font-size: 14px;
      color: #919AA3;
      letter-spacing: 0;
      margin-top: 20px;
    }
    .link-content {
      margin-bottom: 23px;
    }
    .link-url {
      display: block;
      line-height: 30px;
      font-size: 14px;
      color: #007AFF;
      letter-spacing: 0;
      white-space: normal;
      word-break: break-all;
    }
   
  }
</style>