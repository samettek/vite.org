<template>
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
</template>

<script>
  export default {
    computed: {
      head () {
        let title = `${this.$t('nav.faq')} - ${this.$t('head.title')}`
        let description = this.$t('head.homeDesc')
        return {
          title,
          meta: [
            { hid: 'description', name: 'description', content: description },

            // Open Grapg
            { name: 'og:title', content: title, hid: 'og:title' },
            { name: 'og:description', content: description, hid: 'og:description' },
            { name: 'og:type', content: 'website', hid: 'og:type' },
            { name: 'og:url', content: 'http://doc.vite.org', hid: 'og:url' },
            // { name: 'og:image', content: 'https://i.imgur.com/PzEm5j2.png' },

            // Twitter Card
            { name: 'twitter:card', content: 'summary', hid: 'twitter:card' },
            { name: 'twitter:site', content: '@vitelabs', hid: 'twitter:site' },
            { name: 'twitter:title', content: title, hid: 'twitter:title' },
            { name: 'twitter:description', content: description, hid: 'twitter:description' },
            // { name: 'twitter:image', content: 'https://i.imgur.com/PzEm5j2.png' },
            { name: 'twitter:image:alt', content: 'Vite Logo', hid: 'twitter:image:alt' }
          ]
        }
      },
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
        font-size: 1rem;
        color: #111111;
        line-height: 1.75rem;
        margin-bottom: 0.56rem;
      }
      .answer {
        font-family: $font-family-light;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.75rem;
        p {
          margin-top: 0.5rem;
          &:first-child {
            margin-top: 0;
          }
        }
        img {
          max-width: 200px;
          margin-top: 0.5rem;
        }
      }
    }
  }

</style>
