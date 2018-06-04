<template>
  <section id="investor" class="section">
    <div class="container">
      <h2 class="title section-title inview1 animated fadeInDown delay-0-800">
        {{$t('investor.title')}}
      </h2>
      <div class="columns is-multiline is-centered is-mobile">
        <div :key="item.key" v-for="item in list" class="column is-2-desktop is-4-touch">
          <div class="img-wrapper">
            <img class="investor-logo" :src="item.logo" alt="">
          </div>
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
          list: [
            {
              key: 'bitmain',
              logo: require('~/assets/images/investor/bitmain-black.png')
            },
            // {
            //   key: 'starwinCapital',
            //   logo: require('~/assets/images/investor/starwin-capital.jpg')
            // },
            {
              key: 'nodeCapital',
              logo: require('~/assets/images/investor/node-capital-black.png')
            },
            {
              key: 'linkvc',
              logo: require('~/assets/images/investor/linkvc.png')
            },
            {
              key: 'genesisCapital',
              logo: require('~/assets/images/investor/genesis-capital.png')
            },
            {
              key: 'funcityCapital',
              logo: require('~/assets/images/investor/funcity-capital.jpg')
            },
            {
              key: 'helloCapital',
              logo: require('~/assets/images/investor/hello-capital-black.png')
            },
            {
              key: 'zhizi',
              logo: require('~/assets/images/investor/zhizi.png')
            },
            {
              key: 'hotCapital',
              logo: require('~/assets/images/investor/hot-capital.png')
            },
            {
              key: 'dazhi',
              logo: require('~/assets/images/investor/dazhi.png')
            },
            {
              key: 'handsome',
              logo: require('~/assets/images/investor/handsome.png')
            },
            {
              key: 'hesheng',
              logo: require('~/assets/images/investor/hesheng.png')
            },
            {
              key: 'b100',
              logo: require('~/assets/images/investor/b100.png')
            },
            {
              key: 'bn',
              logo: require('~/assets/images/investor/bn_capital.png')
            }
          ]
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
    font-family:PingFangSC-Medium;
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
      img {
        max-height: 200px;
        max-height: 200px;
      }
    }
  }
</style>
