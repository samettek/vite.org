<template>
  <section>
    <h1 class="roadmap-title">路线图</h1>
     
    <div class="container is-flex">
      <div class="left-img" @click="onPrev">
        <img src="~assets/images/roadmap/left.svg"/>
      </div>
      <div class="timeline">
        <ul class="is-flex">
          <li class="in-view"
              :class="{ 'is-finish': finished.indexOf(index) > -1 }"
              :key="item.time"
              v-for="(item, index) in timelines">
              <div class="desc-wrapper">
                <span class="time">{{item.time}}</span>
                <div class="desc">
                  <p v-for="(desc, index) in item.description" :key="index">
                    {{desc}}
                  </p>
                </div>
              </div>
          </li>
          <li class="in-view"></li>
        </ul>
      </div>
      <div class="right-img" @click="onNext">
        <img src="~assets/images/roadmap/right.svg"/>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
  export default {
    components: {
    },
    data: function () {
      return {
        finished: [0, 1, 2, 3, 4]
      }
    },
    computed: {
      timelines: function (index) {
        let roadmaps = this.$t(`roadmap.timelines`)
        if (!Array.isArray(roadmaps)) {
          return []
        }
        return roadmaps.map(item => {
          if (!Array.isArray(item.description)) {
            return {
              ...item,
              description: [item.description]
            }
          }
          return item
        })
      }
    },
    methods: {
      onNext () {
        if (this.selected !== this.timelines.length - 1) {
          this.selected = this.selected + 1
        }
      },
      onPrev () {
        if (this.selected !== 0) {
          this.selected = this.selected - 1
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  section {
    height: 700px;
    background: #F6FBFF;
    .roadmap-title {
      text-align: center; 
      padding-top: 109px;
    }
    $timelineColor: #007AFF;
    $dot-size: 1.5rem;
    $dot-gap:  0.5;
    $dot-size-inner: 0.75rem;
    .left-img {
      min-width: 60px;
      height: 100px;
      cursor: pointer;
      text-align: center;
      margin-top: 136px; 
    }
    .right-img {
      min-width: 60px;
      height: 100px;
      cursor: pointer; 
      text-align: center;
      margin-top: 136px; 
    }
    .timeline {
      min-height: 500px;
      overflow-x: scroll;
      ul {
        padding-top: 150px; 
        & li:first-child {
          min-width: 80px;
        }
        & li:last-child {
          min-width: 80px;
          border-right: none;
          &::after {
            width: 0;
            height: 0;
          }
        }
        li {
          list-style-type: none;
          position: relative;
          min-width: 160px;
          height: 46px;
          margin: 0 auto;
          border-top: 1px dashed $timelineColor;
          border-right: 1px dashed $timelineColor;
          &.is-finish {
            border-top: 2px solid $timelineColor;
            &::before {
              content: '';
              position: absolute;
              left: 100%;
              transform: translateX(-50%);
              width: $dot-size;
              height: $dot-size;
              border-radius: 50%;
              top: -($dot-size * (1 - $dot-gap));
              background: #B8D8FF;
            }
            &::after {
              left: 100%;
              width: $dot-size-inner;
              height: $dot-size-inner;
              top: -($dot-size * ((1 - $dot-gap) / 2));
              background: $timelineColor;
            }
            
          }
          &::after {
            content: '';
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
        height: 64px;
        position: relative;
        .time {
          font-family: $font-family-title;
          position: absolute;
          top: -58px;
          left: calc(50% - 30px);
          display: inline;
          color: #007AFF;
          letter-spacing: 0.23px;
          text-align: center;
        }
        .desc {
          position: absolute;
          width: 120px;
          left: calc(50% - 60px);
          top: 100%;
          font-size: 13px;
          color: #171C34;
          letter-spacing: 0;
          line-height: 17px;
          text-align: center;
          p {
            margin-bottom: 10px;
          }
        }
      }
    }
    /* EFFECTS
        –––––––––––––––––––––––––––––––––––––––––––––––––– */
    .timeline ul li::after {
      transition: background .5s ease-in-out;
    }
    .timeline ul li div {
      visibility: hidden;
      opacity: 0;
      transition: all .5s ease-in-out;
    }
    .timeline ul li.in-view div {
      /*transform: none;*/
      visibility: visible;
      opacity: 1;
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
  }
</style>
