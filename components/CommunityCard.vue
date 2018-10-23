<template>
  <div class="community-wrapper">
    <div class="community-card-content">
      <div class="flex-card">
        <div class="card-title">
          <img :src="src" />
          <div class="name">{{ cname }}</div>
        </div>
        <p class="person-name">{{ name }}</p>
      </div>
      <div class="card-img">
        <img :src="picture"/>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      src: {
        type: String
      },
      name: {
        type: String
      },
      picture: {
        type: String
      },
      cname: {
        type: String
      }
    },
    data: function () {
      return {}
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";


  .community-wrapper {
    width: 220px;
    height: 100px;
    box-shadow: 0 4px 24px 0 rgba(211,234,255,0.53);
    padding: 20px 20px 12px 20px;
    box-sizing: border-box;
    .community-card-content {
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      .card-title {
        display: flex;
        display: -webkit-flex;
        .name {
          margin-left: 6px;
          font-size: 14px;
          color: #919AA3;
          letter-spacing: 0;
          line-height: 18px;
        }
      }
      .person-name {
        font-family: $font-family-title;
        font-size: 15px;
        color: #171C34;
        margin-top: 10px;
        max-width: 119px;
        white-space: normal;
        // word-break: break-all;
        letter-spacing: -0.19px;
        line-height: 20px;
      }
      .card-img {
        img {
          width:40px; 
          height: 40px; 
          border-radius: 50%;
        }
      }
    }
  }
</style>
