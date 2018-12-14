<template>
  <div class="scroll-container">
    <div class="feature-title">{{$t('featureTitle')}}</div>
    <div class="feature-title2">{{$t('featureTitle2')}}</div>
    <div class="features">
      <!-- 1 -->
      <div class="item">
        <div class="arc-middle">
          <div class="arc-inner">
            <img :src="iconMap['performance']">
            <div>{{$t('features.performance.title')}}</div>
          </div>
        </div>
        <tag
          :tagKey="'performance'"
          style="top: 120px;left: 325px;"
        ></tag>
        <tag
          :active='true'
          :tagKey="'performance'"
          :index='1'
          style="top: 220px;left: 325px;"
        ></tag>
        <svg
          class="row-line"
          style="top: 153px;left: 267px;"
        >
          <path d="M0 10 l10 -10">
          </path>
          <path d="M10 0 l 30 0">
          </path>
        </svg>
        <svg
          class="row-line"
          style="top: 232px;left: 267px;"
        >
          <path d="M0 0 l10 10">
          </path>
          <path d="M10 10 l 30 0">
          </path>
        </svg>
      </div>
      <!-- 2 -->
      <div class="item">
        <div class="arc-middle">
          <div class="arc-inner">
            <img :src="iconMap['safety']">
            <div>{{$t('features.safety.title')}}</div>
          </div>
        </div>
        <tag
          :tagKey="'safety'"
          style="top: 300px;left: 220px;"
        ></tag>
        <tag
          :active='true'
          :tagKey="'safety'"
          :index="1"
          style="top: 300px;left: 20px;"
        ></tag>
        <svg
          class="row-line"
          style="top: 275px;left: 227px;transform:rotate(90deg)"
        >
          <path d="M0 10 l10 -10">
          </path>
          <path d="M10 0 l 30 0">
          </path>
        </svg>
        <svg
          class="row-line"
          style="top: 274px;left: 132px;transform:rotate(90deg)"
        >
          <path d="M0 0 l10 10">
          </path>
          <path d="M10 10 l 30 0">
          </path>
        </svg>
      </div>
      <!-- 3 -->
      <div class="item">
        <div class="arc-middle">
          <div class="arc-inner">
            <img :src="iconMap['economical']">
            <div>{{$t('features.economical.title')}}</div>
          </div>
        </div>
        <tag
          :tagKey="'economical'"
          style="top: 250px;left: -13px;"
        ></tag>
        <tag
          :tagKey="'economical'"
          :index='1'
          style="top: 175px;left: -55px;"
        ></tag>
        <tag
          :tagKey="'economical'"
          :index='2'
          style="top: 90px;left: -13px;"
        >
        </tag>
        <svg
          class="row-line"
          style="top: 120px;left: 130px;"
        >
          <path d="M40 10 l-10 -10">
          </path>
          <path d="M30 0 l -30 0">
          </path>
        </svg>
        <svg
          class="row-line"
          style="top: 200px;left: 90px;"
        >
          <path d="M0 5 l28 0">
          </path>
        </svg>
        <svg
          class="row-line"
          style="top: 270px;left: 130px;"
        >
          <path d="M40 0 l-10 10">
          </path>
          <path d="M30 10 l -30 0">
          </path>
        </svg>
      </div>
      <!-- 4 -->
      <div class="item">
        <div class="arc-middle">
          <div class="arc-inner">
            <img :src="iconMap['easyusing']">
            <div>{{$t('features.easyusing.title')}}</div>
          </div>
        </div>
        <tag
          :tagKey="'easyusing'"
          style="top: 120px;left: -50px;"
        ></tag>
        <tag
          :tagKey="'easyusing'"
          style="top: 35px;left: 40px;"
          :index="1"
        ></tag>
        <tag
          :tagKey="'easyusing'"
          style="top: 35px;left: 220px;"
          :index="2"
          :active="true"
        ></tag>
        <tag
          :tagKey="'easyusing'"
          style="top: 120px;left: 310px;"
          :index="3"
        ></tag>

        <svg
          class="row-line"
          style="top: 153px;left: 94px;"
        >
          <path d="M40 10 l-10 -10">
          </path>
          <path d="M30 0 l -30 0">
          </path>
        </svg>

        <svg
          class="column-line"
          style="top: 95px;left: 150px;"
        >
          <path d="M0 0 L20 20">
          </path>
          <path d="M20 20 L20 35">
          </path>
        </svg>
        <svg
          class="column-line"
          style="top: 95px;left: 230px;"
        >
          <path d="M20 0 l-20 20">
          </path>
          <path d="M0 20 L 0 35">
          </path>
        </svg>
        <svg
          class="row-line"
          style="top: 153px;left: 267px;"
        >
          <path d="M0 10 l10 -10">
          </path>
          <path d="M10 0 l 30 0">
          </path>
        </svg>
      </div>
      <!-- 5 -->
      <div class="item">
        <div class="arc-middle">
          <div class="arc-inner">
            <img :src="iconMap['flexable']">
            <div>{{$t('features.flexable.title')}}</div>
          </div>
        </div>
        <tag
          :tagKey="'flexable'"
          style="top: 90px;left: -25px;"
        ></tag>
        <tag
          :tagKey="'flexable'"
          :index="1"
          style="top: 30px;left: 130px;"
        ></tag>
        <tag
          :tagKey="'flexable'"
          :index="2"
          style="top: 90px;left: 270px;"
        ></tag>
        <svg
          class="row-line"
          style="top: 120px;left: 120px;"
        >
          <path d="M40 10 l-10 -10">
          </path>
          <path d="M30 0 l -30 0">
          </path>
        </svg>

        <svg
          class="column-line"
          style="top: 95px;left: 185px;"
        >
          <path d="M10 0 L10 25">
          </path>
        </svg>
        <svg
          class="row-line"
          style="top: 120px;left: 225px;"
        >
          <path d="M0 10 l10 -10">
          </path>
          <path d="M10 0 l 30 0">
          </path>
        </svg>
      </div>

    </div>
  </div>
