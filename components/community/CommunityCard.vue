<template>
  <div class="community-wrapper">
    <div class="community-card-content">
      <div class="person-info">
        <p class="person-name">{{ name }}</p>
        <div class="card-title">
          <img :src="src" />
          <div class="name">{{ cname }}</div>
        </div>

      </div>
      <div class="card-img" v-if="picture">
        <img :src="picture" />
        <fa-icon
            @click="gotoLink"
            class="icon"
            :icon="['fab', icon ]"
          />
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  props: {
    src: {
      type: String,
    },
    name: {
      type: String,
    },
    picture: {
      type: String,
    },
    cname: {
      type: String,
    },
    icon: {
      type: String,
    },
    mediaLink: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    gotoLink() {
      window.open(this.mediaLink);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

.community-wrapper {
  margin: 0 auto;
  width: 220px;
  height: 100px;
  box-shadow: 0 4px 24px 0 rgba(211, 234, 255, 0.53);
  padding: 18px;
  box-sizing: border-box;
  @include touch {
    width: 205px;
  }
  .person-info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
  }
  .community-card-content {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    height: 100%;
    .card-title {
      display: flex;
      display: -webkit-flex;
      img {
        margin-top: 3px;
        height: 12px;
      }
      .name {
        margin-left: 6px;
        font-size: 14px;
        color: #919aa3;
        letter-spacing: 0;
        line-height: 18px;
      }
    }
    .person-name {
      font-family: $font-family-title;
      font-size: 15px;
      color: #171c34;
      max-width: 119px;
      white-space: normal;
      margin:0;
      letter-spacing: -0.19px;
      line-height: 20px;
    }
    .card-img {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .icon{
          color:#007AFF;
          width:13px;
          height: 13px;
          cursor:pointer;
      }
    }
  }
}
</style>
