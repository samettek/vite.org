<template>
  <section>
    <h1 class="product-title">{{ $t('product.title')}}</h1>
    <div class="container is-flex">
      <div class="columns is-multiline">
        <div
          class="column is-6-widescreen is-6-tablet is-12-mobile"
          v-for="item in products"
          :key="item.key"
        >
          <div class="is-info">
            <img :src="item.img" />
            <div class="product-desc">
              <div class="title">{{ $t(`product.${item.key}.title`) }}</div>
              <div>{{ $t(`product.${item.key}.subtitle`) }}</div>
              <a 
                v-if="item.url"
                :href="item.url"
                target="_blank"> 
                {{ $t(`product.${item.key}.link`) }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
export default {
  components: {},
  data: function () {
    return {
      products: [
        {
          key: 'platform',
          url: 'https://explorer.vite.net',
          img: require('~/assets/images/product/platform.png'),
        },
        {
          key: 'wallet',
          img: require('~/assets/images/product/wallet.png'),
        },
        {
          key: 'exchange',
          url: 'https://vitextest.vite.net/trade',
          img: require('~/assets/images/product/exchange.png'),
        },
        {
          key: 'pay',
          url: this.$i18n.locale === 'zh' ? 'https://vite.store/' : 'https://global.vite.store',
          img: require('~/assets/images/product/pay.png'),
        }
      ]
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
  // @include mobile {
  //   height: 360px;
  // }
  .product-title {
    text-align: center;
    padding-top: 109px;
    @include mobile {
      padding-top: 30px;
    }
  }
  img {
    width: 450px;
    height: 359px;
    @include mobile {
      width: 335px;
      height: 268px;
    }
  }
  
 
}
</style>
