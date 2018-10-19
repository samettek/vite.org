<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 style="margin-bottom: 50px;">社区</h1>
        <div class="community-star">
          <img src="~assets/images/community/star.svg"/>
          <span>社区之星</span>
        </div>
        <div class="columns content">
          <div class="column is-8">
            <div class="columns">
              <div class="column">
                <div class="video"></div>
              </div>
            </div>
            <div class="columns is-multiline">
              <div class="column">
                <community-card></community-card>
              </div>
              <div class="column">
                <community-card></community-card>
              </div>
              <div class="column">
                <community-card></community-card>
              </div>
              <div class="column">
                <community-card></community-card>
              </div>
            </div>
          </div>
          <div class="column">vvvvv</div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  import CommunityCard from '~/components/CommunityCard'

  export default {
    components: {
      CommunityCard
    }
  }
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";
  .section {
    padding-top: 92px;
    .community-star {
      display: flex;
      display: -webkit-flex;
      font-family: $font-family-title;
      font-size: 24px;
      color: #171C34;
      letter-spacing: 0;
      line-height: 38px;
      span {
        display: inline-block;
        margin-left: 8px;
      }
    }
    .content {
      .video {
        border: 1px solid red;
        width: 706px;
        height: 348px;
      }
    }
   
  }

</style>
