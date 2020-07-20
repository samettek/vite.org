<template>
      <section class="sub-section">
            <div class="container">
                <h2>{{$t(`whatIsVite.${name}.title`)}}</h2>
                <div class="sub-section__feature">
                    <div class="sub-section__icon">
                        <div :key="item.name" v-for="item in features">
                            <img :src="item.icon" :alt="$t(`whatIsVite.${name}.${item.name}`)">
                            <span>{{$t(`whatIsVite.${name}.features.${item.name}`)}}</span>
                        </div>
                    </div>
                </div>
                <div class="sub-section__desc">
                  <div v-for="(desc, index) in descList" :key="index">
                    <div class="sub-section__desc-content">
                      <h3>{{desc.title}}</h3>
                      <div v-html="desc.text"></div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
</template>

<script>
const features = {
  tech: [
    {
      name: 'dag',
      icon: require('~/assets/images/whatIsVite/tech/dag.svg'),
    },
    {
      name: 'throughput',
      icon: require('~/assets/images/whatIsVite/tech/throughput.svg'),
    },
    {
      name: 'confirm',
      icon: require('~/assets/images/whatIsVite/tech/confirm.svg'),
    },
    {
      name: 'nofee',
      icon: require('~/assets/images/whatIsVite/tech/nofee.svg'),
    },
    {
      name: 'snapshotchain',
      icon: require('~/assets/images/whatIsVite/tech/snapshotchain.svg'),
    },
    {
      name: 'dex',
      icon: require('~/assets/images/whatIsVite/tech/dex.svg'),
    },
  ],
  dex: [
    {
      name: 'onChainMatch',
      icon: require('~/assets/images/whatIsVite/dex/onChainMatch.svg'),
    },
    {
      name: 'onChainSettle',
      icon: require('~/assets/images/whatIsVite/dex/onChainSettle.svg'),
    },
    {
      name: 'vx',
      icon: require('~/assets/images/whatIsVite/dex/vx.svg'),
    },
    {
      name: 'dividend',
      icon: require('~/assets/images/whatIsVite/dex/dividend.svg'),
    },
    {
      name: 'nokyc',
      icon: require('~/assets/images/whatIsVite/dex/nokyc.svg'),
    },
    {
      name: 'crossChain',
      icon: require('~/assets/images/whatIsVite/dex/crossChain.svg'),
    },
  ],
};
export default {
  props: {
    name: {
      type: String,
      default: 'tech',
    },
  },
  data() {
    return {};
  },
  computed: {
    features() {
      return features[this.name];
    },
    descList() {
      return this.$t(`whatIsVite.${this.name}.desc`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/vars.scss";

.sub-section {
  padding-top: 25px;
  padding-bottom: 25px;
  .container {
    & > h2 {
      font-size: 44px;
      text-align: center;
      line-height: 48px;
      @include title();
    }
  }
  &__feature {
    margin-top: 90px;
  }
  &__icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: -20px;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-family: $font-family-light;
      font-weight: 400;
      color: $font-title-color;
      font-size: 20px;
      padding: 20px;
      img {
        margin-bottom: 40px;
      }
    }
  }
  &__desc {
    margin: (45px - 24px) -24px -24px -24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    & > div {
      padding: 24px;
      flex: 1;
    }
  }
  &__desc-content {
    padding: 24px;
    border-radius: 6px;
    box-shadow: 0px 0px 20px 4px rgba(0,122,255,0.1);
    height: 100%;
    h3 {
      font-size: 20px;
      font-family: DINPro;
      text-align: left;
      color: #007aff;
      line-height: 24px;
    }
    & > div {
      margin-top: 18px;
      font-size: 14px;
      font-family: $font-family-light;
      font-weight: 400;
      text-align: left;
      color: #54565a;
      line-height: 30px;
    }
  }

  @include until($tablet) {
    padding-left: 20px;
    padding-right: 20px;
    &__icon {
      flex-wrap: wrap;
      justify-content: space-evenly;
      & > div {
        font-size: 16px;
        img {
          margin-bottom: 20px;
        }
      }
    }
    &__desc {
      & > div {
        width: 100%;
        flex: unset;
      }
    }
  }
}
</style>
