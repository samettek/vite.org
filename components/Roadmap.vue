<template>
  <section>
    <div class="container">
      <div class="columns">
        <div class="column roadmap-slider is-three-quarters">
          <div class="logo">
            <logo-without-words></logo-without-words>
            <h3>{{$t('roadmap.title')}}</h3>
          </div>
          <transition name="in-out-translate-fade" mode="out-in">
            <div :key="selected" class="v-content">
                <span class="v-title">
                  {{selectedItem.time}}
                </span>
              <div class="v-description">
                <p v-for="desc in selectedItem.description">
                  {{desc}}
                </p>
              </div>
            </div>
          </transition>

          <svg @click="onPrev" class="v-arrow" width="31px" height="58px" viewBox="0 0 31 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-430.000000, -2806.000000)" stroke-width="2" stroke="currentColor">
                <g transform="translate(0.000000, 2572.000000)">
                  <polyline id="Rectangle-2-Copy-2" points="460 291 432 263 460 235"></polyline>
                </g>
              </g>
            </g>
          </svg>
          <svg @click="onNext" class="v-arrow arrow-reverse" width="31px" height="58px" viewBox="0 0 31 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-430.000000, -2806.000000)" stroke-width="2" stroke="currentColor">
                <g transform="translate(0.000000, 2572.000000)">
                  <polyline id="Rectangle-2-Copy-2" points="460 291 432 263 460 235"></polyline>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="v-list column is-hidden-touch">
            <div class="list-wrapper">
              <div
                   :key="index"
                   class="item"
                   :class="{ active: index === selected || index === hover }"
                   @click="onClick(index)"
                   v-for="(item, index) in timelines">
                <span>
                  {{item.time}}
                </span>
                <div class="line"></div>
              </div>
            </div>

            <div class="list-wrapper">
              <div @mouseover="onHover(index)"
                   @mouseout="onOut(index)"
                   class="item"
                   @click="onClick(index)"
                   :class="{ active: index === selected }"
                   :key="index" v-for="(item, index) in timelines">
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
  import LogoWithoutWords from '~/components/LogoWithoutWords.vue'

  export default {
    components: {
      LogoWithoutWords
    },
    data: function () {
      return {
        selected: 2,
        hover: null
      }
    },
    computed: {
      timelines () {
        let roadmaps = this.$t(`roadmap.timelines`)
        if (!Array.isArray(roadmaps)) {
          return []
        }
        return roadmaps.map(item => {
          if (!Array.isArray(item.description)) {
            return {
              ...item,
              description: [item.description]
            }
          }
          return item
        })
      },
      selectedItem () {
        if (this.timelines) {
          return this.timelines[this.selected]
        }
        return {}
      }
    },
    methods: {
      onHover (index) {
        this.hover = index
      },
      onOut () {
        this.hover = null
      },
      onClick (index) {
        this.selected = index
      },
      onNext () {
        if (this.selected !== this.timelines.length - 1) {
          this.selected = this.selected + 1
        }
      },
      onPrev () {
        if (this.selected !== 0) {
          this.selected = this.selected - 1
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .in-out-translate-fade-enter-active, .in-out-translate-fade-leave-active {
    transition: all 0.5s;
  }
  .in-out-translate-fade-enter, .in-out-translate-fade-leave-active {
    opacity: 0;
  }
  .in-out-translate-fade-enter {
    /*transform: translateX(50px);*/
  }
  .in-out-translate-fade-leave-active {
    /*transform: translateX(-308px);*/
  }


  section {
    padding: 92px 0;
    background:rgba(231,231,231,1);
    .logo {
      height: 41px;
      position: relative;
      svg {
        height: 42px;
        color: #333333;
        position: absolute;
        left: 0;
        top: 0;
      }
      h3 {
        margin-left: 46px;
        font-size:30px;
        font-family:PingFangSC-Medium;
        color:#333333;
        line-height:42px;
      }
    }
    .container {
      .roadmap-slider {
        border: 5px solid #333333;
        height: 470px;
        padding: 30px 60px;
        position: relative;
        overflow: hidden;
      }

      .v-arrow {
        height: 56px;
        width: 28px;
        position: absolute;
        left: 60px;
        color: #999999;
        top: 212px;
        &:hover {
          color: rgba(0,114,227,1);
          cursor: pointer;
        }
        &.arrow-reverse {
          right: 60px;
          left: auto;
          transform: rotate(180deg);
        }
      }
      .v-content {
        text-align: center;
        .v-title {
          height:100px;
          font-size:72px;
          font-family:PingFangSC-Semibold;
          color:rgba(0,114,227,1);
          line-height:100px;
          margin-bottom: 32px;
          margin-top: 45px;
          display: block;
        }
        .v-description {
          height: 110px;
          & > p {
            font-size:24px;
            font-family:PingFangSC-Medium;
            color:rgba(51,51,51,1);
            line-height:35px;
          }
        }
      }
      .v-list {
        padding-top: 0;

        display: flex;
        flex-direction: row;
        .list-wrapper {
          &:first-child {
            margin-left: 35px;
          }

          &:last-child {
            .item {
              height: 16px;
            }
          }

          flex: 1;
          font-size:16px;
          font-family:PingFangSC-Medium;
          color:rgba(188,188,188,1);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .item {
            position: relative;
            &.active {
              color: #333333;
              .line {
                background: #333333;
                height: 4px;
                top: 10px;
              }
            }

            &:hover {
              color: #333333;
              cursor: pointer;
              .line {
                background: #333333;
                height: 4px;
                top: 10px;
              }
            }
            .line {
              height:1px;
              background:rgba(216,216,216,1);
              position: absolute;
              width: 100%;
              right: -100%;
              top: 13px;
              transition: height 0.4s ease;
              transition: background 0.9s ease;
              &:hover {
                background: #333333;
                height: 4px;
                top: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
