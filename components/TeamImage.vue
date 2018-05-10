<template>
  <div class="team-item">
    <div class="img-wrapper" :class="`is-${type}`">
      <div class="img-bg">
        <img :src="src" alt="">
      </div>
      <div class="p-1"></div>
      <div class="p-2"></div>
      <div class="p-3"></div>
      <div class="p-4"></div>
      <div class="p-5"></div>
    </div>

    <div class="team-desc">
      <span class="name">{{$t(`team.nameMap.${name}.name`)}}</span>
      <div class="icon-wrapper">
        <a :href="url.url" target="_blank" :key="url.url" v-for="url in urls">
          <fa-icon class="icon text-hover-transition" :icon="url.icon" />
        </a>
      </div>
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
    width: 260px;
    &:hover {
      .img-wrapper .img-bg img {
        opacity: 1;
      }
      .team-desc {
        & > p {
          color: white;
        }
      }
    }

    .img-wrapper {
      height: 260px;
      width: 260px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: 25px;
      .img-bg {
        height: 214px;
        width: 214px;
        background: rgba(38,39,42,1);
        img {
          height: 214px;
          width: 214px;
          opacity: 0.6;
          background-color: rgba(38,39,42,1);
          transition: all 0.6s ease;
        }
      }

      .p-1 {
        height: 71px;
        width: 71px;
        position: absolute;
        right: 0;
        bottom: 0;
      }

      &.is-core {
        background: rgba(21,128,227,1);
        .p-1 {
          background: rgba(21,128,227,1);
        }
        .p-2, .p-3 {
          background: rgba(38,39,42,1);
          position: absolute;
        }
        .p-2 {
          height: 23px;
          width: 118px;
          right: 72px;
          bottom: 0;
        }
        .p-2 {
          height: 23px;
          width: 118px;
          right: 71px;
          bottom: 0;
        }
        .p-3 {
          width: 23px;
          height: 118px;
          right: 0;
          bottom: 71px;
        }
      }

      &.is-advisor {
        background: #999999;
        .p-1 {
          background: #999999;
        }
        .p-2, .p-3, .p-4, .p-5 {
          background: rgba(38,39,42,1);
          position: absolute;
        }
        .p-2 {
          height: 23px;
          width: 118px;
          top: 0;
          left: 0;
        }
        .p-3 {
          height: 118px;
          width: 23px;
          top: 0;
          left: 0;
        }
        .p-4 {
          height: 23px;
          bottom: 0;
          right: 71px;
          width: 71px;
        }
        .p-5 {
          height: 71px;
          bottom: 71px;
          right: 0;
          width: 23px;
        }
      }
    }

    .team-desc {
      .name {
        font-size:24px;
        font-family: $font-family-main;
        color:rgba(255,255,255,1);
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
          color: rgba(255,255,255,0.6);
          height: 33px;
          width: 33px;
          margin-left: 16px;
          &:hover {
            color: rgba(21,128,227,1);
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
        color:rgba(111,114,117,1);
        line-height:20px;
        transition: all 0.6s ease;
        @include touch {
          margin-top: 25px;
        }
      }
    }
  }
</style>
