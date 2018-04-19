<template>
  <div class="columns is-multiline">
    <div class="main-team column is-12" v-in-viewport>
      <div class="column item is-destop is-6-desktop is-6-tablet is-4-widescreen is-12-mobile hvr-float-shadow"
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

    <div class="sub-team column is-12">
      <div class="columns is-multiline" v-in-viewport>
        <div class="column item is-destop is-6-desktop is-6-tablet is-4-widescreen is-12-mobile hvr-float-shadow"
             v-for="item in teams2">
          <div class="is-info">
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
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data: function () {
      return {
        teams: [
          {
            img: 'https://avatars1.githubusercontent.com/u/28188208?s=400&v=4',
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
            img: 'https://loopring.org/assets/img/team/dan-wang.jpg',
            key: 'wangdong',
            urls: [
              {
                icon: ['fab', 'twitter'],
                url: 'https://twitter.com/daniel_loopring'
              },
              {
                icon: ['fab', 'linkedin'],
                url: 'https://www.linkedin.com/in/dong77'
              },
              {
                icon: ['fab', 'github'],
                url: 'https://github.com/dong77'
              }
            ]
          },
          {
            img: 'https://avatars3.githubusercontent.com/u/4434380?s=400&v=4',
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
        teams2: []
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .hvr-float-shadow {
    &:before {
      background: none;
    }
  }

  .columns {
    .sub-team {
      .is-info {
        background-color: #F7F7F7;
      }
    }

    .is-info {
      border: 1px solid #EAEAEA;
      /*border-radius: 0.2rem;*/
    }

    .image {
      max-height: 25.75rem;
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
      min-height: 25.75rem;
      border-top: none;
      .team-des {
        padding: 1rem;
        font-size: 1.13rem;
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
</style>
