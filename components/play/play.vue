<template>
  <div class="player-container" @click.self="closeMe">
    <video :src="src" autoplay controls v-if="src">

    </video>
    <iframe
      v-if="iframeSrc"
      class="iframe"
      :src="iframeSrc"
      frameborder="0"
      autoplay
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
</template>
<script>
export default {
  props: {
    src: { type: String, default: '' },
    closeMe: { type: Function },
    iframeSrc: { type: String, default: '' },
  },
};
</script>
<style lang="scss" scoped>
.player-container{
    width:100%;
    height: 100%;
    background:rgba(0,0,0,0.3);
    position: fixed;
    top:0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    video{
      width: 90%;
    }
    .iframe {
      width: 90%;
      height: 80%;
    }
}
</style>
