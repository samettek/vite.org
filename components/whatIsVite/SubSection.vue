<template>
            <section class="sub-section">
            <div class="container">
                <h2>{{$t('whatIsVite.tech.title')}}</h2>
                <div class="sub-section__feature">
                    <div class="sub-section__icon">
                        <div :key="item.name" v-for="item in features">
                            <img :src="item.icon" :alt="$t(`whatIsVite.${name}.${item.name}`)">
                            <span>{{$t(`whatIsVite.${name}.features.${item.name}`)}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
const features = {
  tech: [
    {
      name: 'dag',
      icon: require('~/assets/images/whatIsVite/tech/dag.svg'),
    },
    {
      name: 'throughput',
      icon: require('~/assets/images/whatIsVite/tech/throughput.svg'),
    },
    {
      name: 'confirm',
      icon: require('~/assets/images/whatIsVite/tech/confirm.svg'),
    },
    {
      name: 'nofee',
      icon: require('~/assets/images/whatIsVite/tech/nofee.svg'),
    },
    {
      name: 'snapshotchain',
      icon: require('~/assets/images/whatIsVite/tech/snapshotchain.svg'),
    },
    {
      name: 'dex',
      icon: require('~/assets/images/whatIsVite/tech/dex.svg'),
    },
  ],
};
export default {
  props: {
    name: {
      type: String,
      default: 'tech',
    },
  },
  data() {
    return {};
  },
  computed: {
    features() {
      return features[this.name];
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
