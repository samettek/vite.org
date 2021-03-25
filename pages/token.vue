<template>
    <div class="page-what-is-vite">
        <page-header name="token"></page-header>
        <section class="token-info container">
            <h2 class="section-title">{{$t('token.info.title')}}</h2>
            <div class="token-info-desc">
                <div>
                    <img src="~/assets/images/tokenInfo/tokenName.svg" alt="">
                    <div>{{$t('token.info.tokenName')}}</div>
                </div>
                <div>
                    <img src="~/assets/images/tokenInfo/issueDate.svg" alt="">
                    <div>{{$t('token.info.issueDate')}}</div>
                </div>
                <div>
                    <img src="~/assets/images/tokenInfo/totalSuply.svg" alt="">
                    <div>{{$t('token.info.totalSuply')}}</div>
                </div>
            </div>
        </section>

        <distribution></distribution>
        <section class="section-token-using container padding-until-desktop">
            <h2 class="section-title">{{$t('token.using.title')}}</h2>
            <div>
                <div v-for="item in tokenUsing" :key="item.name" class="using-item">
                    <div>
                        <div>
                            <h3>{{$t(`token.using.${item.name}.title`)}}</h3>
                            <div class="text-wrapper" v-html="$t(`token.using.${item.name}.text`)"></div>
                        </div>
                        <div>
                            <a class="button section-button" :href="item.url" target="_blank">{{$t(`token.using.${item.name}.btn`)}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-get-token">
            <div class="container padding-until-desktop">
                <h2 class="section-title" id="getToken">{{$t('token.getToken.title')}}</h2>
                <div class="exchange-list">
                    <h3>{{$t('token.getToken.exchange')}}</h3>
                    <div>
                        <a v-for="exchange in exchangeList" :key="exchange.name" :href="exchange.link" target="_blank">
                            <img :src="exchange.logo" :alt="exchange.name">
                        </a>
                    </div>
                </div>
                <div class="section-get-token__content">
                    <div key="runSBP">
                        <h3>{{$t(`token.getToken.runSBP.title`)}}</h3>
                        <div class="section-get-token__desc">{{$t(`token.getToken.runSBP.desc`)}}</div>
                        <div>
                            <nuxt-link tab="a" class="button section-button" to="superNodes">{{$t(`token.getToken.learn`)}}</nuxt-link>
                        </div>
                    </div>
                    <div key="runFullnode">
                        <h3>{{$t(`token.getToken.runFullnode.title`)}}</h3>
                        <div class="section-get-token__desc">{{$t(`token.getToken.runFullnode.desc`)}}</div>
                        <div>
                            <a class="button section-button" :href="$link('docs.fullnode')" target="_blank">{{$t(`token.getToken.learn`)}}</a>
                        </div>
                    </div>
                    <div key="vote">
                        <h3>{{$t(`token.getToken.vote.title`)}}</h3>
                        <div class="section-get-token__desc">{{$t(`token.getToken.vote.desc`)}}</div>
                        <div>
                            <a class="button section-button" :href="$link('usingVite.votingForSBP')" target="_blank">{{$t(`token.getToken.vote.btnGroup.tutorial`)}}</a>
                            <a class="button section-button" :href="$link('vote.paysbp')" target="_blank">{{$t(`token.getToken.vote.btnGroup.sbpList`)}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <home-section name="wallet" :buttons="walletBtns"></home-section>
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import Distribution from '~/components/token/Distribution';
import nodeList from '~/components/whatIsVite/nodeList.js';
import HomeSection from '~/components/HomeSection';
import config from '~/config.js';

const exchangeList = [
  {
    name: 'binance',
    logo: require('~/assets/images/exchange/binance.svg'),
    link: config.urls.exchange.binance,
  },
  {
    name: 'okex',
    logo: require('~/assets/images/exchange/okex.svg'),
    link: config.urls.exchange.okex,
  },
  {
    name: 'vitex',
    logo: require('~/assets/images/exchange/vitex.svg'),
    link: config.urls.exchange.vitex,
  },
  {
    name: 'bittrex',
    logo: require('~/assets/images/exchange/bittrex.svg'),
    link: config.urls.exchange.bittrex,
  },
  {
    name: 'upbit',
    logo: require('~/assets/images/exchange/upbit.svg'),
    link: config.urls.exchange.upbit,
  },
];

export default {
  components: {
    PageHeader,
    Distribution,
    HomeSection,
  },
  data() {
    return {
      nodeList,
      exchangeList,
    };
  },
  computed: {
    walletBtns() {
      return [
        {
          name: 'ios',
          url: this.$link('viteApp.ios'),
        },
        {
          name: 'android',
          url: this.$link('viteApp.android'),
        },
        {
          name: 'qr',
          url: this.$link('app'),
        },
        {
          name: 'learn',
          url: this.$link('forumContent.app'),
        },
      ];
    },
    tokenUsing() {
      return [
        {
          name: 'stakingForQuota',
          url: this.$link('usingVite.stakingForQuota'),
        },
        {
          name: 'stakingForMining',
          url: this.$link('usingVite.stakingForMining'),
        },
        {
          name: 'votingForSBP',
          url: this.$link('usingVite.votingForSBP'),
        },
      ];
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";

.section-title {
    @include title();
    font-size: 44px;
    line-height: 48px;

    @include until($desktop) {
        line-height: 24px;
        font-size: 20px;
    }
}

.token-info {
    padding-top: 150px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .token-info-desc {
        margin-top: 90px;
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        & > div {
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /*word-break: break-all;*/
            @include title();
            text-align: center;
            font-size: 20px;
            line-height: 24px;
            img {
                margin-bottom: 42px;
            }
        }
    }
}

.section-token-using {
    padding: 150px 0;
    .section-title {
        text-align: center;
        margin-bottom: 90px;
    }
    & > div {
        display: flex;
        flex-direction: row;
        margin: -22px;
    }
    .using-item {
        flex: 1;
        box-shadow: 0px 0px 20px 4px rgba(0,122,255,0.1);
        margin: 22px;
        & > div {
            padding: 30px 18px;
            font-size: 14px;
            line-height: 30px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }
        .text-wrapper {
            text-align: left;
            margin-bottom: 30px;
        }
        h3 {
            @include title();
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 18px;
        }
    }
}
.section-get-token {
    padding: 90px 0;
    background-color: #F5FAFF;
    .section-title {
        margin-bottom: 80px;
        text-align: center;
    }
    h3 {
        @include title();
        text-align: left;
        color: #171c34;
        line-height: 24px;
        font-size: 20px;
        margin-bottom: 30px;
    }
    .exchange-list {
        & > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 60px;
            img {
                margin-right: 60px;
            }
        }
    }
    .section-get-token__desc {
        line-height: 30px;
        font-weight: 400;
        color: #54565a;
        font-size: 14px;
        margin-bottom: 20px;
    }
    .section-get-token__content {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        & > div {
            width: 50%;
            &:last-child {
                margin-top: 70px;
            }
        }
    }
}

@include until($desktop) {
    .token-info {
        padding-top: 60px;
        padding-bottom: 20px;
        .section-title {
            margin-bottom: 30px
        }
        .token-info-desc {
            margin-top: 30px;
            & > div {
                font-size: 12px;
                img {
                    height: 50px;
                    width: auto;
                }
            }
        }
    }
    .section-token-using {
        padding: 60px 10px 30px 10px;
        & > div {
            margin: -10px;
            display: flex;
            flex-direction: column;
        }
        .using-item {
            margin: 10px;
        }
        .section-title {
            margin-bottom: 30px;
        }
    }
    .section-get-token {
        padding-top: 60px;
        padding-bottom: 30px;
        .section-title {
            margin-bottom: 30px;
        }
        .exchange-list {
            & > div {
                justify-content: space-around;
                margin-top: -20px;
                margin-right: -60px;
                a {
                    margin-top: 20px;
                }
            }
        }
        .section-get-token__content {
            flex-direction: column;
            & > div {
                width: 100%;
                margin-top: 70px;
                &:first-child {
                    margin-top: 0;
                }
            }
        }
    }
}
</style>
