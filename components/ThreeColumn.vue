<template>
  <div class="three-column is-flex" >
    <div class="three-column-mobile is-flex" :class="{'three-column-spec': isCustom, 'three-column-more': isMore}">
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
        <div class="copyright" v-if="item.from">@ {{ item.from }}</div>
      </div>
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
      isCustom: {
        type: Boolean,
        default: false
      },
      isMore: {
        type: Boolean,
        default: false
      },
      imgSize: {
        type: Object,
        default: () => {
          return {
            width: '320px',
            height: '180px'
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
  img {
    max-width: none;
  }
  @include mobile {
    justify-content: center;
    align-items: center;
  }
  .three-column-mobile {
    width: 100%;
    justify-content: space-between;
    @include mobile {
      flex-direction: column;
      // width: 320px;
      max-height: 750px;
      overflow-y: scroll;
    }
  }
  .three-column-item {
    @include mobile {
      box-sizing: border-box;
      margin-bottom: 50px;
    }
  }
  
  
  .three-column__wrapper {
    justify-content: center;
    .three-column__content {
      position: relative;
      // width: 320px;

    }
    .three-column__title {
      text-align: left;
      position: absolute;
      top: 24px;
      left: 24px;
      right: 24px;
      font-size:15px;
      font-family:$font-family-title;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:20px;
    }
  }
  
  .date {
    font-size:13px;
    font-family:$font-family-title;
    font-weight:600;
    color:rgba(145,154,163,1);
    line-height:16px;
    margin: 11px 0; 
    text-align: left;
  }
  .desc {
    font-size:14px;
    font-family:$font-family-title;
    font-weight:600;
    color:rgba(23,28,52,1);
    line-height:18px;
    text-align: left;
    max-width: 320px;
  }
  .copyright {
    margin-top: 8px;
    font-size:13px;
    font-family:$font-family-light;
    font-weight:400;
    color:rgba(23,28,52,1);
    line-height:16px;
    text-align: left;
  }
  .three-column-spec {
    justify-content: flex-start;
    .three-column-item {
      margin-right: 25px;
      @include mobile {
        margin-right: 0px; 
      }
    }
  }
  .three-column-more {
    flex-wrap: wrap;
    justify-content: flex-start;
    .three-column-item {
      margin-right: 25px; 
      margin-bottom: 25px;
      @include mobile {
        margin-right: 0px; 
        margin-bottom: 0px;
      }
    }
  }
}
</style>
