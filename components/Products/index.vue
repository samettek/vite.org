<template>
  <section>
    <text-card 
      :title="$t('products.platform.title')" 
      :text-list="$t('products.platform.textList')">
    </text-card>

    <div class="mt products__wallet is-flex">
      <img src="~/assets/images/product/products1.png"/>
      <text-card 
        class="mt products__wallet-text"
        :title="$t('products.wallet.title')" 
        :text-list="$t('products.wallet.textList')"
        keyStr="wallet">
      </text-card>
    </div>
    <div class="mt products__exchange is-flex">
      <text-card 
        class="products__exchange-text"
        :title="$t('products.exchange.title')" 
        :text-list="$t('products.exchange.textList')">
      </text-card>
      <img src="~/assets/images/product/products2.png"/>
    </div>
    <div class="mt products__pay is-flex">
      <img src="~/assets/images/product/products3.png"/>
      <text-card 
        class="products__pay-text"
        :title="$t('products.pay.title')" 
        :text-list="$t('products.pay.textList')">
      </text-card>
    </div>
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
  .mt {
    margin-top: 90px; 
  }
  img {
    width: 600px;
    height: 416px;
  }
  .products__wallet-text {
    margin-left: 50px; 
  }
  .products__exchange-text {
    margin-right: 50px; 
  }
  .products__pay-text {
    margin-left: 50px; 
  }
}
</style>
