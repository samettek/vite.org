<template>
  <div>
    <section v-for="(feature, index) in features" :key="feature.key">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="img-wrapper">
              <img :src="feature.img" alt="">
              <h3>0{{index + 1}} {{$t('feature.performance.title')}}</h3>
            </div>
            <svg class="v-arrow" width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-936.000000, -1173.000000)">
                  <g transform="translate(0.000000, 922.000000)">
                    <g transform="translate(939.000000, 254.000000)">
                      <circle id="Oval" stroke="#34353A" stroke-width="5" fill="#2B2C30" cx="21" cy="21" r="21"></circle>
                      <path d="M19.5,20 L15,20 L15,21.5 L19.5,21.5 L19.5,24.5 L27,20.75 L19.5,17 L19.5,20 Z" id="Combined-Shape" fill="#0072E3"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="column v-content">
            <div class="sub-content-wrapper" :key="item" v-for="item in feature.content">
              <div class="sub-content">
                <div class="border"></div>
                <h3>{{$t(`feature.performance.${item}.title`)}}</h3>
                <p>{{$t(`feature.performance.${item}.content`)}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/babel">
    export default {
      data: function () {
        return {
          features: [
            {
              key: 'performance',
              img: require('~/assets/images/feature/high-performance@3x.png'),
              content: ['dag', 'async']
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
    background:rgba(43,44,48,1);
    border-bottom: 5px solid rgba(52,53,58,1);
    &:last-child {
      border-bottom: none;
    }

    @include touch {
      padding: 1.5rem;
    }

    @include desktop {
      padding: 0.75rem 0;
    }
    .columns {
      background: rgba(43,44,48,1);
      .column {
        position: relative;
        @include desktop {
          height: 550px;
          padding: 71px 0;
        }
        @include touch {
          padding: 2rem 0;
        }

        &:first-child {
          @include desktop {
            border-right: 5px solid rgba(52,53,58,1);
          }
        }
        .v-arrow {
          position: absolute;
          right: -(48px + 5px) / 2;
          top: (550px - 48px) / 2
        }
      }

      .v-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .sub-content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          @include mobile {
            &:last-child {
              margin-top: 2rem;
            }
          }

          .sub-content {
            max-width: 387px;
            h3 {
              font-size:24px;
              font-family:PingFangSC-Regular;
              color:rgba(255,255,255,1);
              line-height:33px;
              margin: 22px 0;
            }
            .border {
              width:64px;
              height:7px;
              background:rgba(21,128,227,1);
            }
            p {
              font-size:16px;
              font-family:PingFangSC-Regular;
              color:rgba(144,146,154,1);
              line-height:28px;
            }
          }
        }
      }

      .img-wrapper {
        flex-direction: column;
        display: flex;
        align-items: center;
        img {
          max-width: 340px;
          max-height: 340px;
        }
        h3 {
          font-size:30px;
          font-family:PingFangSC-Medium;
          color:rgba(0,114,227,1);
          line-height:42px;
          margin-top: 31px;
        }
      }
    }
  }
</style>
