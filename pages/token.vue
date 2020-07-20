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
</style>
