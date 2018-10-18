<template>
  <div>
    <section>
      <h1 style="text-align: center">Vite 特性</h1>
      <div class="bg-container">
        <div class="container">
          <img src="~assets/images/feature/safe.svg"/>
          <img src="~assets/images/feature/hexagon.svg"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/babel">
  export default {
    components: {
    },
    data: function () {
      return {
        features: [
          {
            key: 'performance',
            content: ['dag', 'async']
          },
          {
            key: 'reactiveContract',
            content: ['messageDriven', 'solidity']
          },
          {
            key: 'ecosystem',
            content: ['value', 'dapp']
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  section {
    .bg-container {
      width: 100%;
      height: 646px;
      background-size: contain;
      background-image: url("~assets/images/feature/bg.svg")
    }
  }
</style>
