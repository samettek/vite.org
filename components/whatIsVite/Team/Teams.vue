<template>
  <section>
    <div class="container padding-until-desktop">
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
          title: 'founder',
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
