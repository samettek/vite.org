<template>
  <client-only class="no-ssr">
    <span>
      <v-popover offset="16" :disabled="!isEnabled" popoverClass="v-popover">
        <a target="_blank">
          <fa-icon :icon="['fab', 'telegram-plane']" />
        </a>

        <template slot="popover">
          <div class="item-wrapper">
            <div v-for="(item, index) in list" :key="index">
              <a class="tag" target="_blank" :href="urlList[item]">{{$t(`urls.telegram.${item}`)}}</a>
            </div>
          </div>
        </template>
      </v-popover>

      <!-- <a slot="placeholder" target="_blank">
        <fa-icon :icon="['fab', 'telegram-plane']" />
      </a> -->
    </span>
  </client-only>
</template>

<script type="text/babel">
import { VPopover } from 'v-tooltip';
import config from '~/config.js';

export default {
  components: {
    VPopover,
  },
  data() {
    return {
      isEnabled: true,
      urlList: config.urls.telegram,
      list: ['ann', 'english', 'chinese', 'russia', 'japan', 'arabic', 'turkish', 'indonesian', 'filipino', 'vietnamese'],
      isBrowser: process.browser,
    };
  },
  methods: {},
};
</script>

<style rel="stylesheet/scss" lang="scss">
.v-popover {
  .popover-inner {
    max-width: 300px;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
img {
  max-width: 200px;
  width: 200px;
}
.icon {
  height: 100%;
  width: 100%;
  color: #c4c4c4;
  &:hover {
    color: #1580e3;
  }
}
.v-popover {
  display: inline-block;
  height: 22px;
  width: 22px;
  margin-left: 20px;
}
.no-ssr {
  display: inline-block;
  margin-left: 20px;
}

.item-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  & > div {
    padding: 5px;
    .tag {
      background: none;
      &:hover {
        background: #0072e3;
        color: white;
        border-radius: 2px;
        text-decoration: none;
      }
    }
  }
}
</style>
