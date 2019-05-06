<template>
  <div class="full-node-container">
    <div class="head">
      <div class="node-title">
        <div class="title-content is-flex">
          <img :src="info.img"/>
          <div class="title-content__title">
            {{ info.title }} 
            <span class="title-content__title-num">{{ info.titleData }}</span>
            <span v-if="info.title1">{{ info.title1 }} </span>
          </div>
        </div>
      </div>
      <a :href="info.rightLink" target="_blank" v-if="info.rightLink" class="right-title-link">
        <div class="right-title">
          {{ $t('nav.more') }}
          <img src="~/assets/images/arrow_forward.svg"/>
        </div>
      </a>
    </div>
    <slot name="nodeContent"></slot>
  </div>
</template>
<script>
  export default {
    components: {
    },
    props: {
      info: {
        type: Object,
        default: ()=> {
          return {
            img: '',
            title: '',
            titleData: '',
            rightLink: ''
          };
        }
      }
    },
    data() {
      return {
        locales: this.$i18n.locale === 'en' ? '' : this.$i18n.locale,
      };
    },
    methods: {
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars.scss";
.full-node-container {
  background: #fff;
  border: 1px solid #E5EDF3;
  box-shadow: 0 6px 36px 0 rgba(0,62,100,0.04);
  border-radius: 2px;
  .head {
    font-size: 16px;
    background:rgba(242,248,255,1);
    color:rgba(23,28,52,1);
    line-height:20px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    .node-title {
      .title-content {
        padding: 12px 0px 12px 20px;
        .title-content__title {
          margin-left: 12px; 
          line-height: 36px;
          .title-content__title-num {
            font-family:$font-family-title;
          }
        }   
      } 
    }
    .right-title-link {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
    .right-title {
      cursor: pointer;
      font-size:12px;
      font-family:$font-family-title;
      font-weight:600;
      line-height: 60px;
      padding-right: 31px;
    }
  }
  .node-content {
    padding: 23px 0 26px 22px;
    .node-text {
      font-family: $font-family-title;
      font-size: 34px;
      color: #5E6875;
      letter-spacing: 0.73px;
    }
  }
}
</style>
