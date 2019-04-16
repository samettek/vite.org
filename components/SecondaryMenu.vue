<template>
  <div class="dropdown lang-btn is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" :class="{'foot-btn': isFooter}">
        <span>{{ footerName }}</span>
      </button>
    </div>
    <div class="dropdown-menu" id="lang-dropdown-menu" role="menu">
      <div class="dropdown-content" v-if="list.length">
        <a 
          class="dropdown-item" 
          target="_blank" 
          :href="item.to"
          v-for="(item, index) in list" 
          :key="index"
          v-if="item.type && item.type === 'outer'"
          >
          {{$t(`nav.${item.name}`)}}
        </a>
        <a
          :href="item.anchor ? `${localePath(item.to)}#${item.anchor}` : localePath(item.to)"
          class="dropdown-item" 
          v-for="(item, index) in list" 
          :key="index"
          v-if="item.type && item.type === 'inner'">
          {{$t(`nav.${item.name}`)}}
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  // secondaryList   item {type: inner/outer, name: xxx, to: xxx}
  import config from '~/config';

  export default {
    props: {
      isFooter: {
        type: Boolean,
        default: false
      },
      footerName: {
        type: String,
        default: ''
      },
      secondaryList: {
        type: Array,
        default: ()=> []
      }
    },
    computed: {
      list() {
        return this.secondaryList;
      }
    },
    data () {
      return {
        voteMap: config.urls.vote
      };
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .lang-btn {
    .dropdown-trigger {
      button {
        color: $common-text-color;
        background: transparent;
        padding: 0 0 0 0;
        border-radius: 0.35rem;
        height: (40rem/16);
        border: transparent;
        font-family: $font-family-light;
        &:focus {
          border: none;
          box-shadow: none;
        }
        &:hover {
          color: $common-active-color;
        }
      }
      .foot-btn {
        color: white;
        &:hover {
          color: white;
        }
      }
    }
    .dropdown-menu {
      .dropdown-content {
        .dropdown-item {
          color: $common-text-color;
          &:hover {
            color: $common-active-color
          }
        }
      }
    }
  }
</style>
