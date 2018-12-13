<template>
  <section class="section" @click="play">
    <img src="~assets/images/video/play.svg"/>
    <div class="video-text">Let's create something cool！</div>
  </section>
</template>

<script type="text/babel">
import player from "./play"
export default {
  components: {
  },
  data: function () {
    return {
    }
  },
  methods: {
      play(){
          player({src:""})
      }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";
  .section {
    height: 700px;
    background: url("~assets/images/video/bg.jpg") 51% 0%;
    background-size: cover;
    text-align: center;
    img {
        cursor: pointer;
      margin-top: 178px;
    }
    .video-text {
      margin-top: 60px; 
      font-family: $font-family-title;
      font-size: 44px;
      color: #FFFFFF;
      letter-spacing: 1.1px;
      text-align: center;
    }
  }

</style>

  
  
 
