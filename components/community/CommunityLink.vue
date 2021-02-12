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
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .link-wrapper {
    margin: 0 auto;
    background: #F5FAFF;
    padding: 22px;
    box-sizing: border-box;
    @include touch {
      padding: 5px;
      width: 100%;
      margin-top: 20px;
    }
    .flex-top {
      display: flex;
      align-items: flex-start;
      img{
          width: 50px;
          height: 50px;
          @include touch {
            margin-top: 5px;
            width: 30px;
            height: 30px;
          }
      }
    }
    .link-content {
      margin-bottom: 6px;
      padding: 5px;
      @include touch {
        margin-bottom: 0px;
      }
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
      margin-left: 15px;
      margin-top: 10px;
      @include touch {
        margin-left: 3px;
        margin-top: 5px;
      }
      img {
        width: 100px;
        height: 100px;
      }
    }

  }
</style>
