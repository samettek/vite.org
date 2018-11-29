<template>
  <section class="section">
    <div class="container">
      <h2>{{$t('elector.title')}}</h2>
      <div class="columns is-multiline is-center">
        <div class="column item is-destop is-4-desktop is-6-tablet is-12-mobile"
             v-for="(item, index) in electors" :key="index">
          <div class="is-info">
            <elector-image :src="item.img" :name="item.key" :urls="item.urls"></elector-image>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
  import ElectorImage from '~/components/ElectorImage'

  export default {
    components: {
      ElectorImage
    },
    data: function () {
      return {
        electors: [
          {
            img: require('~/assets/images/superNode/vitecity.jpeg'),
            key: 'vitecity'
          },
          {
            img: require('~/assets/images/superNode/tenzor.png'),
            key: 'tenzor'
          },
          {
            img: require('~/assets/images/superNode/snap.jpg'),
            key: 'snap'
          },
          {
            img: require('~/assets/images/superNode/ux.jpg'),
            key: 'ux'
          },
          {
            img: require('~/assets/images/superNode/loopring.jpg'),
            key: 'loopring'
          },
          {
            img: require('~/assets/images/superNode/zhizibanner.jpg'),
            key: 'zhizifund'
          },
          {
            img: require('~/assets/images/superNode/linknodebanner.jpg'),
            key: 'linknode'
          },
          {
            img: require('~/assets/images/superNode/bitvitebanner.jpeg'),
            key: 'bitvite'
          },
          {
            img: require('~/assets/images/superNode/swissbanner.jpg'),
            key: 'swissvite'
          },
          {
            img: require('~/assets/images/superNode/xinshengbanner.jpeg'),
            key: 'xinsheng'
          },
          {
            img: require('~/assets/images/superNode/zlbanner.jpg'),
            key: 'zlnode'
          },
          {
            img: require('~/assets/images/superNode/loopnestbanner.jpg'),
            key: 'loopnest'
          },
          {
            img: require('~/assets/images/superNode/belsonabanner.jpg'),
            key: 'belsona'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  section {
    padding-top: 60px;
    .container {

      & > h2 {
        font-size: 44px;
        color: #171C34;
        line-height:62px;
        font-family: $font-family-title;
        @include mobile {
          font-size: 30px;
          line-height: 50px;
        }
      }
      .is-info {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .columns {
        &:last-child {
          @include desktop {
            margin-top: 60px;
          }
        }
      }
    }

    @include touch {
      padding-top: 25px;
      padding-bottom: 25px;
      .container {
        & > h2 {
          font-size: 24px;
          line-height: 34px;
          margin-bottom: 25px;
        }
      }
    }
  }
</style>
