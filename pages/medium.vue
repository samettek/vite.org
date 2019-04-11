<template>
  <section class="section">
    <div class="container">
      <h1>{{$t('medium.title')}}</h1>
      <div class="columns">
        <div
          class="column is-6-widescreen is-12-mobile"
          v-for="item in companys"
          :key="item.key">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },
  data: function() {
    return {
      companys: [
        {
          key: 'okex',
          url: 'https://www.okex.com/okcapital',
          img: require('~/assets/images/partnership/okex.svg'),
          text: ['text1', 'text2']
        },
        {
          key: 'mxbank',
          url: 'https://www.mxbank.io/',
          img: require('~/assets/images/partnership/mxbank.svg'),
          text: ['text1', 'text2']
        },
        {
          key: 'secbit',
          url: 'https://secbit.io/',
          img: require('~/assets/images/partnership/logo.svg'),
          text: ['text1', 'text2']
        },
        {
          key: 'achpay',
          img: require('~/assets/images/partnership/ACHPAYlogo.svg'),
          text: ['text1']
        }
      ]
    };
  },
  methods: {}
};
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
@import "assets/vars.scss";
.section {
  padding-top: 92px;
  color: white;
 
}
</style>
