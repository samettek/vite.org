<template>
  <section>
    <sub-title :title="$t(`team.${title}`)"></sub-title>
    <div class="columns is-multiline">
      <div
        class="column item is-3-widescreen is-6-tablet is-12-mobile"
        v-for="(item) in list"
        :key="item.key"
        v-if="list.length"
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
  </section>
</template>

<script type="text/babel">
import TeamImage from './TeamImage';
import subTitle from '~/components/subTitle';

export default {
  components: {
    TeamImage,
    subTitle
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data: function () {
    return {
      manage: [
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
        }
      ],
      siliconValley: [
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
        }
      ],
      tech: [
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
        }
      ],
      global: [
        {
          img: require('~/assets/images/teams/Oleg.png'),
          key: 'Oleg',
          urls: [
            {
              icon: ['fab', 'linkedin'],
              url: 'https://www.linkedin.com/in/oleg-igorevych-775833b3/'
            }
          ]
        },
        {
          img: require('~/assets/images/teams/haviet.jpg'),
          key: 'HaViet',
          urls: [
            {
              icon: ['fab', 'linkedin'],
              url: 'https://www.linkedin.com/in/ha-viet-nguyen-210/'
            }
          ]
        },
        {
          img: require('~/assets/images/teams/Pankaj.jpg'),
          key: 'Pankaj',
          urls: [
            {
              icon: ['fab', 'linkedin'],
              url: 'https://www.linkedin.com/in/pankaj-kataria-cbap®-87ba1b7/'
            }
          ]
        },
      ]
    };
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .is-info {
    display: flex;
  }
  .columns {
    margin-top: 24px;
    margin-bottom: 55px;
  }
  
</style>
