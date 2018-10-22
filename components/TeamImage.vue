<template>
  <div class="team-item">
    <div class="img-wrapper" :class="`is-${type}`" v-if="src">
      <div class="img-bg">
        <img :src="src" alt="">
      </div>
    </div>

    <div class="team-desc" :class="{'team-no-img': !src }">
      <span class="name">{{$t(`team.nameMap.${name}.name`)}}</span>
      <div class="icon-wrapper">
        <a :href="url.url" target="_blank" :key="url.url" v-for="url in urls">
          <fa-icon class="icon text-hover-transition" :icon="url.icon" />
        </a>
      </div>
      <div class="position">{{$t(`team.nameMap.${name}.position`)}}</div>
      <p>{{$t(`team.nameMap.${name}.description`)}}</p>
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
      urls: {
        type: Array,
        default: () => []
      },
      type: {
        type: String,
        default: 'core'
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


  .team-item {
    width: 270px;
    
    box-shadow: 0 4px 24px 0 rgba(211,234,255,0.53);
    .img-wrapper {
      height: 270px;
      width: 270px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      .img-bg {
        height: 190px;
        width: 190px;
        img {
          height: 190px;
          width: 190px;
          transition: all 0.6s ease;
          border-radius: 50%;
        }
      }
    }

    .team-desc {
      padding: 0px 20px;
      margin-top: -10px;
      height: 184px;
      .name {
        font-size:24px;
        font-family: $font-family-main;
        line-height:33px;
        @include touch {
          font-size: 18px;
          line-height: 25px;
        }
      }
      .icon-wrapper {
        display: inline-block;
        float: right;
        .icon {
          height: 33px;
          width: 33px;
          margin-left: 16px;
          &:hover {
          }
          @include touch {
            height: 31px;
            width: 31px;
          }
        }
      }
      & > p {
        margin-top: 20px;
        font-size:14px;
        font-family: $font-family-light;
        line-height:20px;
        transition: all 0.6s ease;
        @include touch {
          margin-top: 25px;
        }
      }
    }

    .team-no-img {
      margin-top: 10px;
      height: 144px;
    }
  }
</style>
