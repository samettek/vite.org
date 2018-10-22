<template>
  <div class="link-wrapper">
    <div class="link-content" v-for="(item, index) in desc" :key="index">
      <div class="flex-top" >
        <img :src="item.img"/>
        <div class="links">
          <img :src="item.pic" v-if="item.key === 'pic'"/>
          <a :href="link" 
             v-else
             target="_blank" 
             class="link-url" 
             v-for="(link, index) in item.links" 
             :key="index">
             {{ link }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      desc: {
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
    padding: 40px;
    box-sizing: border-box;
    .flex-top {
      display: flex;
      align-items: flex-start;
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
    .links {
      margin-left: 23px;
      img {
        width: 100px;
        height: 100px;
      }
    }
   
  }
</style>
