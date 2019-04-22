<template>
  <div class="youtube__wrapper">
    <div class="container">
      <div class="youtube__content">
        <sub-title :title="$t('medium.youtube.title')" style="color: white"></sub-title>
        <div class="is-flex youtube__vedio">
          <iframe width="320" height="218" class="iframe" src="https://www.youtube.com/embed/-f_CiqfjGJU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="320" height="218" class="iframe" src="https://www.youtube.com/embed/FRvdP_KcNRk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="320" height="218" class="iframe" src="https://www.youtube.com/embed/BZI8jMsP-9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import subTitle from '~/components/subTitle';

export default {
  components: {
    subTitle
  } 
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.youtube__wrapper {
  margin-top: 18px;
  background: url("~assets/images/medium/bg.jpg");
  background-size: cover;
  .youtube__content {
    box-sizing: border-box;
    padding: 40px 0 84px 0;
    @include mobile {
      padding: 20px 0 0px 0;
    }
  }
  .youtube__vedio {
    justify-content: space-between; 
    margin-top:30px;
    @include mobile {
      flex-direction: column;
      align-items: center;
      justify-content: center; 
    }
    .iframe {
       @include mobile {
        margin-bottom: 20px;
      }
    }
  }
}

</style>
