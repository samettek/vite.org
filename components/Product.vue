<template>
  <section>
    <h1 class="product-title">{{ $t('product.title')}}</h1>

    <div class="container is-flex">
    </div>
  </section>
</template>

<script type="text/babel">
export default {
  components: {},
  data: function () {
    return {
    };
  },
  computed: {
    
  },
  methods: {
    
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
  height: 700px;
  @include mobile {
    height: 360px;
  }
  .product-title {
    text-align: center;
    padding-top: 109px;
    @include mobile {
      padding-top: 30px;
    }
  }
 
}
</style>
