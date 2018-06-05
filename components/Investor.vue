<template>
  <section id="investor" class="section">
    <div class="container">
      <h2 class="title section-title inview1 animated fadeInDown delay-0-800">
        {{$t('investor.title')}}
      </h2>
      <div class="columns is-multiline is-centered is-mobile is-gapless">
        <div :key="item.key" v-for="(item, index) in list" class="column is-2-desktop is-3-touch">
          <a :href="item.url" target="_blank">
            <div class="img-wrapper" @mouseover="onHover(index)"
                 @mouseout="onOut(index)">
              <img v-show="index === hover" class="investor-logo" :src="item.logoActive" alt="">
              <img v-show="index !== hover" class="investor-logo" :src="item.logo" alt="">
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'investment',
      data () {
        return {
          hover: null,
          list: [
            {
              key: 'bitmain',
              logo: require('~/assets/images/investor/bitmain.png'),
              logoActive: require('~/assets/images/investor/bitmain-blue.png'),
              url: 'https://www.bitmain.com/'
            },
            {
              key: 'starwinCapital',
              logo: require('~/assets/images/investor/starwin.png'),
              logoActive: require('~/assets/images/investor/starwin-blue.png')
            },
            {
              key: 'nodeCapital',
              logo: require('~/assets/images/investor/node.png'),
              logoActive: require('~/assets/images/investor/node-blue.png'),
              url: 'http://www.nodecap.com/'
            },
            {
              key: 'linkvc',
              logo: require('~/assets/images/investor/linkvc.png'),
              logoActive: require('~/assets/images/investor/linkvc-blue.png'),
              url: 'http://www.linkvc.com/'
            },
            {
              key: 'genesisCapital',
              logo: require('~/assets/images/investor/genesis.png'),
              logoActive: require('~/assets/images/investor/genesis-blue.png')
            },
            {
              key: 'funcityCapital',
              logo: require('~/assets/images/investor/funcity.png'),
              logoActive: require('~/assets/images/investor/funcity-blue.png'),
              url: 'http://www.funcityholding.com/'
            },
            {
              key: 'helloCapital',
              logo: require('~/assets/images/investor/hello.png'),
              logoActive: require('~/assets/images/investor/hello-blue.png'),
              url: 'http://hellocapital.net/'
            },
            {
              key: 'zhizi',
              logo: require('~/assets/images/investor/zhizi.png'),
              logoActive: require('~/assets/images/investor/zhizi-blue.png')
            },
            {
              key: 'hotCapital',
              logo: require('~/assets/images/investor/hot.png'),
              logoActive: require('~/assets/images/investor/hot-blue.png')
            },
            {
              key: 'dazhi',
              logo: require('~/assets/images/investor/dazhi.png'),
              logoActive: require('~/assets/images/investor/dazhi-blue.png')
            },
            {
              key: 'handsome',
              logo: require('~/assets/images/investor/handsome.png'),
              logoActive: require('~/assets/images/investor/handsome-blue.png')
            },
            {
              key: 'hesheng',
              logo: require('~/assets/images/investor/hesheng.png'),
              logoActive: require('~/assets/images/investor/hesheng-blue.png')
            },
            {
              key: 'b100',
              logo: require('~/assets/images/investor/b100.png'),
              logoActive: require('~/assets/images/investor/b100-blue.png')
            },
            {
              key: 'bn',
              logo: require('~/assets/images/investor/bn.png'),
              logoActive: require('~/assets/images/investor/bn-blue.png')
            }
          ]
        }
      },
      methods: {
        onHover (index) {
          this.hover = index
        },
        onOut () {
          this.hover = null
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .section {
    @include touch {
      padding-top: 25px;
      padding-bottom: 25px;
      .title {
        font-size: 24px;
        line-height: 34px;
        margin-bottom: 30px;
      }
    }
  }

  .title {
    font-size:36px;
    font-family: $font-family-main;
    color:rgba(51,51,51,1);
    line-height:50px;
    text-align: center;
  }
  .column {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img-wrapper {
      flex-direction: row;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        cursor: pointer;
      }
      img {
        /*max-height: 180px;*/
        /*max-width: 180px;*/
      }
    }
  }
</style>
