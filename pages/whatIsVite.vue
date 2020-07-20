<template>
    <div class="page-what-is-vite">
        <page-header name="whatIsVite"></page-header>
        <div class="sub-section-wrapper">
          <sub-section name="tech"></sub-section>
          <sub-section name="dex"></sub-section>
        </div>
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import SubSection from '~/components/whatIsVite/SubSection.vue';

export default {
  components: {
    PageHeader,
    SubSection,
  },
};
</script>

<style lang="scss" scoped>
.sub-section-wrapper {
  padding-top: 125px;
  padding-bottom: 125px;
}
</style>
