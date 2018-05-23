<template>
  <div>
    <section class="faq-header">
      <div class="container">
        <div class="img-wrapper">
          <img src="~/assets/images/faq.png" alt="FAQ">
        </div>
        <h1>VITE Q&A</h1>
        <h2>{{$t('faq.title')}}</h2>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column item is-destop is-12" v-for="(item, index) in faqs">
            <div class="is-info">
              <h3> {{`${index + 1}. ${item.question}`}}</h3>
              <div class="answer">
                <p v-for="answerItem in item.answer">
                  <template v-if="item.key === 'wechat'">
                    {{answerItem}}
                    <br/>
                    <img src="~/assets/images/vitelabs_wechat.jpg" alt="">
                  </template>
                  <template v-else>{{answerItem}}</template>
                </p>
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
      faqs () {
        let faqs = this.$t('faq.questions')
        faqs = Array.isArray(faqs) ? faqs : []
        return faqs.map(item => {
          let {answer} = item
          if (!answer) answer = []
          if (!Array.isArray(answer)) answer = [answer]
          return {
            ...item,
            answer
          }
        })
      }
    }
  }
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";

  .faq-header {
    background:rgba(43,44,48,1);
    height:340px;
    h1 {
      font-size:72px;
      font-family: $font-family-main;
      color:rgba(144,146,154,1);
      line-height:100px;
      padding-top: 59px;
    }
    h2 {
      font-size:28px;
      font-family: $font-family-light;
      color:rgba(144,146,154,1);
      line-height:40px;
    }
    .img-wrapper {
      height: 270px;
      width: 270px;
      position: absolute;
      right: 0;
      top: 35px;
    }

    @include touch {
      padding: 20px 1.5rem;
      height: auto;
      text-align: center;
      .img-wrapper {
        position: relative;
        width: 100%;
        height: 135px;
        right: auto;
        top: auto;
        margin-bottom: 35px;
        img {
          width: 135px;
          height: 135px;
        }
      }
      h1 {
        font-size: 32px;
        line-height: 45px;
        padding-top: 0;
      }
      h2 {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 25px;
      }
    }
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
        color: rgba(21,128,227,1);
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
        color: rgba(51,51,51,1);
        line-height: 38px;
        p {
          margin-top: 10px;
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
