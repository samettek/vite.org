<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 style="margin-bottom: 50px;">{{$t('products.title')}}</h1>
        <products></products>
      </div>
    </section>
  </div>

</template>

<script>
import Products from '~/components/Products/index.vue';

export default {
  components: {
    Products
  },
  data() {
    return {
    };
  },
  computed: {
    
  },
  methods: {
  }
};
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";
  .section {
    padding-top: 92px;
    @include touch {
      padding-top: 25px;
    }
    
  }

</style>
