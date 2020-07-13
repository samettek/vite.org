<template>
  <section class="home-section" :class="[`home-section-${name}`]">
    <div class="container home-section__container is-flex">
      <div class="home-section__info">
        <h1>{{title}}</h1>
        <div class="home-section__text">{{$t(`home.sections.${name}.desc`)}}</div>
        <div class="home-section__btn-group">
          <a
            v-for="item in buttons"
            :key="item.name"
            :href="href"
            @click="onClick(item)"
          >{{$t(`home.sections.${name}.btnGroup.${item.name}`)}}</a>
        </div>
      </div>
      <div class="home-section__img" @click="onImgClick">
        <div>
            <img :src="imgUrl" :alt="title" />
            <template v-if="name === 'product'">
                <span class="product-tip"
                    v-for="item in productList"
                    :style="item.style"
                    :key="item.name">{{$t(`home.sections.${name}.others.${item.name}`)}}</span>
            </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const imgUrls = [
  {
    name: 'whatIsVite',
    url: require('~/assets/images/home/whatIsVite.png'),
  },
  {
    name: 'product',
    url: require('~/assets/images/home/product.png'),
  },
];

const productList = [
  {
    name: 'vitex',
    url: 'https://vitex.net',
    style: {
      top: '3.45%',
      right: '96.5%',
    },
  },
  {
    name: 'explorer',
    url: 'https://vitex.net',
    style: {
      top: '46.2%',
      right: '103%',
    },
  },
  {
    name: 'webWallet',
    url: 'https://vitex.net',
    style: {
      bottom: '4.5%',
      right: '96.5%',
    },
  },
  {
    name: 'viteApp',
    url: 'https://vitex.net',
    style: {
      top: '3.45%',
      left: '96.5%',
      textAlign: 'left',
    },
  },
  {
    name: 'vitePlus',
    url: 'https://vitex.net',
    style: {
      top: '46.2%',
      left: '103%',
      textAlign: 'left',
    },
  },
  {
    name: 'forum',
    url: 'https://vitex.net',
    style: {
      bottom: '4.5%',
      left: '96.5%',
      textAlign: 'left',
    },
  },
];

export default {
  props: {
    name: {
      type: String,
      default: null,
    },
    buttons: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      productList,
    };
  },
  computed: {
    btnList() {
      return this.buttons.map((item) => ({
        ...item,
        isInnerUrl: typeof item === 'object',
        href: typeof item === 'object' ? 'javascrpt:void(0);' : item.url,
      }));
    },
    imgUrl() {
      const img = imgUrls.find((item) => item.name === this.name);
      return img && img.url;
    },
    title() {
      return this.$t(`home.sections.${this.name}.title`);
    },
  },
  methods: {
    onClick(item) {
      if (item.isInnerUrl) {
        this.$router.push(item.url);
      }
    },
    onImgClick() {
      console.log('clicked');
    },
  },
};
</script>

<style lang="scss" scoped>
.home-section {
   .home-section__container {
        flex-direction: column;
  }
  .home-section__info {
    h1 {
      display: block;
      height: 48px;
      font-size: 44px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #171c34;
      line-height: 48px;
      width: 100%;
      margin-bottom: 44px;
    }
  }
  .home-section__text {
    margin: 40px 0;
    height: 90px;
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #54565a;
    line-height: 30px;
  }
  .home-section__btn-group {
      width: 100%;
      & > a {
            width: auto;
            height: 54px;
            background: #007aff;
            border-radius: 5px;
            box-shadow: 0px 8px 34px 0px;
            display: inline-block;
            color: #fff;
            font-size: 16px;
            padding: 17px 53px;
            line-height: 20px;
            &:hover {
                font-weight: 600;
            }
      }
  }

  &-whatIsVite {
    .home-section__container {
        flex-direction: row;
    }
    .home-section__info {
      width: 62.5%;
      h1 {
        margin-top: 149px;
      }
    }
    .home-section__text {
      max-width: 500px;
    }
    .home-section__img {
      width: 37.5%;
      margin-top: 131px;
      max-width: 450px;
      text-align: right;
    }
  }

  &-product {
    background: #f5faff;
    margin-top: 90px;
    .home-section__info {
        width: 100%;
        text-align: center;
        h1 {
            text-align: center;
            margin-top: 90px;
        }
        .home-section__text {
            text-align: center;
        }
    }
    .home-section__img {
        width: 100%;
        text-align: center;
        margin: 90px 0;
        & > div {
            max-width: 702px;
            display: inline-block;
            position: relative;
            & > span {
                height: 24px;
                font-size: 20px;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                text-align: right;
                color: #171c34;
                line-height: 24px;
                width: 120px;
                cursor: pointer;
            }
        }
        .product-tip {
            position: absolute;
        }
    }
  }
}
</style>
