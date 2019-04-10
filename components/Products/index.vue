<template>
  <section>
    <text-card :title="$t('products.platform.title')" :text-list="$t('products.platform.textList')"></text-card>
    <text-card :title="$t('products.wallet.title')" :text-list="$t('products.wallet.textList')"></text-card>
    <text-card :title="$t('products.exchange.title')" :text-list="$t('products.exchange.textList')"></text-card>
    <text-card :title="$t('products.pay.title')" :text-list="$t('products.pay.textList')"></text-card>
  </section>
</template>

<script type="text/babel">
import textCard from './textCard';

export default {
  components: {
    textCard
  },
  data: function () {
    return {
     
    };
  },
  computed: {
    
  },
  methods: {
    
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
 
}
</style>
