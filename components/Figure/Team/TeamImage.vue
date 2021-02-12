<template>
  <div class="team-item">
    <div
      class="img-wrapper"
      :class="`is-${type}`"
      v-if="src"
    >
      <div class="img-bg">
        <img
          :src="src"
          alt=""
        >
      </div>
    </div>

    <div
      class="team-desc"
      :class="{'team-no-img': !src ,'team-desc-zh':$i18n.locale==='zh'}"
    >
      <span class="name">{{$t(`team.nameMap['${name}'].name`)}}</span>
      <div class="icon-wrapper">
        <a
          :href="url.url"
          target="_blank"
          :key="url.url"
          v-for="url in urls"
        >
          <fa-icon
            v-if="!url.icon.includes('linkedin')"
            class="icon icon__padding text-hover-transition"
            :icon="url.icon"
          />
          <img
            v-else
            class="icon text-hover-transition"
            src="~/assets/images/community/linkedin.svg">
        </a>
      </div>
      <div class="desc is-flex">
        <div
          class="job"
        >{{$t(`team.nameMap['${name}']`).job}}</div>
        <div class="position"><span v-if="$t(`team.nameMap['${name}']`).job">|</span> {{$t(`team.nameMap['${name}'].position`)}}</div>
      </div>
      <p class="desc">{{$t(`team.nameMap['${name}']`).description}}</p>
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
    urls: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'core',
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

.team-item {
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 4px 24px 0 rgba(211, 234, 255, 0.53);
  padding-bottom: 20px;
  .img-wrapper {
    height: 230px;
    min-width: 230px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    .img-bg {
      height: 190px;
      min-width: 190px;
      img {
        height: 190px;
        min-width: 190px;
        transition: all 0.6s ease;
      }
    }
  }

  .team-desc {
    padding: 0px 25px;
    margin-top: -10px;
    height: 300px;
    overflow-y: auto;
    &.team-desc-zh{
        height: 180px;
    }
    .name {
      font-family: $font-family-main;
      line-height: 28px;
      font-size: 20px;
      color: #171c34;
      @include touch {
        font-size: 18px;
        line-height: 25px;
      }
    }
    .icon-wrapper {
      display: inline-block;
      float: right;
      a {
        color: #007aff;
      }
      .icon {
        height: 24px;
        width: 24px;
        margin-left: 16px;
      }
      .icon__padding {
        padding: 2px;
      }
    }
    .position {
      margin-top: 6px;
      font-family: $font-family-title;
      color: #c6cace;
      span {
        display: inline-block;
        margin-left: 6px;
      }
    }
    .job {
      margin-top: 6px;
      font-family: $font-family-title;
      color: #171c34;
    }
    .desc {
      flex-wrap: wrap;
      font-size: 14px;
    }
    & > p {
      margin-top: 10px;
      font-family: $font-family-light;
      line-height: 20px;
      transition: all 0.6s ease;
      color: #919aa3;
      @include touch {
        margin-top: 5px;
      }
    }
  }

  .team-no-img {
    margin-top: 10px;
    height: 150px;
    overflow-y: auto;
  }
}
</style>
