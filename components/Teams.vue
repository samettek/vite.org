<template>
  <section>
    <div class="container">
      <div class="core-team columns is-multiline is-gapless">
        <div class="column item icon-item is-destop is-6-desktop is-6-tablet is-4-widescreen is-12-mobile">
          <img src="~/assets/images/teams/core-team.png" alt="Core Team">
          <h3>{{$t('team.core')}}</h3>
        </div>
        <div class="column item is-destop is-6-desktop is-6-tablet is-4-widescreen is-12-mobile" v-for="item in teams">
          <div class="is-info">
            <figure class="image is-square">
              <img :src="item.img">
            </figure>
          </div>
        </div>
      </div>

      <div class="columns sub-team is-multiline is-gapless">
        <div class="column item is-destop is-6-desktop is-6-tablet is-4-widescreen is-12-mobile"
             v-for="item in advisors">
          <div class="is-info">
            <figure class="image is-square">
              <img :src="item.img">
            </figure>
          </div>
        </div>

        <div class="column item icon-item is-destop is-6-desktop is-6-tablet is-4-widescreen is-12-mobile">
          <img src="~/assets/images/teams/advisor-team.png" alt="Core Team">
          <h3>{{$t('team.advisor')}}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
  export default {
    data: function () {
      return {
        teams: [
          {
            img: require('~/assets/images/teams/liuchunming.jpeg'),
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
            img: require('~/assets/images/teams/wuming.jpeg'),
            key: 'wuming',
            urls: [
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/ming-wu-7a598b1b/'
              },
              {
                icon: ['fab', 'github'],
                url: 'https://github.com/sparkwoo'
              }
            ]
          }
        ],
        advisors: [
          {
            img: require('~/assets/images/teams/dan-wang.jpg'),
            key: 'wangdong'
          },
          {
            key: 'machao',
            img: require('~/assets/images/teams/chao-ma.jpg')
          },
          // {
          //   key: 'terenceLam',
          //   img: require('~/assets/images/teams/terence-bio.jpg')
          // }
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
    padding-top: 130px;
    padding-bottom: 130px;

    .icon-item {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 400px;
      img {
        height: 150px;
        width: 150px;
        display: block;
        margin-top: 93px;
        margin-bottom: 23px;
      }
      h3 {
        font-size:36px;
        font-family:PingFangSC-Medium;
        color:rgba(255,255,255,1);
        line-height:50px;
      }
    }

    .core-team {
      &.is-gapless {
        margin-bottom: 55px;
      }
      .icon-item {
        background:rgba(21,128,227,1);
      }
    }

    .sub-team {
      .icon-item {
        background:rgba(8,180,123,1);
      }
    }
  }
</style>
