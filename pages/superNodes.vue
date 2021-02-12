<template>
  <section class="page-sbp">
    <section class="container">
      <h1>{{$t('superNodes.title')}}</h1>
    </section>
    <section>
      <div v-for="(item, index) in superNodes" :key="index" class="is-info">
        <div class="container">
          <h3>{{`${item.orderNum} ${item.question}`}}</h3>
          <div class="answer">
            <div
              class="part"
              v-for="(answerItem,index) in item.answer"
              :key="index"
              v-if="item.answer.length"
            >
              <span v-html="answerItem"></span>
            </div>

            <div class="part" v-for="(item,index) in item.second" :key="index">
              <div class="external-title" v-if="item.title">{{`${item.title}`}}</div>
              <div class="part" v-for="(i,index) in item.answer" :key="index" v-if="item.answer">
                <span v-html="i"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Elector></Elector>
  </section>
</template>

<script>
import Elector from '~/components/Elector';

export default {
  components: {
    Elector,
  },
  computed: {
    superNodes() {
      let superNodes = this.$t('superNodes.contents');
      superNodes = Array.isArray(superNodes) ? superNodes : [];
      return superNodes.map((item) => {
        let { answer } = item;
        if (!answer) answer = [];
        if (!Array.isArray(answer)) answer = [answer];
        return {
          ...item,
          answer,
        };
      });
    },
  },
};
</script>

<style lang="scss">
.page-sbp {
  .is-info {
    ul {
      padding-left: 30px;
      list-style: circle;
    }
  }
}
</style>

<style  rel="stylesheet/scss" lang="scss" scoped>
@import "assets/vars.scss";

.page-sbp {
  h1 {
    @include title();
    font-size: 44px;
    line-height: 62px;
    margin-bottom: 90px;
  }
  .is-info {
    padding: 60px 15px;
    &:first-child {
      padding-top: 0;
    }
    h3 {
      margin-bottom: 20px;
      font-size: 18px;
      font-family: $font-family-main;
      color: #1580e3;
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
      color: rgba(51, 51, 51, 1);
      line-height: 33px;
      .part {
        margin-top: 14px;
        &:first-child {
          margin-top: 0;
        }
      }
      img {
        max-width: 200px;
        margin-top: 0.5rem;
      }
      @include touch {
        font-size: 14px;
        line-height: 27px;
      }
    }
    .external-title {
      font-weight: 600;
      font-size: 16px;
    }
    &:nth-child(2n) {
      background-color: #f5faff;
      h3 {
        color: #171c34;
      }
    }
  }
}
</style>
