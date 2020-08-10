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
    HomeSection,
  },
  data() {
    return {
      devToolBtns: [
        {
          name: 'learn',
          url: {
            name: 'development',
          },
        },
      ],
      communityBtns: [
        {
          name: 'join',
          url: {
            name: 'community',
          },
        },
      ],
    };
  },
  computed: {
    dappBtns() {
      return [
        {
          name: 'learn',
          url: this.$link('tutorial.dappDevelopment'),
        },
      ];
    },
    incentiveBtns() {
      return [
        {
          name: 'learn',
          url: this.$link('incentivePlan'),
        },
      ];
    },
    syraBtns() {
      return [
        {
          name: 'whitePaper',
          url: this.$link('syraWP'),
        },
        {
          name: 'learn',
          url: this.$link('forumContent.syra'),
        },
      ];
    },
    vitepayBtns() {
      return [
        {
          name: 'learn',
          url: this.$link('vitePayAnn'),
        },
        {
          name: 'toViteStore',
          url: this.$link('vitestore'),
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
