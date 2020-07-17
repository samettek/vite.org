<template>
    <div class="page-what-is-vite">
        <page-header name="whatIsVite"></page-header>

        <sub-section name="tech"></sub-section>
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import SubSection from '~/components/whatIsVite/SubSection.vue';

export default {
  components: {
    PageHeader,
    SubSection,
  }
};
</script>

<style lang="scss" scoped>

</style>
