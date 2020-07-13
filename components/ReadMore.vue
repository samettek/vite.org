<template>
    <a :href="url" target="_blank">
      <span>{{$t('utils.readMore')}}</span>
      <fa-icon class="icon" :icon="['fas', 'plus-circle']" />
    </a>
</template>

<script type="text/babel">
export default {
  props: ['url'],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '~assets/vars';
  .icon {
    font-size: 1rem;
    height: inherit;
    margin-left: 0.3rem;
  }
  a {
    color: #999999;
    &:hover {
      color: rgba(0,0,0,0.6);
    }
  }
</style>
