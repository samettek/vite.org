<template>
    <div class="page-ecosystem">
        <page-header name="ecosystem"></page-header>
        <home-section name="dapp" :buttons="dappBtns"></home-section>
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
        return {}
    },
    computed: {
        dappBtns() {
            return [
                {
                    name: 'learn',
                    url: this.$t('home.sections.dapp.urls.learn')
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>