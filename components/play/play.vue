<template>
  <div class="player-container" @click.self="closeMe">
    <video :src="src" autoplay controls>

    </video>
  </div>
</template>
<script>
export default {
  props: {
    src: { type: String, default: "" },
    closeMe:{type:Function}
  }
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
    justify-items: center;
    video{
        width: 70%;
        height: 70%;
        min-height: 600px;
    }
}
</style>
