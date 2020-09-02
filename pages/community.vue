<template>
    <div class="page-community">
        <page-header name="community"></page-header>
        <community id="community"></community>
    </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import Community from '~/components/community/index.vue';

export default {
  components: {
    Community,
    PageHeader,
  },
};
</script>

<style lang="scss" scoped>

</style>
