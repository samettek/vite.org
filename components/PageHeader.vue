<template>
    <section class="page-header" :class="[`page-header-${name}`]">
        <div class="container padding-until-desktop">
            <h1 v-html="$t(`${name}.title`)"></h1>
        </div>
        <div class="page-header__content">
            <div class="container padding-until-desktop">
              <div class="page-header__desc">
                  <h2>{{ $t(`${name}.subTitle`) }}</h2>
                  <div class="page-header__text">
                    <p v-for="(item, index) in descList" :key="index" v-html="item"></p>
                  </div>
                  <div v-if="name === 'whatIsVite'" class="page-header__btnGroup">
                    <WhitePaper class="wp-btn"></WhitePaper>
                  </div>
                  <div v-if="btnList.length" class="page-header__btnGroup">
                    <template v-for="item in btnList">
                      <button v-if="item.isInnerUrl" :key="item.name" class="button section-button section-button_white" @click="onBtnClick(item)">
                        {{$t(`${name}.btnGroup.${item.name}`)}}
                      </button>
                      <a v-else :key="item.name" class="button section-button section-button_white" :href="item.url" target="_blank">{{$t(`${name}.btnGroup.${item.name}`)}}</a>
                    </template>
                  </div>
              </div>
              <div class="page-header__img" @click="onImgClick">
                <img v-if="name === 'whatIsVite'" src="~/assets/images/home/whatIsVite.png" alt="What is vite">
                <img v-if="name === 'token'" src="~/assets/images/home/viteToken.svg" alt="What is vite">
                <img v-if="name === 'community'" src="~/assets/images/ecosystem/community.png" alt="Vite Community">

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
    buttons: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    btnList() {
      return this.buttons.map((item) => ({
        ...item,
        isInnerUrl: typeof item.url === 'object',
      }));
    },
    descList() {
      const list = this.$t(`${this.name}.desc`);
      if (!Array.isArray(list)) {
        return [list];
      }
      return list;
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
    onBtnClick(item) {
      if (typeof item.url === 'object') {
        this.$router.push(item);
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
    font-size: 60px;
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
    h2 {
      font-size: 30px;
      @include title();
      line-height: 34px;
      color: white;
    }
  }
  &__text {
    margin: 40px 0;
    font-size: 18px;
    font-family: $font-family-light;
    line-height: 30px;
    max-width: 600px;
    p {
      margin-top: 10px;
    }
  }

  &__btnGroup {
    .wp-btn {
      text-align: center;
      width: auto;
      display: inline-block;
      cursor: pointer;
      margin: 15px;
    }
    margin: -15px;
    .button {
      margin: 15px;
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

  &-community {
    .page-header__desc {
      padding-top: 150px;
      padding-bottom: 150px;
    }
    .page-header__img {
      img {
        max-width: 388px;
      }
    }
  }

  &-ecosystem {
    .page-header__content {
      background-image: url("~assets/images/bg/ecosystem.png");
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
