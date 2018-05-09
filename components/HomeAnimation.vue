<template>
    <div>
      <canvas ref="canvas" width="900" height="520" ></canvas>
    </div>
</template>

<script type="text/babel">
  import * as canvasBackground from '~/utils/canvasBackground'

  export default {
    data: function () {
      return {}
    },
    mounted () {
      let canvas = this.$refs.canvas

      canvasBackground.start(canvas)
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  canvas {
    position: absolute;
    right: 0;
    top: 60px;
  }
</style>
