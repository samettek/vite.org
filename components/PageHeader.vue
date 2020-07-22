<template>
    <section class="page-header" :class="[`page-header-${name}`]">
        <div class="container padding-until-desktop">
            <h1>{{ $t(`${name}.title`) }}</h1>
        </div>
        <div class="page-header__content">
            <div class="container padding-until-desktop">
              <div class="page-header__desc">
                  <h2>{{ $t(`${name}.subTitle`) }}</h2>
                  <div class="page-header__text">
                    {{ $t(`${name}.desc`) }}
                  </div>
                  <div v-if="name === 'whatIsVite'" class="page-header__btnGroup">
                    <WhitePaper class="wp-btn"></WhitePaper>
                  </div>
              </div>
              <div class="page-header__img" @click="onImgClick">
                <img v-if="name === 'whatIsVite'" src="~/assets/images/home/whatIsVite.png" alt="What is vite">
                <img v-if="name === 'token'" src="~/assets/images/home/viteToken.svg" alt="What is vite">
                <img v-if="name === 'whatIsVite'" class="play-icon"  src="~assets/images/video/play.svg"/>
              </div>
            </div>
        </div>
    </section>
</template>

<script>
import WhitePaper from '~/components/WhitePaper';
import player from './play';

export default {
  components: {
    WhitePaper,
  },
  props: {
    name: {
      default: 'home',
      type: String,
    },
  },
  methods: {
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

.page-header {
  h1 {
    @include title();
    font-size: 44px;
    line-height: 62px;
    margin-bottom: 18px;
  }

  &__content {
    background-image: url("~assets/images/whatIsVite/whatIsVite-bg.png");
    background-size: cover;
    .container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__desc {
    padding-top: 86px;
    padding-bottom: 86px;
    color: #ffffff;
    width: 62.5%;
    max-width: 500px;
    h2 {
      font-size: 30px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      line-height: 34px;
    }
  }
  &__text {
    margin: 40px 0;
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    line-height: 30px;
  }

  &__btnGroup {
    .wp-btn {
      text-align: center;
      width: auto;
      display: inline-block;
      cursor: pointer;
    }
  }

  &__img {
    position: relative;
    width: 37.5%;
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

  &-whatIsVite {
    .page-header__content {
      background-size: cover;
      background-repeat: no-repeat;
    }
    .page-header__img {
      .play-icon {
        cursor: pointer;
      }
    }
  }

  @include until($desktop) {
    h1 {
      padding: 0 10px;
    }
    &__content {
      padding-bottom: 30px;
      .container {
        flex-direction: column;
        align-items: center;
      }
    }
    &__desc {
      width: 100%;
      padding: 60px 0 0 0;
      max-width: unset;
    }
    &__img {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
