<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container" v-in-viewport.once>
          <h1 class="title inview1 delay-0-700 animated fadeInDown">
            {{$t('careers.title')}}
          </h1>
          <h2 class="subtitle inview1 delay-0-700 animated fadeInUp">
            {{$t('careers.subtitle')}}
          </h2>
          <p class="contact inview1 delay-0-700 animated fadeInUp">{{$t('careers.contact')}} hr@vite.org</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div v-for="item in jdList" class="jd">
          <h1 class="title">{{$t(`careers.jd.${item}.title`)}}</h1>
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
          jdList: ['pm', 'java', 'go', 'fe', 'ios', 'android'],
          jdContentKey: ['desc', 'require', 'special']
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

  .hero {
    .container {
      .title, .subtitle {
        color: white;
        font-family: $font-family-main;
        text-align: center;
      }
      .title {
        font-weight: 200;
        font-family: $font-family-light;
        font-size: 2.5rem;
      }
      .subtitle {
        margin-top: 1rem;
      }
      .contact {
        text-align: center;
        color: rgba(255,255,255,0.8);
      }
    }
  }
  .section {
    flex-direction: row;
    align-items: center;
    .container {
      max-width: 900px;
    }
  }

  .jd {
    font-family: $font-family-main;
    .title {
      padding: 3rem 1rem 1rem 0;
      font-size: (40rem/16);
      font-weight: 300;
    }
    .jd-item {
      & > h3 {
        font-size: (20rem/16);
        padding: 1rem 1rem 1rem 0;
        color: #03a9f4;
      }
      ul {
        list-style: inside;
        & > li {
          margin-left: (10rem/16);
          line-height: 2rem;
        }
      }
    }
  }
</style>
