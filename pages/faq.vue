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
    Faqs
  },
  data() {
    return {
      tabParams: 'common'
    };
  },
  computed: {
    faqsCommon () {
      let faqs = this.$t('faq.questions.common');
      return this.convertFaqs(faqs);
    },
    faqsTech() {
      let faqs = this.$t('faq.questions.technology');
      return this.convertFaqs(faqs);
    }
  },
  methods: {
    convertFaqs(faqs) {
      faqs = Array.isArray(faqs) ? faqs : [];
      return faqs.map(item => {
        let {answer} = item;
        if (!answer) answer = [];
        if (!Array.isArray(answer)) answer = [answer];
        return {
          ...item,
          answer
        };
      });
    },
    changeTab(tabName) {
      this.tabParams = tabName;
    },
    clickTab(str) {
      this.tabParams = str;
    }
  }
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
