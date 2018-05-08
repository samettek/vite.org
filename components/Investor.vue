<template>
  <section id="investor" class="section">
    <div class="container" v-in-viewport>
      <h2 class="title section-title inview1 animated fadeInDown delay-0-800">
        {{$t('investor.title')}}
      </h2>
      <div class="columns is-multiline is-centered">
        <div :key="item.key" v-for="item in list" class="column is-one-quarter">
          <img class="investor-logo" :src="item.logo" alt="">
        </div>
      </div>
    </div>
  </section>
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
