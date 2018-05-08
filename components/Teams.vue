<template>
  <section class="section">
    <div class="container">
      <h2>{{$t('team.core')}}</h2>
      <div class="columns is-multiline">
        <div class="main-team" v-in-viewport>
          <div class="column item is-destop is-6-desktop is-6-tablet is-4-widescreen is-12-mobile hvr-float"
               v-for="item in teams">
            <div class="is-info">
              <figure class="image is-square">
                <img :src="item.img">
              </figure>

              <div class="description">
                <h3 class="inview4 animated fadeInDown delay-0-500">{{$t(`team.nameMap.${item.key}.position`)}}</h3>
                <h4 class="inview4 animated fadeInUp delay-0-500">{{$t(`team.nameMap.${item.key}.name`)}}</h4>
                <div class="team-des">{{$t(`team.nameMap.${item.key}.description`)}}</div>
                <div class="item-footer">
                  <a :href="url.url" target="_blank" :key="url.url" v-for="url in item.urls">
                    <fa-icon class="icon" :icon="url.icon" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <h3 class="advisor-head">{{$t('team.advisor')}}</h3>

        <div class="sub-team column is-12">
          <div class="columns is-multiline" v-in-viewport>
            <div class="column item is-destop is-6-desktop is-6-tablet is-4-widescreen is-12-mobile hvr-float"
                 v-for="item in advisors">
              <div class="is-info">
                <figure class="image is-square">
                  <img :src="item.img">
                </figure>

                <div class="description">
                  <h3 class="inview4 animated fadeInDown delay-0-500">{{$t(`team.nameMap.${item.key}.position`)}}</h3>
                  <h4 class="inview4 animated fadeInUp delay-0-500">{{$t(`team.nameMap.${item.key}.name`)}}</h4>
                  <div class="team-des">{{$t(`team.nameMap.${item.key}.description`)}}</div>
                  <div class="item-footer" v-if="item.urls && item.urls.length > 0">
                    <a :href="url.url" target="_blank" :key="url.url" v-for="url in item.urls">
                      <fa-icon class="icon" :icon="url.icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          {
            key: 'terenceLam',
            img: require('~/assets/images/teams/terence-bio.jpg')
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
        font-family:PingFangSC-Medium;
        color:rgba(255,255,255,1);
        line-height:50px;
        text-align: center;
        margin-bottom: 40px;
      }
    }
  }

  .main-team {
    align-items: center;
    justify-content: space-around;
    display: flex;
    @include mobile {
      display: block;
    }
  }

  .columns {
    .sub-team {
      .description {
        min-height: 15rem;
        .team-des {
          min-height: auto;
        }
      }
    }

    .image {
      max-height: 260px;
      img {
        max-height: 260px;
      }
    }
    h3, h4 {
      font-size: 1.56rem;
      color: #111111;
      text-align: center;
      font-weight: normal;
    }
    h4 {
      /*margin-bottom: 1rem;*/
    }
    .description {
      padding-top:1.5rem;
      padding-bottom: 1rem;
      width: 100%;
      min-height: 20rem;
      border-top: none;
      position: relative;
      .team-des {
        padding: 1rem;
        font-size: 1rem;
        line-height: 1.75rem;
        color: #818181;
        text-align: center;
        font-weight: 300;
        min-height: 9.06rem;
        margin-bottom: 1rem;
        font-family: $font-family-light;
      }

      .item-footer {
        height: 2.69rem;
        text-align: center;
        bottom: 3rem;
        position: absolute;
        width: 100%;
        a {
          margin-left: 2.69rem;
          &:first-child {
            margin-left: 0;
          }
        }
        .icon {
          height: 2.5rem;
          width: 2.5rem;
          line-height: 2.5rem;
          color: #999999;
          &:hover {
            color: $light-blue;
          }
        }
      }
    }
  }

  .advisor-head {
    text-align: center;
    padding: 2rem 0;
    width: 100%;
  }
</style>
