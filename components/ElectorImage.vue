<template>
  <div class="elector-item" @click="toDetailPage">
    <div class="img-wrapper">
      <div class="img-bg">
        <img :src="src" alt="">
      </div>
    </div>

    <div class="elector-desc">
      <span class="name">{{$t(`elector.nameMap.${name}.name`)}}</span>
      <p>{{$t(`elector.nameMap.${name}.description`)}}</p>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      src: {
        type: String
      },
      name: {
        type: String
      },
      urls: {
        type: Array,
        default: () => []
      },
      type: {
        type: String,
        default: 'core'
      }
    },
    data: function () {
      return {}
    },
    methods: {
      toDetailPage () {
        let lang = ''
        this.$i18n.locale !== 'en' ? lang = `/${this.$i18n.locale}` : lang = ''
        this.$router.push({path: `${lang}/nodeDetail?key=${this.name}`})
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .elector-item {
     &:hover {
        cursor: pointer;
      }
    background: #FFFFFF;
    box-shadow: 0 4px 24px 0 rgba(211,234,255,0.53);
    width: 260px;
    .img-wrapper {
      height: 146px;
      width: 260px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: 10px;
      .img-bg {
        height: 120px;
        width: 214px;
        img {
          height: 120px;
          width: 214px;
          opacity: 1;
          transition: all 0.6s ease;
        }
      }
    }

    .elector-desc {
      padding: 23px;
      padding-top: 0;
      .name {
        font-size:24px;
        font-family: $font-family-main;
        line-height:33px;
        @include touch {
          font-size: 18px;
          line-height: 25px;
        }
      }
      & > p {
        margin-top: 10px;
        font-size:14px;
        font-family: $font-family-light;
        color:rgba(111,114,117,1);
        line-height:20px;
        transition: all 0.6s ease;
        @include touch {
          margin-top: 5px;
        }
      }
    }
  }
</style>
