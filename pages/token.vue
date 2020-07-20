<template>
    <div class="page-what-is-vite">
        <page-header name="token"></page-header>
        <section class="token-info container">
            <h2>{{$t('token.info.title')}}</h2>
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
        <section class="section-token-using container">
            <h2>{{$t('token.using.title')}}</h2>
            <div>
                <div v-for="item in tokenUsing" :key="item.name" class="using-item">
                    <div>
                        <h3>{{$t(`token.using.${item.name}.title`)}}</h3>
                        <div v-html="$t(`token.using.${item.name}.text`)"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import Distribution from '~/components/token/Distribution';
import nodeList from '~/components/whatIsVite/nodeList.js';

export default {
  components: {
    PageHeader,
    Distribution,
  },
  data() {
    return {
      nodeList,
      tokenUsing: [
        {
          name: 'stakingForQuota',
          url: '',
        },
        {
          name: 'stakingForMining',
          url: '',
        },
        {
          name: 'stakingForVip',
          url: '',
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";

.token-info {
    padding-top: 150px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        @include title();
        font-size: 44px;
        line-height: 48px;
    }
    .token-info-desc {
        margin-top: 90px;
        display: flex;
        width: 100%;
        max-width: 900px;
        flex-direction: row;
        justify-content: space-around;
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            @include title();
            font-size: 20px;
            line-height: 24px;
            img {
                margin-bottom: 42px;
            }
        }
    }
}

.section-token-using {
    padding: 150px 20px;
    & > h2 {
        @include title();
        font-size: 44px;
        line-height: 48px;
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
        }
        h3 {
            @include title();
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 18px;
        }
    }
}

@include until($desktop) {
    .section-token-using {
        padding: 60px 10px;
        & > div {
            margin: -10px;
            display: flex;
            flex-direction: column;
        }
        .using-item {
            margin: 10px;
        }
    }
}
</style>
