<template>
    <div class="page-community">
        <page-header name="development" :buttons="headerBtns"></page-header>
        <home-section name="dapp" :buttons="dappBtns"></home-section>
        <section class="dev-support">
            <div class="container">
                <h2>{{$t('development.support.title')}}</h2>
                <div class="dev-support__content">
                    <div class="dev-support__item">
                        <h4>{{$t('development.support.sdk.title')}}</h4>
                        <div>
                            Go, <a href="https://vite.wiki/api/vitejs/" target="_blank">JS/TS</a>, 
                            <a href="https://vite.wiki/api/javasdk/" target="_blank">Java</a>
                        </div>
                    </div>
                    <div class="dev-support__item">
                        <h4>{{$t('development.support.docs.title')}}</h4>
                        <i18n path="development.support.docs.desc" tag="div">
                            <a place="wiki" 
                               href="https://vite.wiki/zh/tutorial/contract/contract.html" 
                               target="_blank">{{$t('development.support.docs.wiki')}}</a>
                        </i18n>
                    </div>
                    <div class="dev-support__item">
                        <h4>{{$t('development.support.community.title')}}</h4>
                        <div>{{$t('development.support.community.desc')}}</div>
                    </div>
                </div>
            </div>
        </section>

        <home-section name="joinDev" :buttons="joinDevBtns" center></home-section>
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import HomeSection from '~/components/HomeSection';
 

export default {
    components: {
        PageHeader,
        HomeSection,
    },
    data() {
        return {
            headerBtns: [
                {
                    name: 'wiki',
                    url: 'https://vite.wiki'
                },
                {
                    name: 'github',
                    url: 'https://github.com/vitelabs'
                },
                {
                    name: 'docs',
                    url: 'https://vite.wiki/tutorial/contract/contract.html#what-is-asynchronous-smart-contract'
                }
            ],
        }
    },
    computed: {
        dappBtns() {
            return [
                {
                    name: 'learn',
                    url: this.$t('home.sections.dapp.urls.learn')
                },
            ]
        },
        joinDevBtns() {
            return [
                {
                    name: 'techGroup',
                    url: 'https://t.me/vite_en'
                },
                {
                    name: 'toForum',
                    url: this.$t('development.join.forumTechUrl')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";

.dev-support {
    padding-top: 90px;
    padding-bottom: 90px;
    background-color: #F5FAFF;
    h2 {
        @include title();
        font-size: 44px;
        line-height: 48px;
        text-align: center;
        margin-bottom: 90px;
    }
    &__content {
        display: flex;
        flex-direction: row;
        margin: -48px;
    }
    &__item {
        flex: 1;
        margin: 48px;
        padding: 40px 30px;
        border-radius: 6px;
        box-shadow: 0px 0px 20px 4px rgba(0,122,255,0.1); 
        color: #171c34;
        h4 {
            @include title();
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 30px;
        }
        & > div {
            font-size: 16px;
            line-height: 30px;
        }
    }

    @include until($desktop) {
        padding: 60px 15px;
        h2 {
            line-height: 24px;
            font-size: 20px;
            margin-bottom: 30px;
        }
        &__content {
            flex-direction: column;
            margin: -20px
        }
        &__item {
            margin: 20px;
        }
    }
}
</style>