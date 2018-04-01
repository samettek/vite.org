<template>
  <div class="container">
    <div class="columns tech-item-wrapper">
      <div class="column">
        <div class="tech-img-wrapper image">
          <img src="/icon.png" alt="">
        </div>
      </div>
      <div class="column tech-item-detail">
        <h3>{{$t(`tech.dag.title`)}}</h3>
        <p>{{$t(`tech.dag.description`)}}</p>
        <p>
          <read-more url="http://doc.vite.org"></read-more>
        </p>
      </div>
    </div>
    <div class="columns is-gapless tech-item-wrapper row-reverse">
      <div class="column">
        <div class="tech-img-wrapper image">
          <img src="/icon.png" alt="">
        </div>
      </div>
      <div class="column tech-item-detail">
        <h3>{{$t(`tech.snapshotChain.title`)}}</h3>
        <p>{{$t(`tech.snapshotChain.description`)}}</p>
        <p>
          <read-more url="http://doc.vite.org"></read-more>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import ReadMore from '~/components/ReadMore'

  export default {
    components: {
      ReadMore
    },
    data: function () {
      return {
        imgs: {
          dag: require('~/assets/images/bg.jpg')
        }
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .row-reverse {
    flex-direction: row-reverse;
  }

  .tech-item-wrapper {
    .tech-img-wrapper {
      max-height: 50rem;
      height: auto;
      img {
        max-height: 50rem;
        height: auto;
        width: 100%;
      }
    }
    .tech-item-detail {
      & > h3 {
        font-size: 1.5rem;
        color: #111111;
        line-height: 1.81rem;
        font-weight: normal;
        margin-bottom: 1.25rem;
        padding: 3rem 1rem 0 1rem;
      }
      & > p {
        padding: 1rem;
        line-height: 1.75rem;
        color: #111111;
        font-size: 1.13rem;
        font-weight: 200;
      }
    }
  }
</style>
