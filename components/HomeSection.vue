<template>
  <section class="home-section" :class="[`home-section-${name}`, center ? 'home-section_center' : '']">
    <div class="container home-section__container is-flex">
      <div class="home-section__info">
        <h1 :id="name">{{title}}</h1>
        <div class="home-section__text">
          <template v-for="(item, index) in descList">
            <div :key="index" v-html="item"></div>
          </template>
        </div>
        <div class="home-section__btn-group">
          <template v-for="item in btnList">
            <nuxt-link v-if="item.isInnerUrl"
              tag="a"
              :to="localePath(item.url)"
              :key="item.name">{{$t(`home.sections.${name}.btnGroup.${item.name}`)}}</nuxt-link>
            <a v-else :key="item.name" :href="item.url" target="_blank">{{$t(`home.sections.${name}.btnGroup.${item.name}`)}}</a>
          </template>
        </div>
      </div>
      <div class="home-section__img" @click="onImgClick">
        <template v-if="name === 'ecosystem'">
            <div v-for="(item, index) in ecosystemList" :key="index" class="ecosystem__item">
              <div v-if="item.name === 'line'" class="ecosystem__line"></div>
              <template v-else>
                <div class="ecosystem__img">
                  <img :src="item.img" :alt="$t(`home.sections.ecosystem.list.${item.name}`)">
                </div>
                <div class="ecosystem__text">{{$t(`home.sections.ecosystem.list.${item.name}`)}}</div>
              </template>
            </div>
        </template>

        <div v-else-if="imgUrl">
            <img :src="imgUrl" :alt="title" />
            <template v-if="name === 'product'">
              <a
                class="product-tip"
                v-for="item in productList"
                :style="item.style"
                :href="item.url"
                target="_blank"
                :key="item.name"
              >{{$t(`home.sections.${name}.others.${item.name}`)}}</a>
            </template>

            <template v-if="name === 'whatIsVite'">
              <img class="play-icon"  src="~assets/images/video/play.svg"/>
            </template>
        </div>
        <slot v-else-if="imgRender" name="img"></slot>
      </div>
    </div>
  </section>
</template>

<script>
import player from './play';

const imgUrls = [
  {
    name: 'whatIsVite',
    url: require('~/assets/images/home/whatIsVite.png'),
  },
  {
    name: 'product',
    url: require('~/assets/images/home/product.png'),
  },
  {
    name: 'development',
    url: require('~/assets/images/home/developer.png'),
  },
  {
    name: 'wallet',
    url: require('~/assets/images/home/wallet.png'),
  },
  {
    name: 'vitex',
    url: require('~/assets/images/home/vitex.png'),
  },
  {
    name: 'dapp',
    url: require('~/assets/images/ecosystem/dapp.png'),
  },
  {
    name: 'devTool',
    url: require('~/assets/images/ecosystem/devTool.png'),
  },
  {
    name: 'community',
    url: require('~/assets/images/ecosystem/community.png'),
  },
  {
    name: 'syracoin',
    url: require('~/assets/images/ecosystem/syracoin.png'),
  },
  {
    name: 'vitepay',
    url: require('~/assets/images/ecosystem/vitestore.png'),
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
    url: 'https://vitescan.io',
    style: {
      top: '46.2%',
      right: '103%',
    },
  },
  {
    name: 'webWallet',
    url: 'https://x.vite.net',
    style: {
      bottom: '4.5%',
      right: '96.5%',
    },
  },
  {
    name: 'viteApp',
    url: 'https://app.vite.net',
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
    url: 'https://forum.vite.net',
    style: {
      bottom: '4.5%',
      left: '96.5%',
      textAlign: 'left',
    },
  },
];

