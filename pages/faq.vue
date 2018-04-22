<template>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column item is-destop is-6-desktop is-12-tablet is-6-widescreen is-12-mobile" v-for="(item, index) in faqs">
            <div class="is-info">
              <h3> {{`${index + 1}. ${item.question}`}}</h3>
              <div class="answer">
                <p v-for="answerItem in item.answer">{{answerItem}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

  .section {
    background: #d6e6f7;
    padding-top: $nav-height + 3rem;
    @include touch {
      padding-top: (52rem/16) + 2rem;
    }
    .is-info {
      h3 {
        font-size: 1.13rem;
        color: #111111;
        line-height: 1.75rem;
        margin-bottom: 0.56rem;
      }
      .answer {
        font-family: $font-family-light;
        font-weight: 300;
        font-size: 1.13rem;
        line-height: 1.75rem;
      }
    }
  }

</style>
