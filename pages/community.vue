<template>
    <div class="page-community">
        <page-header name="community"></page-header>
        <community id="community"></community>
    </div>
</template>

<script>
import Community from '~/components/community/index.vue';
import PageHeader from '~/components/PageHeader.vue';


export default {
    components: {
        Community,
        PageHeader
    }
}
</script>

<style lang="scss" scoped>

</style>