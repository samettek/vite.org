<template>
  <section class="is-flex" @click="play">
    <div>
      <div class="video__head is-flex">
        <div class="video__head-icon"></div>
        <div class="video__head-icon"></div>
        <div class="video__head-icon"></div>
      </div>
      <div class="video__img is-flex">
        <img  src="~assets/images/video/play.svg"/>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
import player from './play';
import config from '~/config';
export default {
  components: {
  },
  data: function () {
    return {
    };
  },
  methods: {
    play(){
      player({src:config.urls.video.home[this.$i18n.locale]});
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";
    .video__head {
      background:rgba(255,255,255,1);
      box-shadow:0px 4px 15px 0px rgba(7,42,68,0.1);
      border-radius:10px 10px 0 0;
      height: 45px;
      box-sizing: border-box;
      padding: 18px 0 0 18px;
      .video__head-icon {
        width:11px;
        height:11px;
        background:#cce5ff;
        margin-right: 7px; 
        border-radius: 11px;
      }
    }
    .video__img {
      width: 665px;
      height: 403px;
      background: url("~assets/images/video/bg.jpg") 51% 0%;
      background-size: cover;
      text-align: center;
      justify-content: center;
      align-items: center;
      @include mobile {
        width: 334px;
        height: 202px;
      }
    }
    img {
      cursor: pointer;
    }

</style>

  
  
 
