<template>
  <div
    :class="{active}"
    class="tag"
  >
    <div
      class="hover-img"
      v-if="typeof iconMap[tagKey][index]==='string'"
    >
      <img
        :src="iconMap[tagKey][index]"
        class="image"
      >

    </div>
    <div
      v-else
      class="hover-img-list"
    >
      <div
        v-for="(i,j) in iconMap[tagKey][index]"
        :key="j"
        class="mutil-img-container"
      >
        <img
          :src="i"
          class="image"
        ></div>
    </div>
    {{$t(`features.${tagKey}.tags[${index}]`)}}
  </div>
</template>
<script>
const iconMap = {
  easyusing: [
    require('~/assets/images/feature/tags/easyusing0.svg'),
    require('~/assets/images/feature/tags/easyusing1.svg'),
    require('~/assets/images/feature/tags/easyusing2.svg'),
    require('~/assets/images/feature/tags/easyusing3.svg')
  ],
  performance: [
    require('~/assets/images/feature/tags/performance0.svg'),
    [
      require('~/assets/images/feature/tags/performance10.svg'),
      require('~/assets/images/feature/tags/performance11.svg'),
      require('~/assets/images/feature/tags/performance12.svg')
    ]
  ],
  flexable: [
    require('~/assets/images/feature/tags/flexable0.svg'),
    require('~/assets/images/feature/tags/flexable1.svg'),
    require('~/assets/images/feature/tags/flexable2.svg')
  ],
  safety: [
    require('~/assets/images/feature/tags/safety0.svg'),
    require('~/assets/images/feature/tags/safety1.svg')
  ],
  economical: [
    require('~/assets/images/feature/tags/economical0.svg'),
    require('~/assets/images/feature/tags/economical1.svg'),
    require('~/assets/images/feature/tags/economical2.svg')
  ]
};

export default {
  data() {
    return { iconMap };
  },
  props: {
    tagKey: { type: String, required: true },
    index: {
      type: Number,
      default: 0
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.tag {
//   z-index: 1;
  text-align: center;
  position: absolute;
  font-size:12px;
  min-width: 106px;
  height: 46px;
  background: rgba(255, 255, 255, 1);
  box-shadow:0px 0px 20px 0px rgba(211,234,255,1);
  border-radius: 30px 30px 30px 0px;
  cursor: pointer;
  &:hover {
    .hover-img,
    .hover-img-list {
      visibility: visible;
      opacity: 1;
    }
  }
  .hover-img,
  .hover-img-list {
    // z-index: 1000;
    top: 120%;
    box-shadow: 2px 2px 30px 0px rgba(126, 183, 238, 0.63);
    display: flex;
    justify-content: center;
    position: absolute;
    visibility: hidden;
    background: #fff;
    transition: all linear 0.3s;
    opacity: 0;
    padding: 30px;
    z-index: 10;
    .mutil-img-container {
      border-left: 1px solid rgba(0, 122, 255, 1);
      padding: 0 10px;
      width: 30%;
      height: 100%;
      &:first-child {
        border: none;
      }
    }
    &:hover {
      display: flex;
    }
  }
  .hover-img {
    width: 300px;
    img{
        height: 250px;
    }
  }
  .hover-img-list {
    width: 1000px;
    margin-right: 10px;
    background: #fff;

    img {
    }
  }
  &.active {
    background: linear-gradient(
      139deg,
      rgba(111, 191, 255, 1) 0%,
      rgba(0, 122, 255, 1) 100%
    );
    color: #fff;
  }
}
</style>
