<template>
  <div
    class="timeline">
    <div class="timeline__title in-progress">{{ $t('roadmap.inProgress') }}</div>
    <ul>
      <li
        :class="{ 'is-finish': index<=finished }"
        :key="item.time"
        v-for="(item, index) in timelines">
        <div class="desc-wrapper">
          <span class="time">{{item.time}}</span>
          <div class="desc">
            <div
              v-for="(desc, index) in item.description"
              :key="index">
            <p v-if="!(desc instanceof Object)"> {{desc}} </p>
            <a v-else
                :href="desc.url"
                target="_blank">
                <p>
                  {{ desc.text }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
export default {
  computed: {
    timelines: function () {
      let roadmaps = this.$t('roadmap.timelines');
      if (!Array.isArray(roadmaps)) {
        return [];
      }
      return roadmaps.map(item => {
        if (!Array.isArray(item.description)) {
          return {
            ...item,
            description: [item.description]
          };
        }
        return item;
      });
    }
  },
  data: function () {
    return {
      finished: 8
    };
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

$dot-size: 1.5rem;
$dot-gap: 0.5;
$dot-size-inner: 0.75rem;

.timeline {
  padding-right: 200px;
  .timeline__title {
    display: inline-block;
    margin-left: calc(100% + 30px);
    width: 100%;
    font-size:20px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(145,154,163,1);
    line-height:28px;
    &.in-progress {
      font-size:24px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(23,28,52,1);
    }
  }
  ul {
    width: 150px;
    padding-top: 30px;
    @include mobile {
      padding-top: 10px;
    }
    & li:first-child {
      // min-width: 180px;
    }
    & li:last-child {
      // min-width: 180px;
      border-right: none;
      &::after {
        width: 0;
        height: 0;
      }
    }
    li {
      list-style-type: none;
      position: relative;
      min-width: 120px;
      margin: 0 auto;
      border-right: 2px dashed $timelineColor;
      &.is-finish {
        border-right: 2px solid $timelineColor;
        &::before {
          content: "";
          position: absolute;
          left: 100%;
          transform: translateX(-50%);
          width: $dot-size;
          height: $dot-size;
          border-radius: 50%;
          // top: -($dot-size * (1 - $dot-gap));
          background: #b8d8ff;
        }
        &::after {
          left: 100%;
          width: $dot-size-inner;
          height: $dot-size-inner;
          top: ($dot-size * ((1 - $dot-gap) / 2));
          background: $timelineColor;
        }
      }
      &::after {
        content: "";
        position: absolute;
        left: 100%;
        transform: translateX(-50%);
        width: $dot-size-inner;
        height: $dot-size-inner;
        border-radius: 50%;
        top: -($dot-size * ((1 - $dot-gap) / 2));
        background: $timelineColor;
      }
    }
  }
  .desc-wrapper {
    width: 200%;
    padding-bottom: 10px;
    .time {
      font-family: $font-family-title;
      position: absolute;
      right: 24px;
      display: inline;
      color: #007aff;
      letter-spacing: 0.23px;
      text-align: right;
      font-size:16px;
      font-family:Poppins-SemiBold;
      font-weight:600;
      line-height:24px;
    }
    .desc {
      display: inline-block;
      width: 220px;
      min-height: 50px;
      margin-left: calc(100%/2 + 30px);
      font-size: 13px;

      color: #171c34;
      letter-spacing: 0;
      line-height: 17px;
      p {
        margin-top: 5px;
      }
    }
  }
}

/* EFFECTS
        –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .timeline ul li::after {
    transition: background 0.5s ease-in-out;
    cursor: pointer;
  }
  .timeline ul li div {
    // visibility: hidden;
    // opacity: 0;
    // transition: all 0.5s ease-in-out;
  }
  .timeline ul li.in-view div {
    /*transform: none;*/
    // visibility: visible;
    // opacity: 1;
  }
  /* GENERAL MEDIA QUERIES
        –––––––––––––––––––––––––––––––––––––––––––––––––– */
  @media screen and (max-width: 1020px) {
    .timeline ul li div {
      // width: 400px;
    }
    .timeline ul li:nth-child(even) div {
      // left: -(400px + 45px - 6px); /*250+45-6*/
    }
  }
  @media screen and (max-width: 900px) {
    .timeline ul li div {
      // width: 250px;
    }
    .timeline ul li:nth-child(even) div {
      // left: -289px; /*250+45-6*/
    }
  }
  @media screen and (max-width: 600px) {
    .timeline ul li {
    }
    .timeline ul li div {
      // width: calc(100vw - 91px);
    }
    .timeline ul li:nth-child(even) div {
      // left: 1.5rem;
      // text-align: left;
    }
    .timeline ul li:nth-child(odd) div {
      // left: 1.5rem;
      // text-align: left;
    }
  }
</style>


