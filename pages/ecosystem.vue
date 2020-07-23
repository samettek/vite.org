<template>
    <div class="page-ecosystem">
        <page-header name="ecosystem"></page-header>
        <home-section name="dapp" :buttons="dappBtns"></home-section>
        <home-section name="devTool" :buttons="devToolBtns"></home-section>
        <home-section name="incentive" :buttons="incentiveBtns" center></home-section>
        <home-section name="community" :buttons="communityBtns"></home-section>
        <home-section name="syracoin" :buttons="syraBtns"></home-section>
        <home-section name="vitepay" :buttons="vitepayBtns" center></home-section>
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import HomeSection from '~/components/HomeSection';


export default {
    components: {
        PageHeader,
        HomeSection
    },
    data() {
        return {
            devToolBtns: [
                {
                    name: 'learn',
                    url: {
                        name: 'develepment'
                    }
                }
            ],
            communityBtns: [
                {
                    name: 'join',
                    url: {
                        name: 'community'
                    }
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
        incentiveBtns() {
            return [
                {
                    name: 'learn',
                    url: this.$t('home.sections.incentive.urls.learn')
                }
            ]
        },
        syraBtns() {
            return [
                {
                    name: 'whitePaper',
                    url: "https://github.com/vitelabs/whitepaper/blob/master/SyraCoinWhitePaper.pdf"
                },
                {
                    name: 'learn',
                    url: this.$t('home.sections.syracoin.urls.whitePaper')
                }
            ];
        },
        vitepayBtns() {
            return [
                {
                    name: 'learn',
                    url: this.$t('home.sections.vitepay.urls.learn')
                },
                {
                    name: 'toViteStore',
                    url: 'https://vite.store/'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>