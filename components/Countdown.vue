<template>
  <div v-if="chainHeight">
    <client-only>
      <countdown :time="time" class="countdown">
        <template
          slot-scope="props"
        >
        {{$t('countdown.template', props)}}
        </template>
      </countdown>
    </client-only>
  </div>
</template>

<script>
import Countdown from '@chenfengyuan/vue-countdown';

export default {
  components: {
    Countdown,
  },
  data() {
    return {
      chainHeight: null,
      targetChainHeight: 39694000,
    };
  },
  mounted() {
    this.getHeight();
  },
  computed: {
    time() {
      if (!this.chainHeight) return null;
      return (this.targetChainHeight - this.chainHeight) * 1000;
    },
  },
  methods: {
    async getHeight() {
      const data = await this.$axios.$post('https://api.vitewallet.com/ios/', {
        jsonrpc: '2.0',
        id: 1,
        method: 'ledger_getSnapshotChainHeight',
        params: null,
      });
      if (data && data.result) {
        this.chainHeight = +data.result;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.countdown {
    color:inherit;
}
</style>