const ecosystemList = [
  {
    name: 'dapp',
    url: '',
    img: require('~/assets/images/home/dapp.png'),
  },
  {
    name: 'line',
  },
  {
    name: 'cityToken',
    url: '',
    img: require('~/assets/images/home/cityToken.png'),
  },
  {
    name: 'line',
  },
  {
    name: 'vitePay',
    url: '',
    img: require('~/assets/images/home/vitePay.png'),
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
    render: {
      type: Array,
      default: () => [],
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      productList,
      ecosystemList,
    };
  },
  computed: {
    btnList() {
      return this.buttons.map((item) => ({
        ...item,
        isInnerUrl: typeof item.url === 'object',
      }));
    },
    imgUrl() {
      const img = imgUrls.find((item) => item.name === this.name);
      return img && img.url;
    },
    title() {
      return this.$t(`home.sections.${this.name}.title`);
    },
    imgRender() {
      return this.render.indexOf('img') > -1;
    },
    descList() {
      const desc = this.$t(`home.sections.${this.name}.desc`);
      if (Array.isArray(desc)) {
        return desc;
      }
      return [desc];
    },
  },
  methods: {
    onClick(item) {
      if (item.isInnerUrl) {
        return this.$router.push(item.url);
      }
      return null;
    },
    onImgClick() {
      if (this.name === 'whatIsVite') {
        this.$i18n.locale === 'zh'
          ? player({ src: 'http://1257137467.vod2.myqcloud.com/c9d24a0dvodcq1257137467/bc96b2315285890788090827060/BdwEe78ChG8A.mp4' })
          : player({ src: '', iframeSrc: 'https://www.youtube.com/embed/FRvdP_KcNRk' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";

$desc-max-width: 600px;

@mixin center {
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
}

.home-section {
  .home-section__container {
    flex-direction: row;
  }
  .home-section__info {
    h1 {
      display: block;
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
    margin: 40px 0 50px 0;
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #54565a;
    line-height: 22px;
    & > div {
      margin: 8px 0;
    }
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
      margin-right: 20px;
      margin-top: 20px;
    }
  }
  &_center {
    .home-section__info {
      h1 {
        text-align: center;
      }
    }
    .home-section__text {
      text-align: center;
    }
    .home-section__btn-group {
      text-align: center;
    }
    .home-section__container {
      flex-direction: column;
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
      max-width: $desc-max-width;
    }
    .home-section__img {
      width: 37.5%;
      margin-top: 131px;
      max-width: 450px;
      text-align: right;
      & > div {
        position: relative;
      }
      &:hover {
        cursor: pointer;
      }
      .play-icon {
        position: absolute;
        width: 40px;
        height: 40px;
        top: 50%;
        margin-top: -20px;
        left: 50%;
        margin-left: -20px;
      }
    }
  }

  &-product {
    background: #f5faff;
    margin-top: 90px;
    @include center();
    .home-section__info {
      h1 {
        margin-top: 90px;
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
        .product-tip {
          font-size: 20px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          text-align: right;
          color: #171c34;
          line-height: 24px;
          width: 120px;
          position: absolute;
          cursor: pointer;
          &:hover {
            color: #007aff;
          }
        }
      }
    }

    @include until($desktop) {
      .home-section__img {
        margin: 65px 0;
        & > div {
          max-width: 70%;
          .product-tip {
            font-size: 15px;
          }
        }
      }
    }

    @include until($tablet) {
      .home-section__img {
        & > div {
          max-width: 60%;
          .product-tip {
            font-size: 12px;
            line-height: 12px;
          }
        }
      }
    }
  }

  &-ecosystem {
    text-align: center;
    padding-bottom: 140px;
    background: right/15% url('~assets/images/home/home_triangle.png') no-repeat;
    @include center();
    .home-section__container {
      align-items: center;
    }
    .home-section__info {
      h1 {
        margin-top: 140px;
      }
    }
    .home-section__img {
      display: flex;
      flex-direction: row;
      margin-top: 100px;
      width: 100%;
      padding: 0 20px;
      .ecosystem__item {
        flex: 1;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .ecosystem__text {
        font-size: 20px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #171c34;
        line-height: 24px;
        text-align: center;
      }
      .ecosystem__img {
        display: block;
        margin-bottom: 30px;
        text-align: center;
        img {
          display: inline-block;
          max-height: 80px;
        }
      }
      .ecosystem__line {
        border:1px dashed #007aff;
        width:80px;
        height:1px;
        margin-top: 40px;
        display: inline-block;
      }
    }

    @include until($desktop) {
      padding-bottom: 40px;
      .home-section__img {
        margin-top: 60px;
      }
    }
    @include until($tablet) {
      .home-section__img {
        img {
          max-height: 40px;
        }
        .ecosystem__line {
          margin-top: 20px;
          width: 30px;
        }
      }
    }
  }

  &-development {
    text-align: center;
    background-color: #f5faff;
    padding-bottom: 70px;
    @include center();
  }

  &-wallet {
    .home-section__container {
      flex-direction: row;
    }
    .home-section__info {
      width: 62.5%;
      h1 {
        margin-top: 149px;
      }
      margin-bottom: 50px;
    }
    .home-section__text {
      max-width: $desc-max-width;
    }
    .home-section__img {
      width: 31.25%;
      margin-top: 131px;
      max-width: 375px;
      text-align: right;
    }
  }

  &-vitex {
    @include center();
    background-color: #f5faff;
    margin-bottom: 25%;
    .home-section__img {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 60px;
      & > div {
        max-width: 690px;
        text-align: center;
        img {
          margin-bottom: -50%;
        }
      }
    }

    @include until($desktop) {
      margin-bottom: 45%;
    }
  }

  &-dapp, &-devTool, &-community, &-syracoin {
    .home-section__container {
      flex-direction: row;
    }
    .home-section__info {
      flex: 1;
      padding-top: 150px;
      padding-bottom: 150px;
    }
    .home-section__text {
      max-width: $desc-max-width;
    }
    .home-section__img {
      flex: 1;
      margin-top: 131px;
      max-width: 532px;
      text-align: right;
    }
  }
  &-dapp {
    .home-section__img {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      & > div {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
      }
    }
  }
  &-devTool {
    background-color: #F5FAFF;
    .home-section__info {
      flex: 1;
      padding-top: 90px;
      padding-bottom: 90px;
    }
    .home-section__img {
      margin-top: 58px;
    }
  }

  &-incentive {
    padding: 150px 0;
  }

  &-community {
    background-color: #F5FAFF;
    .home-section__img {
      max-width: 388px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: unset;
    }
    .home-section__info {
      padding-top: 75px;
      padding-bottom: 75px;
    }
  }

  &-syracoin {
    .home-section__img {
      max-width: 375px;
    }
  }

  &-vitepay {
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #F5FAFF;
    margin-bottom: 200px;
    .home-section__img {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 60px;
      & > div {
        max-width: 700px;
        text-align: center;
        img {
          margin-bottom: -200px;
        }
      }
    }
  }

  &-joinDev {
    padding-top: 150px;
    padding-bottom: 120px;
  }

  @include until($desktop) {
    padding-left: 15px;
    padding-right: 15px;
    .home-section__container {
      flex-direction: column;
      align-items: center;
    }
    .home-section__info {
      width: 100%;
      h1 {
        margin-bottom: 0;
        margin-top: 60px;
        line-height: 24px;
        font-size: 20px;
        text-align: center;
      }
    }
    .home-section__text {
      margin: 20px 0;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      width: 100%;
      max-width: 100%;
    }
    .home-section__btn-group {
      text-align: center;
      & > a {
        height: 30px;
        background: #007aff;
        border-radius: 2px;
        line-height: 20px;
        padding: 5px 15px;
        font-size: 16px;
        font-weight: 600;
        margin: 10px 10px 0 10px;
      }
    }
    .home-section__img {
      width: 100%;
      margin-top: 60px;
      .ecosystem__text {
        font-size: 14px;
      }
    }
    &-dapp, &-devTool, &-community, &-syracoin, &-vitepay{
      .home-section__info {
        padding-top: 30px;
        padding-bottom: 30px;
      }
      .home-section__info {
        h1 {
          margin-top: 30px;
        }
      }
    }
    &-devTool {
      background-color: #F5FAFF;
      .home-section__info {
        flex: 1;
        padding-top: 30px;
        padding-bottom: 30px;
      }
      .home-section__img {
        margin-top: 58px;
      }
    }
    &-incentive {
      padding: 0 15px;
    }
    &-community {
      padding: 0 15px;
    }
    &-vitepay {
      padding: 0 15px;
    }
    &-joinDev {
      padding: 30px 15px;
    }
  }
}
</style>
