<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 style="margin-bottom: 50px;">{{$t('faq.title')}}</h1>
        <div class="tab-wrapper">
          <div class="tab-content" :class="{'is-active': tabParams === 'common'}" @click="clickTab('common')">{{$t('faq.common')}}</div>
          <div class="tab-content"
                :class="{'is-active': tabParams === 'technology'}"
                @click="clickTab('technology')">
                {{$t('faq.technology')}}
          </div>
        </div>
        <faqs :faqs="tabParams === 'common' ? faqsCommon : faqsTech"></faqs>
      </div>
    </section>
  </div>

</template>

<script>
import Faqs from '~/components/Faqs';

export default {
  components: {
    Faqs,
  },
  data() {
    return {
      tabParams: 'common',
    };
  },
  computed: {
    faqsCommon() {
      return this.convertFaqs('faq.questions.common');
    },
    faqsTech() {
      return this.convertFaqs('faq.questions.technology');
    },
    i18nOptions() {
      return {
        binance: this.$linkHtml('exchange.binance'),
        okex: this.$linkHtml('exchange.okex'),
        bittrex: this.$linkHtml('exchange.bittrex'),
        okexKr: this.$linkHtml('exchange.okexKr'),
        vitex: this.$linkHtml('vitex'),
        docsQuota: this.$linkHtml('docs.quota'),
        syraWP: this.$linkHtml('syraWP'),
        forumSbp: this.$linkHtml('forumContent.sbp'),
      };
    },
  },
  methods: {
    convertFaqs(path) {
      let faqs = this.$t(path);
      faqs = Array.isArray(faqs) ? faqs : [];
      return faqs.map((item, index) => {
        let { answer } = item;
        if (!answer) answer = [];
        if (Array.isArray(answer)) {
          answer = answer.map((item2, index2) => this.$t(`${path}.${index}.answer.${index2}`, this.i18nOptions));
        } else {
          answer = [this.$t(`${path}.${index}.answer`, this.i18nOptions)];
        }
        return {
          ...item,
          answer,
        };
      });
    },
    changeTab(tabName) {
      this.tabParams = tabName;
    },
    clickTab(str) {
      this.tabParams = str;
    },
  },
};
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";
  .section {
    padding-top: 92px;
    @include touch {
      padding-top: 25px;
    }

  }

</style>
