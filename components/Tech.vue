<template>
  <div class="container">
    <div :key="item.key" v-for="(item, index) in list" class="columns tech-item-wrapper" :class="{'row-reverse': index % 2 === 1}">
      <div class="column">
        <div class="tech-img-wrapper image">
          <img :src="item.img" alt="">
        </div>
      </div>
      <div class="column tech-item-detail">
        <h3>{{$t(`tech.${item.key}.title`)}}</h3>
        <p v-for="(item, index) in renderDesc(item.key)" :key="index">
          {{item}}
        </p>
        <p>
          <read-more :url="item.readMore"></read-more>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import ReadMore from '~/components/ReadMore';

export default {
  components: {
    ReadMore,
  },
  data() {
    return {
      list: [
        {
          key: 'dag',
          img: require('~/assets/images/block_lattice.png'),
          readMore: 'https://vite.wiki',
        },
        {
          key: 'snapshotChain',
          img: '/icon.png',
          readMore: 'https://vite.wiki',
        },
        {
          key: 'async',
          img: '/icon.png',
        },
        {
          key: 'reactiveContract',
          img: '/icon.png',
        },
        {
          key: 'ecosystem',
          img: '/icon.png',
        },
      ],
    };
  },
  methods: {
    renderDesc(key) {
      const desc = this.$t(`tech.${key}.description`);
      if (Array.isArray(desc)) {
        return desc;
      }
      return [desc];
    },
  },
};
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
        padding: 3rem 1rem 1rem 1rem;
      }
      & > p {
        padding: 0 1rem 0.5rem 1rem;
        line-height: 1.75rem;
        color: #111111;
        font-size: 1rem;
        font-weight: 200;
        &:last-child {
          margin-top: 1rem;
        }
      }
    }
  }
</style>
