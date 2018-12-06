<template>
  <section class="section">
    <div class="container">
      <h1>{{$t('team.core')}}</h1>
      <div class="columns is-multiline">
        <div class="column item is-3-widescreen is-6-tablet is-12-mobile"
             v-for="item in teams" :key="item.key">
          <div class="is-info">
            <team-image :src="item.img" :name="item.key" :urls="item.urls"></team-image>
          </div>
        </div>
      </div>
      <h1>顾问</h1>
      <div class="columns is-multiline is-center">
        <div class="column item is-3-widescreen is-6-tablet is-12-mobile"
             v-for="item in advisors" :key="item.key">
          <div class="is-info">
            <team-image :src="item.img" :name="item.key" :urls="item.urls" type="advisor"></team-image>
          </div>
        </div>
      </div>
      <mailto-btn :text="'加入我们'" :href="`mailto:hr@vite.org`"></mailto-btn>
    </div>
  </section>
</template>

<script type="text/babel">
  import TeamImage from '~/components/TeamImage'
  import MailtoBtn from '~/components/MailtoBtn'

  export default {
    components: {
      TeamImage,
      MailtoBtn
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
          },
          {
            key: 'zhoudan',
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/xiaotao-liu-002013169/'
              }
            ]
          },
          {
            key: 'zhoudan',
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/xiaotao-liu-002013169/'
              }
            ]
          },
          {
            key: 'zhoudan',
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/xiaotao-liu-002013169/'
              }
            ]
          },
          {
            key: 'zhoudan',
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/xiaotao-liu-002013169/'
              }
            ]
          },
          {
            key: 'zhoudan',
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/xiaotao-liu-002013169/'
              }
            ]
          },
          {
            key: 'zhoudan',
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
    padding-top: 92px;
    .container {
      .is-info {
        display: flex;
      }
      .columns {
        margin-top: 60px;
        margin-bottom: 80px; 
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