</template>

<script type="text/babel">
import tag from "./featureTag";
export default {
  components: {
    tag
  },
  data() {
    return {
      iconMap: {
        easyusing: require("~/assets/images/feature/easyusing.svg"),
        performance: require("~/assets/images/feature/performance.svg"),
        flexable: require("~/assets/images/feature/flexable.svg"),
        safety: require("~/assets/images/feature/safety.svg"),
        economical: require("~/assets/images/feature/economical.svg")
      }
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.scroll-container {
  font-family: $font-family-title;
  width: 100%;
  overflow-x: auto;
  margin-top: 125px;
  display: flex;
  flex-direction: column;
    @include mobile {
  height: 750px;}

  .feature-title {
    color: #171c34;
    font-size: 44px;
    text-align: center;
  }
  .feature-title2 {
    text-align: center;
    width: 100%;
    margin-bottom: 60px;
  }
}

.features {
  @include mobile {
    transform: scale(0.7);
    transform-origin: 0 0;
    margin-left: 40px;
  }
  height: 850px;
  padding-bottom: 73px;
  width: 1420px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  .item {
    position: relative;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(4) {
      position: absolute;
      left: 245px;
      top: 380px;
    }
    &:last-child {
      position: absolute;
      left: 760px;
      top: 380px;
    }
    height: 400px;
    width: 400px;
    border: 1px dashed #007aff;
    .arc-middle {
      border-radius: 100%;
      height: 286px;
      width: 286px;
      background: rgba(248, 251, 255, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      .arc-inner {
        border-radius: 100%;
        padding: 30px 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #1b4366;
        height: 150px;
        width: 150px;
        background: rgba(237, 246, 255, 1);
        text-align:center;
      }
    }
    .column-line {
      position: absolute;
      width: 20px;
      height: 40px;
      path {
        shape-rendering: crispEdges;
        stroke: #007aff;
        stroke-width: 4px;
        fill: none;
        stroke-linecap: round;
        &:first-child {
          stroke-width: 2px;
          stroke-linecap: round;
        }
      }
    }
    .row-line {
      position: absolute;
      width: 40px;
      height: 10px;

      path {
        shape-rendering: crispEdges;
        stroke: #007aff;
        stroke-width: 4px;
        fill: none;
        stroke-linecap: round;
        &:first-child {
          stroke-width: 2px;
          stroke-linecap: round;
        }
      }
    }
  }
}
</style>
