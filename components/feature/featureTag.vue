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
      <img
        :src="i"
        v-for="(i,j) in iconMap[tagKey][index]"
        :key="j"
        class="image"
      >
    </div>
    {{$t(`features.${tagKey}.tags[${index}]`)}}
  </div>
</template>
<script>
const iconMap = {
  easyusing: [
    require("~/assets/images/feature/tags/easyusing0.svg"),
    require("~/assets/images/feature/tags/easyusing1.svg"),
    require("~/assets/images/feature/tags/easyusing2.svg"),
    require("~/assets/images/feature/tags/easyusing3.svg")
  ],
  performance: [
    require("~/assets/images/feature/tags/performance0.svg"),
    [
      require("~/assets/images/feature/tags/performance10.svg"),
      require("~/assets/images/feature/tags/performance11.svg"),
      require("~/assets/images/feature/tags/performance12.svg")
    ]
  ],
  flexable: [
    require("~/assets/images/feature/tags/flexable0.svg"),
    require("~/assets/images/feature/tags/flexable1.svg"),
    require("~/assets/images/feature/tags/flexable2.svg")
  ],
  safety: [
    require("~/assets/images/feature/tags/safety0.svg"),
    require("~/assets/images/feature/tags/safety1.svg")
  ],
  economical: [
    require("~/assets/images/feature/tags/economical0.svg"),
    require("~/assets/images/feature/tags/economical1.svg"),
    require("~/assets/images/feature/tags/economical2.svg")
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
  text-align: center;
  position: absolute;
  min-width: 140px;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 403px 0px rgba(211, 234, 255, 1);
  border-radius: 30px 30px 30px 0px;
  cursor: pointer;
  &:hover {
    .hover-img,.hover-img-list {
      visibility: visible;
      opacity: 1;
    }
    
  }
  .hover-img,
  .hover-img-list {
    box-shadow: 2px 2px 30px 0px rgba(126, 183, 238, 0.63);
    display: flex;
    justify-content: center;
    position: absolute;
    visibility: hidden;
    background: #fff;
    transition: all linear 0.3s;
    opacity: 0;
    top: -50%;
    padding: 15px;
    z-index: 10;
    &:hover {
      display: flex;
    }
  }
  .hover-img {
    width: 300px;
  }
  .hover-img-list {
    width: 1000px;
    margin-right: 10px;
    background: #fff;
    
    img{
        width:32%;
        margin-right: 10px;
        box-shadow: 2px 2px 30px 0px rgba(126, 183, 238, 0.63);
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
