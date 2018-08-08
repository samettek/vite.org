<template>
  <section class="section">
    <div class="container">
      <h2>{{$t('team.core')}} & {{$t('team.advisor')}}</h2>
      <div class="columns is-multiline is-center">
        <div class="column item is-destop is-4-desktop is-6-tablet is-12-mobile"
             v-for="item in teams">
          <div class="is-info">
            <team-image :src="item.img" :name="item.key" :urls="item.urls"></team-image>
          </div>
        </div>
        <div class="column item is-destop is-4-desktop is-6-tablet is-12-mobile"
             v-for="item in advisors">
          <div class="is-info">
            <team-image :src="item.img" :name="item.key" :urls="item.urls" type="advisor"></team-image>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
  import TeamImage from '~/components/TeamImage'

  export default {
    components: {
      TeamImage
    },
    data: function () {
      return {
        teams: [
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
            img: require('~/assets/images/teams/allen.jpeg'),
            key: 'allen',
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/xiaotao-liu-002013169/'
              }
            ]
          }
        ],
        advisors: [
          {
            img: require('~/assets/images/teams/dan-wang.png'),
            key: 'wangdong',
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/dong77/'
              }
            ]
          },
          {
            key: 'zhangli',
            img: require('~/assets/images/teams/lizhang.jpeg')
          },
          {
            key: 'terenceLam',
            img: require('~/assets/images/teams/terence-bio.png'),
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'http://linkedin.com/in/terence-lam-460191'
              }
            ]
          },
          {
            key: 'mirza',
            img: require('~/assets/images/teams/mirza.jpeg'),
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/themirzauddin/'
              }
            ]
          },
          {
            key: 'ivan',
            img: require('~/assets/images/teams/ivan.jpg'),
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/ivangolovko/'
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
    background:rgba(38,39,42,1);
    padding-top: 60px;
    .container {
      & > h2 {
        font-size:36px;
        font-family: $font-family-main;
        color:rgba(255,255,255,1);
        line-height:50px;
        text-align: center;
        margin-bottom: 40px;
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
