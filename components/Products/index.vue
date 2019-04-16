<template>
  <section>
    <div class="products__platform">
      <div class="is-flex">
        <text-card 
          :title="$t('products.platform.title')" 
          :text-list="$t('products.platform.textList')"
          :outer-link="link.platform"
          style="margin-right: 25px;">
        </text-card>
        <Feature></Feature>
      </div>
      <Stats></Stats>
    </div>
    
    <div 
      class="products__common is-flex" 
      v-for="(item, index) in list" 
      :key="index">
      <img :src="require(`~/assets/images/product/products${index+1}.png`)" />
      <text-card 
        :class="`mt products__${item}-text`"
        :title="$t(`products.${item}.title`)" 
        :text-list="$t(`products.${item}.textList`)"
        :outer-link="link[item]"
        :key-str="item === 'wallet' ? item : ''">
      </text-card>
    </div>
  </section>
</template>

<script type="text/babel">
import textCard from './textCard';
import Feature from '~/components/feature';
import Stats from './Stats/index.vue';

export default {
  components: {
    textCard,
    Feature,
    Stats
  },
  data: function () {
    return {
      list: ['wallet', 'exchange', 'pay'],
      link: {
        platform: {
          name: this.$t('product.platform.subtitle'),
          url: 'https://vite.wiki/'
        },
        wallet: {
          name: this.$t('product.wallet.subtitle')
        },
        exchange: {
          name: this.$t('product.exchange.subtitle'),
          url: 'https://vitextest.vite.net/trade'
        },
        pay: {
          name: this.$t('product.pay.subtitle'),
          url: this.$i18n.locale === 'zh' ? 'https://vite.store/' : 'https://global.vite.store'
        }
      }
      
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
  img {
    width: 600px;
    height: 416px;
  }
  .products__common {
    margin-top: 90px; 
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
    img {
      align-self: center;
    }
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
