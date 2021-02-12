<template>
  <section>
    <h1 class="product-title">{{ $t('product.title')}}</h1>
    <div class="container is-flex product__content">
      <div class="columns is-multiline">
        <div
          class="column is-6-widescreen is-6-tablet is-12-mobile"
          v-for="item in products"
          :key="item.key"
        >
          <div class="is-info">
            <img class="product__img"   :src="item.img" />
            <div class="product-desc">
              <div class="desc__title">{{ $t(`product.${item.key}.title`) }}</div>
              <div class="desc__subtitle">{{ $t(`product.${item.key}.subtitle`) }}</div>
              <a
                style="font-weight: 600"
                v-if="item.url"
                :href="item.url"
                target="_blank">
                {{ $t(`product.${item.key}.link`) }}
                <img src="~/assets/images/arrow_forward.svg"/>
              </a>
              <wallet-btn v-else style="justify-content:center;"></wallet-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
import walletBtn from '~/components/Products/walletBtn';

export default {
  components: {
    walletBtn,
  },
  data() {
    return {
      products: [
        {
          key: 'platform',
          url: 'https://vite.wiki/',
          img: this.$i18n.locale === 'zh' ? require('~/assets/images/product/platform.png') : require('~/assets/images/product/platform-1.jpg'),
        },
        {
          key: 'wallet',
          img: require('~/assets/images/product/wallet.png'),
        },
        {
          key: 'exchange',
          url: 'https://x.vite.net',
          img: require('~/assets/images/product/exchange.jpg'),
        },
        {
          key: 'pay',
          url: this.$i18n.locale === 'zh' ? 'https://vite.store/' : 'https://global.vite.store',
          img: require('~/assets/images/product/pay.png'),
        },
      ],
    };
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
  padding: 0 0 130px 0;
  .product__content {
    margin-top: 60px;
    @include mobile {
      justify-content: center;
    }
  }
  .product-title {
    text-align: center;
    padding-top: 109px;
    @include mobile {
      padding-top: 30px;
    }
  }
  .is-info {
    width: 450px;
    text-align: center;
     @include mobile {
      width: 335px;
      height: 100%;
    }
    .desc__title {
      font-size:24px;
      font-family:$font-family-title;
      font-weight:600;
      color:rgba(23,28,52,1);
      line-height:28px;
      margin: 31px 0 16px 0;
    }
    .desc__subtitle {
      margin-bottom: 12px;
      font-size:14px;
      font-family:$font-family-title;
      font-weight:600;
      color:rgba(145,154,163,1);
      line-height:18px;
    }
  }
  .product__img {
    width: 450px;
    height: 359px;
    @include mobile {
      width: 335px;
      height: 268px;
    }
  }

}
</style>
