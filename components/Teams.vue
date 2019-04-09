<template>
  <section class="section">
    <div class="container">
      <h1>{{$t('team.core')}}</h1>
      <div class="columns is-multiline">
        <div
          class="column item is-4-widescreen is-6-tablet is-12-mobile"
          v-for="(item,i) in teams"
          :key="item.key"
          :style="{'margin-right':i===4?'100px':'0'}"
        >
          <div class="is-info">
            <team-image
              :src="item.img"
              :name="item.key"
              :urls="item.urls"
            ></team-image>
          </div>
        </div>
      </div>
      <h1>{{$t('team.advisor')}}</h1>
      <div class="columns is-multiline is-center">
        <div
          class="column item is-4-widescreen is-6-tablet is-12-mobile"
          v-for="item in advisors"
          :key="item.key"
        >
          <div class="is-info">
            <team-image
              :src="item.img"
              :name="item.key"
              :urls="item.urls"
              type="advisor"
            ></team-image>
          </div>
        </div>
      </div>
      <mailto-btn
        :text="$t('team.join')"
        :href="`mailto:hr@vite.org`"
      ></mailto-btn>
    </div>
  </section>
</template>

<script type="text/babel">
import TeamImage from '~/components/TeamImage';
import MailtoBtn from '~/components/MailtoBtn';

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
          urls: [
            {
              icon: ['fab', 'linkedin'],
              url: 'https://www.linkedin.com/in/lukekim153/'
            }
          ],
          key: 'Luke Kim'
        },
        {
          urls: [
            {
              icon: ['fab', 'linkedin'],
              url: 'https://www.linkedin.com/in/kunyuanli/'
            }
          ],
          key: 'Chris Li'
        },
        { urls: [], key: 'Ada' },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/roymoro' }
          ],
          key: 'Eric'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/weichaolee' },
            {
              icon: ['fab', 'linkedin'],
              url: 'https://www.linkedin.com/in/伟超-李-005721167/'
            }
          ],
          key: 'weichao'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/viteshan' }
          ],
          key: 'viteshan'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/tuprise' }
          ],
          key: 'Tuprise'
        },
        {
          urls: [{ icon: ['fab', 'github'], url: 'https://github.com/lyd00' }],
          key: 'hubery'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/viteFeng' }
          ],
          key: 'Rod'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/alex-yf' }
          ],
          key: 'Alex'
        },

        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/viteLiz' }
          ],
          key: 'viteLiz'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/TiantaoZhu' }
          ],
          key: 'Tiantao'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/jerry-vite' }
          ],
          key: 'jerry'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/vite-crzn' }
          ],
          key: 'Jin'
        },

        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/vite-pu' }
          ],
          key: 'Asurily'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/shitong' }
          ],
          key: 'Stone'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/buckcao' }
          ],
          key: 'Logan'
        },
        {
          urls: [
            {
              icon: ['fab', 'github'],
              url: 'https://github.com/haoshenyang'
            }
          ],
          key: 'Shenyang'
        },
        {
          urls: [
            {
              icon: ['fab', 'github'],
              url: 'https://github.com/woodghost'
            }
          ],
          key: 'Tina'
        },
        {
          urls: [
            {
              icon: ['fab', 'github'],
              url: 'https://github.com/lovelycs'
            }
          ],
          key: 'Cecelia'
        },

        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/hurrytospring' }
          ],
          key: 'Reg'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/swan-zhou' },
            {
              icon: ['fab', 'linkedin'],
              url: 'https://www.linkedin.com/in/%E4%B8%B9-%E5%96%B5-795a72169/'
            }
          ],
          key: 'Daisy'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/qianlei-jia' }
          ],
          key: 'Abbott'
        },
        {
          urls: [
            { icon: ['fab', 'github'], url: 'https://github.com/fanglige' }
          ],
          key: 'Hannah'
        },
        { urls: [], key: 'Zack' },
        {
          urls: [
            {
              icon: ['fab', 'linkedin'],
              url:
                'https://www.linkedin.com/in/%E5%90%9B%E6%80%A1-%E6%9D%8E-4b9562b4/'
            }
          ],
          key: 'Lola'
        },
        { urls: [], key: 'Tony' },
        { urls: [], key: 'Cassie' },
        {
          urls: [
            {
              icon: ['fab', 'github'],
              url: 'https://github.com/Candyhanjingyi'
            }
          ],
          key: 'Candy'
        },
        { urls: [], key: 'Flanke' },
        { urls: [], key: 'Erin' },
        { urls: [], key: 'Layla' },
        { urls: [], key: 'Miya' }
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
        },
        {
          img: require('~/assets/images/teams/michael.png'),
          key: 'Michael'
        //   urls: [
        //     {
        //       icon: ["fab", "linkedin"],
        //       url: "https://www.linkedin.com/in/dong77/"
        //     }
        //   ]
        }
      ]
    };
  },
  methods: {}
};
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
