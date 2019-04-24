<template>
  <div class="three-column is-flex">
    <div 
      v-for="(item, index) in list" 
      :key="index" 
      class="three-column-item" 
      v-if="list.length">
      <div class="three-column__wrapper is-flex">
        <a :href="item.skipUrl" target="_blank" v-if="item.skipUrl">
          <div class="three-column__content">
            <div class="three-column__title" v-if="item.title">{{ item.title }}</div>
            <img :src="item.img" :style="imgSize"/>
          </div>
        </a>
      </div>
      <div class="date" v-if="item.date">{{ item.date }}</div>
      <div class="desc" v-if="item.desc">{{ item.desc }}</div>
      <div class="copyright" v-if="item.copyright">@ {{ item.copyright }}</div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      list: {
        type: Array,
        default: () => []
      },
      imgSize: {
        type: Object,
        default: () => {
          return {
            width: '320px',
            height: '190px'
          };
        }
      }
    },
  
    data: function () {
      return {
        
      };
    },
    methods: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

.three-column {
  margin-top: 36px; 
  justify-content: space-between;
  @include mobile {
    flex-direction: column;
  }
  .three-column-item {
    @include mobile {
      box-sizing: border-box;
      padding: 30px;
    }
  }
  // img {
  //   width: 320px;
  //   height: 190px;
  // }
  .three-column__wrapper {
    justify-content: center;
    .three-column__content {
      position: relative;
      width: 320px;

    }
    .three-column__title {
      position: absolute;
      top: 24px;
      left: 24px;
      font-size:15px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:20px;
    }
  }
  
  .date {
    font-size:13px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(145,154,163,1);
    line-height:16px;
    margin: 11px 0; 
    text-align: left;
  }
  .desc {
    font-size:14px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(23,28,52,1);
    line-height:18px;
    text-align: left;
    max-width: 320px;
  }
  .copyright {
    margin-top: 8px;
    font-size:13px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(23,28,52,1);
    line-height:16px;
    text-align: left;
  }
}

</style>
