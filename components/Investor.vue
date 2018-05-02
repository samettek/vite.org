<template>
  <div class="columns is-multiline is-centered">
    <div :key="item.key" v-for="item in list" class="column is-one-quarter">
      <img class="investor-logo" :src="item.logo" alt="">
    </div>
  </div>
</template>

<script>
    export default {
      name: 'investment',
      data () {
        return {
          list: [
            {
              key: 'zhizi',
              logo: require('~/assets/images/investor/zhizi.png')
            },
            {
              key: 'hotCapital',
              logo: require('~/assets/images/investor/hot_capital.jpg')
            }
          ]
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .column {
    text-align: center;
  }
</style>
