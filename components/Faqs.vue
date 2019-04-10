<template>
  <div class="columns is-multiline">
    <div class="column item is-destop is-12" v-for="(item, index) in faqs" :key="index">
      <div class="is-info">
        <h3> {{`${index + 1}. ${item.question}`}}</h3>
        <div class="answer">
          <p v-for="(answerItem, index) in item.answer" :key="index">
            <template v-if="item.key === 'wechat'">
              {{answerItem}}
              <div><img src="~/assets/images/vitelabs_wechat.jpg" alt=""/></div>
            </template>
            <template v-else>{{answerItem}}</template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  props: {
    faqs: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.is-info {
  margin-bottom: 10px;
  h3 {
    margin-bottom: 12px;
    font-size: 20px;
    font-family: $font-family-main;
    color: #171C34;
    line-height: 28px;
    
    @include touch {
      font-size: 17px;
      line-height: 24px;
      margin-bottom: 10px;
    }
  }
  .answer {
    font-size: 14px;
    font-family: $font-family-light;
    color: #919AA3;
    line-height: 20px;
    img {
      max-width: 200px;
      margin-top: 0.5rem;
    }
    p {
      &:first-child {
        margin-top: 0;
      }
    }
    @include touch {
      font-size: 14px;
      line-height: 16px;
    }
  }
}
</style>