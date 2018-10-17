<template>
  <section class="section">
    <div class="container">
      <div class="flex-container">
        <news class="news-icon"></news>
        <div class="news">
          <div class="news-title">最新消息</div>
          <div class="news-content">
            <div class="news-item-row"><div class="news-item">哈哈哈哈哈</div><div class="news-time">10.05</div></div>
            <div class="news-item-row"><div class="news-item">哈哈哈哈哈</div><div class="news-time">10.03</div></div>
            <div class="news-item-row"><div class="news-item">哈哈哈哈哈</div><div class="news-time">10.02</div></div>
          </div>
          <div class="news-more">
            <a href="https://medium.com/vitelabs" target="_blank" class="more">MORE</a><img src="~assets/images/more.svg" class="news-more-icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
import News from '~/components/svg/News.vue'

export default {
  components: {
    News
  },
  data: function () {
    return {
    }
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";
  .flex-container {
    display: flex;
    display: -webkit-flex;
    position: relative;
    .news-icon {
      position: absolute;
      left: -78px;
    }
    .news {
      margin-top: 21px;
      .news-title {
        font-family: $font-family-title;
        color: #363D4F;
        letter-spacing: 0;
        line-height: 24px;
      }
      .news-content {
        margin-top: 10px;
        font-size: 15px;
        color: #6D7783;
        letter-spacing: 0;
        line-height: 24px;
        .news-item-row {
          display: flex;
          display: -webkit-flex;
          .news-item {
            width: 355px;
            overflow: hidden;
          }
          .news-time {
            opacity: 0.39;
          }
        }
      }
      .news-more {
        font-family: $font-family-title;
        max-width: 80px;
        margin-top: 26px;
        font-size: 12px;
        letter-spacing: 0;
        line-height: 17px;
        .more {
          color: #007AFF;
        }
        .news-more-icon {
          margin-left: 9px;
          vertical-align: sub;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

</style>

  
  
 
