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
            img: require('~/assets/images/teams/liuchunming.png'),
            key: 'liuchunming',
            urls: [
              {
                icon: ['fab', 'twitter'],
                url: 'https://twitter.com/chunming_liu'
              },
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/liuchunming/'
              },
              {
                icon: ['fab', 'github'],
                url: 'https://github.com/charles-liu'
              }
            ]
          },
          {
            img: require('~/assets/images/teams/richard.jpg'),
            key: 'richard',
            urls: [
              {
                icon: ['fab', 'twitter'],
                url: 'https://twitter.com/Gentso09'
              },
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/richard-yan-934229a5/'
              }
            ]
          },
          {
            img: require('~/assets/images/teams/yuanhui.png'),
            key: 'frank',
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/frank-deng-4756147'
              }
            ]
          },
          {
            img: require('~/assets/images/teams/leo.jpg'),
            key: 'leo',
            urls: [
              {
                icon: ['fab', 'twitter'],
                url: 'https://twitter.com/soliury'
              },
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/leo-zhang-b68a86166/'
              },
              {
                icon: ['fab', 'github'],
                url: 'https://github.com/soliury'
              }
            ]
          },
          {
            img: require('~/assets/images/teams/allen.jpeg'),
            key: 'allen',
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/xiaotao-liu-002013169/'
              }
            ]
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
