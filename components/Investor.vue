<template>
  <div class="columns is-multiline is-centered is-mobile">
    <div :key="item.key" v-for="item in list" class="column is-one-fifth is-4-mobile">
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
              logo: require('~/assets/images/investor/hot_capital.png')
            },
            {
              key: 'dazhi',
              logo: require('~/assets/images/investor/dazhi.png')
            },
            {
              key: 'handsome',
              logo: require('~/assets/images/investor/handsome.png')
            },
            {
              key: 'hesheng',
              logo: require('~/assets/images/investor/hesheng.png')
            },
            {
              key: 'b100',
              logo: require('~/assets/images/investor/b100.png')
            }
          ]
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .column {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
