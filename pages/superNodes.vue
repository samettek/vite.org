<template>
  <div>
    <section class="section">
      <div class="container super-node-title">
        <h1 v-html="$t('superNodes.title')"></h1><span
          class="explain"
          v-if="$i18n.locale === 'en'"
        >(Snapshot Block Producer)</span>
      </div>
      <div class="container">
        <div class="columns is-multiline">
          <div
            class="column item is-destop is-12"
            v-for="(item, index) in superNodes"
            :key="index"
          >
            <div class="is-info">
              <h3> {{`${item.orderNum} ${item.question}`}}</h3>
              <div class="answer">
                <div
                  class="part"
                  v-for="(answerItem,index) in item.answer"
                  :key="index"
                  v-if="item.answer.length"
                >
                  <span v-html="answerItem"></span>
                </div>
                <div
                  class="part"
                  v-for="(item,index) in item.second"
                  :key="index"
                >
                  <div
                    class="external-title"
                    v-if="item.title"
                  > {{`${item.title}`}} </div>
                  <div
                    class="part"
                    v-for="(i,index) in item.answer"
                    :key="index"
                    v-if="item.answer"
                  >
                    <span v-html="i"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
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

<style  rel="stylesheet/scss" lang="scss" scoped>
@import "assets/vars.scss";
.super-node-title {
  font-size: 44px;
  color: #171c34;
  margin: 60px auto;
  display:flex;
  align-content: center;
  flex-wrap: wrap;
  .explain {
    font-size: 25px;
    line-height: 60px;
  }
}
.external-title {
  font-size: 18px;
  font-weight: bolder;
  margin-bottom: 10px;
}

.section {
  @include touch {
    padding-top: 25px;
  }
  .is-info {
    margin-bottom: 10px;
    h3 {
      margin-bottom: 20px;
      font-size: 20px;
      font-family: $font-family-main;
      color: rgba(21, 128, 227, 1);
      line-height: 28px;
      @include touch {
        font-size: 17px;
        line-height: 24px;
        margin-bottom: 10px;
      }
    }
    .answer {
      font-size: 16px;
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
  }
}
</style>
