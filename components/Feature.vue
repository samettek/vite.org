<template>
  <div>
    <section v-for="(feature, index) in features" :key="feature.key" :class="{'reverse-row': (index + 1) % 2 === 0}">
      <div class="container">
        <div class="columns">
          <div class="column v-title">
            <div class="img-wrapper">
              <reactive v-if="feature.key === 'reactiveContract'"></reactive>
              <ecosystem v-else-if="feature.key === 'ecosystem'"></ecosystem>
              <performance v-else></performance>

              <h3>{{$t(`feature.${feature.key}.title`)}}</h3>
            </div>
            <svg class="v-arrow is-hidden-touch" width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
            <svg class="v-arrow is-hidden-tablet" width="76px" height="76px" viewBox="0 0 76 76" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-337.000000, -1984.000000)">
                  <g transform="translate(0.000000, 1322.000000)">
                    <g transform="translate(375.000000, 700.000000) rotate(90.000000) translate(-375.000000, -700.000000) translate(340.000000, 665.000000)">
                      <circle stroke="#34353A" stroke-width="5" fill="#2B2C30" cx="35" cy="35" r="35"></circle>
                      <path d="M32.5,33.3333333 L25,33.3333333 L25,35.8333333 L32.5,35.8333333 L32.5,40.8333333 L45,34.5833333 L32.5,28.3333333 L32.5,33.3333333 Z" id="Combined-Shape" fill="#0072E3"></path>
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
                <h3>{{$t(`feature.${feature.key}.${item}.title`)}}</h3>
                <p>{{$t(`feature.${feature.key}.${item}.content`)}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/babel">
  import Reactive from '~/components/svg/Reactive'
  import Ecosystem from '~/components/svg/Ecosystem'
  import Performance from '~/components/svg/Performance'

  export default {
    components: {
      Reactive,
      Ecosystem,
      Performance
    },
    data: function () {
      return {
        features: [
          {
            key: 'performance',
            img: require('~/assets/images/feature/high-performance.png'),
            content: ['dag', 'async']
          },
          {
            key: 'reactiveContract',
            img: require('~/assets/images/feature/reactiveContract.png'),
            content: ['messageDriven', 'solidity']
          },
          {
            key: 'ecosystem',
            img: require('~/assets/images/feature/ecosystem.png'),
            content: ['value', 'dapp']
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

    @include touch {
      border-bottom: none;
    }

    &.reverse-row {
      .columns {
        flex-direction: row-reverse;
        .column {
          &:first-child {
            @include desktop {
              border-right: none;
              border-left: 5px solid rgba(52,53,58,1);
            }
          }

          .v-arrow {
            position: absolute;
            left: -(48px + 5px) / 2;
            top: 50%;
            margin-top: -24px;

            @include touch {
              top: auto;
              left: auto;
              right: 50%;
              bottom: -(36px / 2);
              margin-right: -(36px + 3px) / 2;
              height: 36px;
              width: 36px;
              transform: rotate(0deg);
            }
          }
        }
      }
      .v-arrow {
        transform:rotate(180deg);
      }
    }

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
          padding: 71px 0;
        }
        @include touch {
          padding: 2rem 0;
        }

        &:first-child {
          @include desktop {
            border-right: 5px solid rgba(52,53,58,1);
          }
          @include tablet {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          @include mobile {
            border-bottom: 3px solid #34353A;
            padding-bottom: 69px;
            padding-top: 69px - (16px / 2);
          }
        }
        .v-arrow {
          position: absolute;
          right: -(48px + 5px) / 2;
          top: 50%;
          margin-top: -24px;
          @include touch {
            bottom: 0;
            top: auto;
            right: 50%;
            bottom: -(36px / 2);
            margin-right: -(36px + 3px) / 2;
            height: 36px;
            width: 36px;
          }
        }
      }

      .v-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @include touch {
          padding-top: 39px;
          padding-bottom: 39px;
        }

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
          &:last-child {
            margin-top: 60px;
          }

          .sub-content {
            max-width: 387px;
            h3 {
              font-size:24px;
              font-family: $font-family-light;
              color:rgba(255,255,255,1);
              line-height:33px;
              margin: 22px 0;
              @include touch {
                font-size: 16px;
                line-height: 23px;
                margin: 7px 0;
              }
              @include widescreen-desktop {
                font-size: 18px;
                line-height: 23px;
              }
            }
            .border {
              width:64px;
              height:7px;
              background:rgba(21,128,227,1);

              @include touch {
                height: 4px;
              }
            }
            p {
              font-size:16px;
              font-family: $font-family-light;
              color:rgba(144,146,154,1);
              line-height:28px;
              @include touch {
                font-size: 14px;
                line-height: 26px;
              }
              @include widescreen-desktop {
                font-size: 14px;
                line-height: 26px;
              }
            }
          }
        }
      }

      .img-wrapper {
        flex-direction: column;
        display: flex;
        align-items: center;
        h3 {
          font-size:30px;
          font-family: $font-family-main;
          color:rgba(0,114,227,1);
          line-height:42px;
          margin-top: 31px;
          text-align: center;
          @include touch {
            font-size: 24px;
            line-height: 34px;
            margin-top: 11px;
          }
        }
      }
    }
  }
</style>
