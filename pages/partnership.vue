<template>
  <section class="section">
    <div class="container">
      <h1>合作</h1>
      <div class="columns is-multiline partner">
        <div class="column is-6-widescreen is-12-mobile" v-for="item in companys" :key="item.key">
          <div class="is-info">
            <a :href="item.url"><img :src="item.img"/></a>
            <div class="company-desc">
              <div v-for="(tx, index) in item.text" :key="index" class="company-item"> {{ $t(`partnership.${item.key}.desc.${tx}`) }}</div>
            </div>
          </div>
        </div>
      </div>
      <mailto-btn :text="'合作请联系'" :href="`mailto:partnerships@vite.org`"></mailto-btn>
    </div>
  </section>
</template>

<script>
import MailtoBtn from '~/components/MailtoBtn'

export default {
  components: {
    MailtoBtn
  },
  data: function () {
    return {
      companys: [{
        key: 'okex',
        url: 'https://www.okex.com/okcapital',
        img: require('~/assets/images/partnership/okex.svg'),
        text: ['text1', 'text2']
      }, {
        key: 'mxbank',
        url: 'https://www.mxbank.io/',
        img: require('~/assets/images/partnership/mxbank.svg'),
        text: ['text1', 'text2']
      }, {
        key: 'secbit',
        url: 'https://secbit.io/',
        img: require('~/assets/images/partnership/logo.svg'),
        text: ['text1', 'text2']
      }, {
        key: 'achpay',
        img: require('~/assets/images/partnership/ACHPAYlogo.svg'),
        text: ['text1']
      }]
    }
  },
  methods: {}
}
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";
  .section {
    padding-top: 92px;
    color: white;
    .partner {
      margin-top: 60px;
      margin-bottom: 80px; 
    }
    .is-info {
      min-width: 510px;
      height: 262px;
      margin: 0 auto;
      padding: 30px;
      box-sizing: border-box;
      background: #223260;
      box-shadow: 0 4px 24px 0 rgba(211,234,255,0.53);
      font-size: 14px;
      color: #F4F9FB;
      text-align: justify;
      line-height: 20px;
      .company-desc {
        margin-top: 30px;
        .company-item {
          &:first-child {
            margin-bottom: 15px; 
          }
        }
        
      }
    }
  }
  

</style>
