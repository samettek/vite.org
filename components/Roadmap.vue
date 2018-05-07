<template>
  <section>
    <div class="container">
      <div class="logo">
        <logo-without-words></logo-without-words>
        <h3>{{$t('roadmap.title')}}</h3>
      </div>
      <div class="v-content">
        <span class="v-title">
          {{selectedItem.time}}
        </span>
        <div class="v-description">
          <p>
            {{selectedItem.description}}
          </p>
        </div>
        <svg class="v-arrow" width="31px" height="58px" viewBox="0 0 31 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-430.000000, -2806.000000)" stroke-width="2" stroke="currentColor">
              <g transform="translate(0.000000, 2572.000000)">
                <polyline id="Rectangle-2-Copy-2" points="460 291 432 263 460 235"></polyline>
              </g>
            </g>
          </g>
        </svg>
        <svg class="v-arrow arrow-reverse" width="31px" height="58px" viewBox="0 0 31 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-430.000000, -2806.000000)" stroke-width="2" stroke="currentColor">
              <g transform="translate(0.000000, 2572.000000)">
                <polyline id="Rectangle-2-Copy-2" points="460 291 432 263 460 235"></polyline>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="v-footer">
        <div class="ul-wrapper">
          <ul>
            <li :key="index" v-for="(item, index) in showList">
            <span>
              {{item.time}}
            </span>
            </li>
          </ul>
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
        selected: 1
      }
    },
    computed: {
      timelines () {
        return this.$t('roadmap.timelines')
      },
      showList () {
        if (Array.isArray(this.timelines)) {
          return this.timelines.slice(0, 10)
        }
        return []
      },
      selectedItem () {
        if (this.timelines) {
          return this.timelines[this.selected]
        }
        return {}
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  section {
    padding: 92px 0 119px 0;
    background:rgba(231,231,231,1);
    .logo {
      height: 41px;
      position: relative;
      svg {
        height: 42px;
        color: #999999;
        position: absolute;
        left: 0;
        top: 0;
      }
      h3 {
        margin-left: 46px;
        font-size:30px;
        font-family:PingFangSC-Medium;
        color:rgba(153,153,153,1);
        line-height:42px;
      }
    }
    .container {
      border: 5px solid #B8B8B8;
      height: 470px;
      /*padding: 30px 60px;*/
      position: relative;
      overflow: hidden;
      .v-arrow {
        height: 56px;
        width: 28px;
        position: absolute;
        left: 60px;
        color: #999999;
        top: 143px;
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

      .v-footer {
        height: 105px;
        position: absolute;
        bottom: 60px;
        width: 100%;
        .ul-wrapper {
          height: 89px;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        ul {
          display: flex;
          justify-content: space-between;
          width: 100%;
          li {
            font-size: 14px;
            text-align: right;
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            span {
              transform: rotate(90deg);
              text-align: right;
            }
          }
        }
      }
    }
  }
</style>
