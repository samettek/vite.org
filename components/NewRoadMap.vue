<template>
  <section>
    <h1 class="roadmap-title">路线图</h1>
    <div class="container">
      <div class="timeline">
        <ul v-in-viewport>
          <li class="li-spacer in-view"
              :class="{ 'is-finish': finished.indexOf(index) > -1 }"
              :key="item.time"
              v-for="(item, index) in timelines">
            <div class="inview2 animated" :class="{'fadeInLeft': (index + 1) % 2 === 0, 'fadeInRight': (index + 1) % 2 === 1}">
              <span class="time">{{item.time}}</span>
              <p v-for="(desc, index) in item.description" :key="index">
                {{desc}}
              </p>
            </div>
          </li>
        </ul>
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
        finished: [0, 1]
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
    $timelineColor: #3381D3;
    $dot-size: 2.5rem;
    $dot-gap:  0.95;
    $dot-size-inner: (2.5rem * $dot-gap);
    .timeline {
      ul {
        li {
          list-style-type: none;
          position: relative;
          width: 2px;
          margin: 0 auto;
          background: $timelineColor;
          &.is-finish {
            .time {
              color: #111111;
            }
            & > div {
              & > p {
                color: #111111;
              }
            }
            &::before {
              content: '';
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              width: $dot-size;
              height: $dot-size;
              border-radius: 50%;
              top: 0px;
              background: white;
              border: 1px solid #018DFF;
            }
            &::after {
              width: $dot-size-inner;
              height: $dot-size-inner;
              top: ($dot-size * ((1 - $dot-gap) / 2));
              background: #018DFF;
              border: 3px solid #F8F8F8;
            }
          }
          &::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 1.59rem;
            height: 1.59rem;
            border-radius: 50%;
            top: 1px;
            background: #D5E6F7;
            border: 3px solid #F8F8F8;
          }
          &:nth-child(odd) div {
            left: 45px;
          }
          &:nth-child(even) div {
            left: -539px;
            text-align: right;
          }
          div {
            position: relative;
            bottom: 0;
            width: 500px;
            padding: 1rem;
            border-radius: 4px;
            font-family: $font-family-light;
            .time {
              margin-top: -1.13rem;
              display: block;
              font-size: 1.13rem;
              line-height: 1.38rem;
              text-transform: uppercase;
              color: #666666;
              margin-bottom: 0.4rem;
            }
            & > p {
              font-size: 1rem;
              line-height: 1.7rem;
              color: #666666;
              word-wrap: break-word;
              font-weight: 300;
            }
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
        width: 400px;
      }
      .timeline ul li:nth-child(even) div {
        left: -(400px + 45px - 6px); /*250+45-6*/
      }
    }
    @media screen and (max-width: 900px) {
      .timeline ul li div {
        width: 250px;
      }
      .timeline ul li:nth-child(even) div {
        left: -289px; /*250+45-6*/
      }
    }
    @media screen and (max-width: 600px) {
      .timeline ul li {
        margin-left: 20px;
      }
      .timeline ul li div {
        width: calc(100vw - 91px);
      }
      .timeline ul li:nth-child(even) div {
        left: 1.5rem;
        text-align: left;
      }
      .timeline ul li:nth-child(odd) div {
        left: 1.5rem;
        text-align: left;
      }
    }
  }
</style>
