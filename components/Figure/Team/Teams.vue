<template>
  <section>
    <div class="container">
      <h1 style="margin-bottom: 30px;">{{$t('team.core')}}</h1>
      <team-factory
        :id="item.title"
        :title="item.title"
        :list="item.list"
        v-for="(item, index) in teams"
        :key="index">
      </team-factory>
    </div>
  </section>
</template>

<script type="text/babel">
import TeamFactory from './TeamFactory';

export default {
  components: {
    TeamFactory,
  },
  data() {
    return {
      teams: [
        {
          title: 'manage',
          list: [
            {
              img: require('~/assets/images/teams/liuchunming.png'),
              key: 'liuchunming',
              urls: [
                {
                  icon: ['fab', 'twitter'],
                  url: 'https://twitter.com/chunming_liu',
                },
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/liuchunming/',
                },
                {
                  icon: ['fab', 'github'],
                  url: 'https://github.com/charles-liu',
                },
              ],
            },
            {
              img: require('~/assets/images/teams/yuanhui.png'),
              key: 'frank',
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/frank-deng-4756147',
                },
              ],
            },
            {
              img: require('~/assets/images/teams/leo.jpg'),
              key: 'leo',
              urls: [
                {
                  icon: ['fab', 'twitter'],
                  url: 'https://twitter.com/soliury',
                },
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/leo-zhang-b68a86166/',
                },
                {
                  icon: ['fab', 'github'],
                  url: 'https://github.com/soliury',
                },
              ],
            },
          ],
        },
        {
          title: 'siliconValley',
          list: [
            {
              img: require('~/assets/images/teams/richard.jpg'),
              key: 'richard',
              urls: [
                {
                  icon: ['fab', 'twitter'],
                  url: 'https://twitter.com/Gentso09',
                },
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/richard-yan-934229a5/',
                },
              ],
            },
            {
              img: require('~/assets/images/teams/allen.jpeg'),
              key: 'allen',
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/xiaotao-liu-002013169/',
                },
              ],
            },
            {
              img: require('~/assets/images/teams/chris.jpg'),
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/kunyuanli/',
                },
              ],
              key: 'Chris Li',
            },
            {
              img: require('~/assets/images/teams/francesco.jpg'),
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/francescobisardi/',
                },
              ],
              key: 'Francesco',
            },
          ],
        },
        {
          title: 'tech',
          list: [
            {
              img: require('~/assets/images/teams/hzh.jpg'),
              urls: [],
              key: 'Zack'
            },
            {
              img: require('~/assets/images/teams/zy2.jpg'),
              urls: [],
              key: 'Ada',
            },
            {
              img: require('~/assets/images/teams/wm.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/roymoro' },
              ],
              key: 'Eric',
            },
            {
              img: require('~/assets/images/teams/lwc.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/weichaolee' },
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/伟超-李-005721167/',
                },
              ],
              key: 'weichao',
            },
            {
              img: require('~/assets/images/teams/wj.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/viteshan' },
              ],
              key: 'viteshan',
            },
            {
              img: require('~/assets/images/teams/yyl.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/tuprise' },
              ],
              key: 'Tuprise',
            },
            {
              img: require('~/assets/images/teams/lyd.jpg'),
              urls: [{ icon: ['fab', 'github'], url: 'https://github.com/lyd00' }],
              key: 'hubery',
            },
            {
              img: require('~/assets/images/teams/lld.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/viteFeng' },
              ],
              key: 'Rod',
            },
            {
              img: require('~/assets/images/teams/hyf.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/alex-yf' },
              ],
              key: 'Alex',
            },
            {
              img: require('~/assets/images/teams/cp.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/viteLiz' },
              ],
              key: 'viteLiz',
            },
            {
              img: require('~/assets/images/teams/ztt.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/TiantaoZhu' },
              ],
              key: 'Tiantao',
            },
            {
              img: require('~/assets/images/teams/yj.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/jerry-vite' },
              ],
              key: 'jerry',
            },
            {
              img: require('~/assets/images/teams/gx.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/vite-crzn' },
              ],
              key: 'Jin',
            },
            {
              img: require('~/assets/images/teams/hp.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/vite-pu' },
              ],
              key: 'Asurily',
            },
            {
              img: require('~/assets/images/teams/xst.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/shitong' },
              ],
              key: 'Stone',
            },
            {
              img: require('~/assets/images/teams/cl.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/buckcao' },
              ],
              key: 'Logan',
            },
            {
              img: require('~/assets/images/teams/hsy.jpg'),
              urls: [
                {
                  icon: ['fab', 'github'],
                  url: 'https://github.com/haoshenyang',
                },
              ],
              key: 'Shenyang',
            },
            {
              img: require('~/assets/images/teams/wty.jpg'),
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/tingyue-wang-152813a2/',
                },
                {
                  icon: ['fab', 'github'],
                  url: 'https://github.com/woodghost',
                },
              ],
              key: 'Tina',
            },
            {
              img: require('~/assets/images/teams/cs.jpg'),
              urls: [
                {
                  icon: ['fab', 'github'],
                  url: 'https://github.com/lovelycs',
                },
              ],
              key: 'Cecelia',
            },
            {
              img: require('~/assets/images/teams/yz.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/hurrytospring' },
              ],
              key: 'Reg',
            },
            {
              img: require('~/assets/images/teams/zd.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/swan-zhou' },
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/%E4%B8%B9-%E5%96%B5-795a72169/',
                },
              ],
              key: 'Daisy',
            },
            {
              img: require('~/assets/images/teams/jql.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/qianlei-jia' },
              ],
              key: 'Abbott',
            },
            {
              img: require('~/assets/images/teams/flg.jpg'),
              urls: [
                { icon: ['fab', 'github'], url: 'https://github.com/fanglige' },
              ],
              key: 'Hannah',
            },
            {
              img: require('~/assets/images/teams/hzh.jpg'),
              urls: [],
              key: 'Zack',
            },
            {
              img: require('~/assets/images/teams/ljy.jpg'),
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url:
                'https://www.linkedin.com/in/%E5%90%9B%E6%80%A1-%E6%9D%8E-4b9562b4/',
                },
              ],
              key: 'Lola',
            },
            {
              img: require('~/assets/images/teams/wt.jpg'),
              urls: [],
              key: 'Tony',
            },
            {
              img: require('~/assets/images/teams/lx.jpg'),
              urls: [],
              key: 'Cassie',
            },
            {
              img: require('~/assets/images/teams/zqj.jpg'),
              urls: [],
              key: 'Flanke',
            },
            // {
            //   img: require('~/assets/images/teams/ws.jpg'),
            //   urls: [],
            //   key: 'Layla'
            // },
            {
              img: require('~/assets/images/teams/llk.jpg'),
              urls: [],
              key: 'Miya',
            },
          ],
        },
        {
          title: 'advisor',
          list: [
            {
              img: require('~/assets/images/teams/dan-wang.png'),
              key: 'wangdong',
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/dong77/',
                },
              ],
            },
            {
              key: 'zhangli',
              img: require('~/assets/images/teams/lizhang.jpeg'),
            },
            {
              key: 'terenceLam',
              img: require('~/assets/images/teams/terence-bio.png'),
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url: 'http://linkedin.com/in/terence-lam-460191',
                },
              ],
            },
            {
              key: 'ivan',
              img: require('~/assets/images/teams/ivan.jpg'),
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/ivangolovko/',
                },
              ],
            },
            {
              img: require('~/assets/images/teams/michael.png'),
              key: 'Michael',
            },
          ],
        },
        {
          title: 'global',
          list: [
            {
              img: require('~/assets/images/teams/Oleg.png'),
              key: 'Oleg',
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/oleg-igorevych-775833b3/',
                },
              ],
            },
            {
              img: require('~/assets/images/teams/haviet.jpg'),
              key: 'HaViet',
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/ha-viet-nguyen-210/',
                },
              ],
            },
            {
              img: require('~/assets/images/teams/Pankaj.jpg'),
              key: 'Pankaj',
              urls: [
                {
                  icon: ['fab', 'linkedin'],
                  url: 'https://www.linkedin.com/in/pankaj-kataria-cbap®-87ba1b7/',
                },
              ],
            },
            {
              img: require('~/assets/images/community/Juan.jpg'),
              key: 'Juan',
              urls: [
                {
                  icon: [],
                  url: 'https://www.facebook.com/baveciwan29',
                },
              ],
            },
            {
              img: require('~/assets/images/community/Takeshi.jpg'),
              key: 'Takeshi',
              urls: [
                {
                  icon: ['fab', 'twitter'],
                  url: 'https://twitter.com/Takeshi_TGAL',
                },
              ],
            },
            {
              img: require('~/assets/images/community/snaker.png'),
              key: 'snaker',
              urls: [
                {
                  icon: ['fab', 'twitter'],
                  url: 'https://twitter.com/SnakerZhang',
                },
              ],
            },
            {
              img: require('~/assets/images/community/liyang.png'),
              key: 'liyang',
            },
            {
              img: require('~/assets/images/community/chenle.png'),
              key: 'chenle',
            },
            {
              img: require('~/assets/images/community/qingshui.png'),
              key: 'qingshui',
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
  .container {
    .is-info {
      display: flex;
    }
    .columns {
      margin-top: 24px;
      margin-bottom: 55px;
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
