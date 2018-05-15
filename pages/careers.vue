<template>
  <div>
    <section class="faq-header">
      <div class="container">
        <div class="img-wrapper">
          <img src="~/assets/images/careers.png" alt="careers">
        </div>
        <h1>VITE Labs</h1>
        <h2>{{$t('careers.subtitle')}}</h2>
        <h3>{{$t('careers.contact')}}: hr@vite.org</h3>
      </div>
    </section>


    <section class="section">
      <div class="container">
        <div v-for="item in jdList" class="jd">
          <div class="title">
            <div class="line"></div>
            <h1>{{$t(`careers.jd.${item}.title`)}}</h1>
          </div>
          <div class="jd-item" v-for="jdKey in jdContentKey">
            <h3>{{$t(`careers.${jdKey}`)}}</h3>
            <ul>
              <li v-for="text in getContent(item, jdKey)">
                {{text}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          jdList: ['go', 'fe', 'ios', 'android', 'pm'],
          jdContentKey: ['desc', 'require', 'special']
        }
      },
      head () {
        let title = `${this.$t('nav.careers')} - ${this.$t('head.title')}`
        let description = this.$t('head.careersDesc')
        return {
          title,
          htmlAttrs: {
            lang: this.$i18n.locale
          },
          meta: [
            { hid: 'description', name: 'description', content: description },

            // Open Grapg
            { name: 'og:title', content: title, hid: 'og:title' },
            { name: 'og:description', content: description, hid: 'og:description' },
            { name: 'og:type', content: 'website', hid: 'og:type' },
            { name: 'og:url', content: 'https://vite.org', hid: 'og:url' },
            { name: 'og:image', content: 'https://www.vite.org/logo_appstore.png' },

            // Twitter Card
            { name: 'twitter:card', content: 'summary', hid: 'twitter:card' },
            { name: 'twitter:site', content: '@vitelabs', hid: 'twitter:site' },
            { name: 'twitter:title', content: title, hid: 'twitter:title' },
            { name: 'twitter:description', content: description, hid: 'twitter:description' },
            { name: 'twitter:image:alt', content: 'Vite Logo', hid: 'twitter:image:alt' },
            { name: 'twitter:image', content: 'https://www.vite.org/logo_appstore.png' }
          ]
        }
      },
      methods: {
        getContent (item, jdKey) {
          let arr = this.$t(`careers.jd.${item}.${jdKey}`)
          if (!arr) return []
          if (!Array.isArray(arr)) {
            return [arr]
          }
          return arr
        }
      }
    }
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";

  .faq-header {
    background: rgba(43,44,48,1);
    height: 340px;
    h1 {
      font-family: $font-family-main;
      padding-top: 59px;
      font-size:64px;
      color:rgba(144,146,154,1);
      line-height:90px;
    }
    h2 {
      font-family: $font-family-light;
      font-size:24px;
      color:rgba(144,146,154,1);
      line-height:33px;
    }
    h3 {
      font-size: 20px;
      font-family: $font-family-main;
      color: rgba(21,128,227,1);
      line-height: 28px;
      margin-top: 48px;
    }
    .img-wrapper {
      height: 270px;
      width: 270px;
      position: absolute;
      right: 0;
      top: 35px;
    }

    @include touch {
      padding: 20px 1.5rem;
      height: auto;
      text-align: center;
      .img-wrapper {
        position: relative;
        width: 100%;
        height: 135px;
        right: auto;
        top: auto;
        margin-bottom: 20px;
        img {
          width: 135px;
          height: 135px;
        }
      }
      h1 {
        font-size: 32px;
        line-height: 45px;
        padding-top: 0;
      }
      h2 {
        font-size: 14px;
        line-height: 20px;
        margin-top: 2px;
      }
      h3 {
        margin-top: 10px;
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 7px;
      }
    }
  }

  .section {
    font-family: $font-family-main;
    padding-top: 0;
    .title {
      padding-top: 60px;
      margin-bottom: 0;
      .line {
        width:96px;
        height:7px;
        background:rgba(21,128,227,1);
        margin-bottom: 20px;
      }
      h1 {
        font-size:30px;
        color:rgba(21,128,227,1);
        line-height:42px;
      }
      @include touch {
        padding-top: 25px;
        .line {
          height: 4px;
          width: 48px;
          margin-bottom: 5px;
        }
        h1 {
          font-size: 20px;
          line-height: 28px;
        }
      }
    }
    .jd-item {
      & > h3 {
        color: #03a9f4;
        padding: 30px 0 20px 0;
        font-size:20px;
        font-family: $font-family-title;
        color:rgba(51,51,51,1);
        line-height:28px;
      }
      ul {
        list-style: inside;
        & > li {
          margin-left: 10px;
          font-size: 16px;
          font-family: $font-family-light;
          color: rgba(51,51,51,1);
          line-height: 38px;
        }
      }
      @include touch {
        & > h3 {
          padding: 20px 0 10px 0;
          font-size: 15px;
          line-height: 21px;
        }
        ul {
          & > li {
            font-size: 14px;
            line-height: 27px;
          }
        }
      }
    }
  }
</style>
