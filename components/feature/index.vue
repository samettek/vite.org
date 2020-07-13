<template>
  <div class="scroll-container">
    <div class="feature_wrapper is-flex">

      <div class="feature-left">
        <div class="arc-wrapper">
          <div class="arc-inner">
            <img :src="iconMap['performance']">
            <div>{{ features.performance.title }}</div>
          </div>
          <tag
            :tagKey="'performance'"
            style="top: -10px;left: 150px;">
          </tag>
          <tag
            :active='true'
            :tagKey="'performance'"
            :index='1'
            style="top: 50px;left: 150px;">
          </tag>
          <svg
            class="row-line"
            style="top: 16px;left: 91px;">
            <path d="M0 10 l10 -10">
            </path>
            <path d="M10 0 l 50 0">
            </path>
          </svg>
          <svg
            class="row-line"
            style="top: 65px;left: 91px;">
            <path d="M0 0 l10 10">
            </path>
            <path d="M10 10 l 50 0">
            </path>
          </svg>
        </div>

        <div class="arc-wrapper" style="margin-top: 30px;">
          <div class="arc-inner">
            <img :src="iconMap['safety']">
            <div>{{ features.safety.title }}</div>
          </div>
          <tag
            :tagKey="'safety'"
            style="top: -10px;left: 150px;">
          </tag>
          <tag
            :active='true'
            :tagKey="'safety'"
            :index='1'
            style="top: 50px;left: 150px;">
          </tag>
          <svg
            class="row-line"
            style="top: 16px;left: 91px;">
            <path d="M0 10 l10 -10">
            </path>
            <path d="M10 0 l50 0">
            </path>
          </svg>
          <svg
            class="row-line"
            style="top: 65px;left: 91px;">
            <path d="M0 0 l10 10">
            </path>
            <path d="M10 10 l 50 0">
            </path>
          </svg>
        </div>

        <div class="arc-wrapper" style="margin-top: 61px;">
          <div class="arc-inner">
            <img :src="iconMap['economical']">
            <div>{{ features.economical.title }}</div>
          </div>
          <tag
            :tagKey="'economical'"
            style="top: 80px;left: 150px;">
          </tag>
          <tag
            :tagKey="'economical'"
            :index='1'
            style="top: 20px;left: 150px;">
          </tag>
          <tag
            :tagKey="'economical'"
            :index='2'
            style="top: -40px;left: 150px;">
          </tag>

          <svg
            class="row-line row-line2"
            style="top: -16px;left: 82px;">
            <path d="M0 22 l22 -22">
            </path>
            <path d="M22 0 l38 0">
            </path>
          </svg>
          <svg
            class="row-line"
            style="top: 40px;left: 94px;">
            <path d="M0 5 l50 0">
            </path>
          </svg>
          <svg
            class="row-line row-line2"
            style="top: 82px;left: 84px;">
            <path d="M0 0 l22 22">
            </path>
            <path d="M22 22 l38 0">
            </path>
          </svg>
        </div>
      </div>

      <div class="feature-right">
        <div class="arc-wrapper" style="margin-top: 33px;">
          <div class="arc-inner">
            <img :src="iconMap['flexable']">
            <div>{{ features.flexable.title }}</div>
          </div>
          <tag
            :tagKey="'flexable'"
            style="top: -43px;left: -172px;">
          </tag>
          <tag
            :tagKey="'flexable'"
            :index='1'
            style="top: 17px;left: -172px;">
          </tag>
          <tag
            :tagKey="'flexable'"
            :index='2'
            style="top: 77px;left: -172px;">
          </tag>
          <svg
            class="row-line row-line2"
            style="top: -21px;left: -37px;">
            <path d="M60 22 l-22 -22">
            </path>
            <path d="M38 0 l -38 0">
            </path>
          </svg>
          <svg
            class="row-line"
            style="top: 33px;left: -50px;">
            <path d="M0 5 l48 0">
            </path>
          </svg>
          <svg
            class="row-line row-line2"
            style="top: 81px;left: -46px;">
            <path d="M60 0 l-22 22">
            </path>
            <path d="M38 22 l -38 0">
            </path>
          </svg>
        </div>

        <div class="arc-wrapper" style="margin-top: 120px;">
          <div class="arc-inner">
            <img :src="iconMap['easyusing']">
            <div>{{ features.easyusing.title }}</div>
          </div>
          <tag
            :tagKey="'easyusing'"
            style="top: -73px;left: -172px;">
          </tag>
          <tag
            :tagKey="'easyusing'"
            :index='1'
            style="top: -13px;left: -172px;">
          </tag>
          <tag
            :tagKey="'easyusing'"
            :index='2'
            :active='true'
            style="top: 47px;left: -172px;">
          </tag>
          <tag
            :tagKey="'easyusing'"
            :index='3'
            style="top: 107px;left: -172px;">
          </tag>
          <svg
            class="row-line row-line2"
            style="top: -55px;left: -46px;">
            <path d="M60 22 l-22 -22">
            </path>
            <path d="M38 0 l -38 0">
            </path>
          </svg>
          <svg
            class="row-line"
            style="top: 5px;left: -46px;">
            <path d="M50 10 l-10 -10">
            </path>
            <path d="M40 0 l -40 0">
            </path>
          </svg>
          <svg
            class="row-line"
            style="top: 63px;left: -46px;">
            <path d="M50 0 l-10 10">
            </path>
            <path d="M40 10 l -40 0">
            </path>
          </svg>
          <svg
            class="row-line row-line2"
            style="top: 107px;left: -44px;">
            <path d="M60 0 l-22 22">
            </path>
            <path d="M38 22 l -38 0">
            </path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import tag from './featureTag';

