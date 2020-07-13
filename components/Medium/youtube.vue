<template>
  <div class="youtube__wrapper" id="video">
    <div class="container">
      <div class="youtube__content">
        <div class="is-flex" style="justify-content: space-between">
          <sub-title :title="title" style="color: white"></sub-title>
          <a :href="href" target="_blank">
            <div class="youtube__more">
              <img src="~/assets/images/medium/arrow.svg"/>
            </div>
          </a>
        </div>
        <div class="is-flex youtube__vedio" v-if="$i18n.locale === 'zh'">
          <iframe frameborder="0" class="iframe" src="https://v.qq.com/txp/iframe/player.html?vid=i0861u34sbz" allowFullScreen="true"></iframe>
          <iframe frameborder="0" class="iframe" src="https://v.qq.com/txp/iframe/player.html?vid=n0859ugbd4s" allowFullScreen="true"></iframe>
          <iframe frameborder="0" class="iframe" src="https://v.qq.com/txp/iframe/player.html?vid=i08541rsi3e" allowFullScreen="true"></iframe>
        </div>
        <div class="is-flex youtube__vedio" v-else>
          <iframe class="iframe" src="https://www.youtube.com/embed/bXiGDTr0-wI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe class="iframe" src="https://www.youtube.com/embed/-f_CiqfjGJU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe class="iframe" src="https://www.youtube.com/embed/FRvdP_KcNRk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import subTitle from '~/components/subTitle';

export default {
  components: {
    subTitle,
  },
  computed: {
    title() {
      return this.$i18n.locale === 'zh'
        ? this.$t('medium.tencent.title')
        : this.$t('medium.youtube.title');
    },
    href() {
      return this.$i18n.locale === 'zh'
        ? 'http://v.qq.com/vplus/231ba235da67faeb91069f1800862a96'
        : 'https://www.youtube.com/channel/UC8qft2rEzBnP9yJOGdsJBVg/videos';
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.youtube__wrapper {
  margin-top: 18px;
  background: url("~assets/images/medium/bg.jpg");
  background-size: cover;
  .youtube__content {
    box-sizing: border-box;
    padding: 40px 0 84px 0;
    @include mobile {
      padding: 20px 0 0px 0;
    }
  }
  .youtube__more {
    width: 50px;
    height: 28px;
    text-align: right;
    img {
      margin-top: 4px;
    }
  }
  .youtube__vedio {
    justify-content: space-between;
    margin-top:30px;
    @include mobile {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .iframe {
      width: 320px;
      height:218px;
      @include mobile {
        margin-bottom: 20px;
      }
    }
  }
}

</style>
