<template>
  <section>
    <sub-title :title="$t(`team.${title}`)"></sub-title>
    <div class="columns is-multiline">
      <div
        class="column item is-3-widescreen is-6-tablet is-12-mobile"
        v-for="(item) in list"
        :key="item.key"
        v-if="list.length"
      >
        <div class="is-info">
          <team-image
            :src="item.img"
            :name="item.key"
            :urls="item.urls"
          ></team-image>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
import TeamImage from './TeamImage';
import subTitle from '~/components/subTitle';

export default {
  components: {
    TeamImage,
    subTitle,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {

    };
  },
  methods: {},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .is-info {
    display: flex;
  }
  .columns {
    margin-top: 24px;
    margin-bottom: 55px;
  }

</style>