export default {
  components: {
    tag,
  },
  computed: {
    features() {
      return this.$i18n.locale === 'zh' ? this.features_zh : this.features_en;
    },
  },
  data() {
    return {
      features_zh: {
        performance: {
          title: '高性能',
        },
        safety: {
          title: '安全',
        },
        economical: {
          title: '经济',
        },
        easyusing: {
          title: '易用',
        },
        flexable: {
          title: '可扩展',
        },
      },
      features_en: {
        performance: {
          title: 'High Performance',
        },
        safety: {
          title: 'Security',
        },
        economical: {
          title: 'Powerful Economic Model',
        },
        easyusing: {
          title: 'Usability',
        },
        flexable: {
          title: 'Scalability',
        },
      },
      iconMap: {
        easyusing: require('~/assets/images/feature/easyusing.svg'),
        performance: require('~/assets/images/feature/performance.svg'),
        flexable: require('~/assets/images/feature/flexable.svg'),
        safety: require('~/assets/images/feature/safety.svg'),
        economical: require('~/assets/images/feature/economical.svg'),
      },
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.scroll-container {
  font-family: $font-family-title;
  width: 600px;
  display: flex;
  flex-direction: column;

}

.feature_wrapper {
  height: 450px;
  padding: 25px 0;
  @media only screen and (min-width: 320px) and (max-width: 767px)  {
    height: 100%;
    flex-direction: column;
  }
  .feature-left {
    margin-left: 30px;
    @media only screen and (min-width: 320px) and (max-width: 767px) {
      margin-left: 0px;
    }
  }
  .feature-right {
    margin-left: 420px;
    @media only screen and (min-width: 320px) and (max-width: 767px) {
      margin-top: 60px;
      margin-left: 155px;
    }
  }
  .arc-wrapper {
    position: relative;
    .arc-inner {
      border-radius: 100%;
      padding: 16px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      color: #1b4366;
      height: 91px;
      width: 91px;
      background: rgba(237, 246, 255, 1);
      text-align:center;
      font-size:12px;
      font-family:$font-family-title;
      font-weight:600;
      color:rgba(27,67,102,1);
      line-height:16px;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .row-line {
      position: absolute;
      width: 50px;
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
    .row-line2 {
      width: 60px;
      height: 22px;
    }
  }
}
</style>
