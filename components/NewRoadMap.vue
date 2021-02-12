<template>
  <section>
    <h1 class="roadmap-title">{{ $t('roadmap.title')}}</h1>

    <div class="container is-flex">
      <div
        class="left-img"
        @click="onPrev"
      >
        <img src="~assets/images/roadmap/left.svg" />
      </div>
      <div
        class="timeline"
        ref='container'
      >
        <ul
          class="is-flex"
          ref="nodes"
        >
          <li
            class="in-view"
            :class="{ 'is-finish': index<=finished }"
            :key="item.time"
            v-for="(item, index) in timelines"
          >
            <div class="desc-wrapper">
              <span class="time">{{item.time}}</span>
              <div class="desc">
                <div
                  v-for="(desc, index) in item.description"
                  :key="index"
                >
                <p v-if="!(desc instanceof Object)"> {{desc}} </p>
                <a v-else
                    :href="desc.url"
                    target="_blank"
                  >
                    <p>
                      {{ desc.text }}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="in-view"></li>
        </ul>
      </div>
      <div
        class="right-img"
        @click="onNext"
      >
        <img src="~assets/images/roadmap/right.svg" />
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
export default {
  components: {},
  data() {
    return {
      selected: 2,
      finished: 8,
    };
  },
  computed: {
    timelines() {
      const roadmaps = this.$t('roadmap.timelines');
      if (!Array.isArray(roadmaps)) {
        return [];
      }
      return roadmaps.map((item) => {
        if (!Array.isArray(item.description)) {
          return {
            ...item,
            description: [item.description],
          };
        }
        return item;
      });
    },
  },
  watch: {
    selected(index, oldIndex) {
      if (index === oldIndex) {
        return;
      }
      const containerRect = this.$refs.container.getBoundingClientRect();
      const containerLeft = containerRect.left;
      const targetRight = this.$refs.nodes.children[
        index
      ].getBoundingClientRect().right;
      if (
        targetRight - containerLeft < 0
        && targetRight - containerLeft < this.$refs.container.scrollLeft
      ) {
        this.$refs.container.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        this.$refs.container.scrollBy({
          top: 0, // could be negative value
          left: targetRight - containerLeft,
          behavior: 'smooth',
        });
      }
    },
  },
  methods: {
    onNext() {
      if (this.selected !== this.timelines.length - 1) {
        this.selected += 1;
      }
    },
    onPrev() {
      if (this.selected !== 0) {
        this.selected -= 1;
      }
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
  height: 700px;
  @include mobile {
    height: 360px;
  }
  .roadmap-title {
    text-align: center;
    padding-top: 109px;
    @include mobile {
      padding-top: 30px;
    }
  }
  $dot-size: 1.5rem;
  $dot-gap: 0.5;
  $dot-size-inner: 0.75rem;
  .left-img {
    min-width: 60px;
    height: 100px;
    cursor: pointer;
    text-align: center;
    margin-top: 136px;
    @include mobile {
      margin-top: 56px;
    }
  }
  .right-img {
    min-width: 60px;
    height: 100px;
    cursor: pointer;
    text-align: center;
    margin-top: 136px;
    @include mobile {
      margin-top: 56px;
    }
  }
  .timeline {
    min-height: 500px;
    @include mobile {
      min-height: 280px;
    }
    overflow-x: scroll;
    scroll-behavior: smooth;
    ul {
      padding-top: 150px;
      @include mobile {
        padding-top: 70px;
      }
      & li:first-child {
        min-width: 180px;
      }
      & li:last-child {
        min-width: 180px;
        border-right: none;
        &::after {
          width: 0;
          height: 0;
        }
      }
      li {
        list-style-type: none;
        position: relative;
        min-width: 180px;
        height: 46px;
        margin: 0 auto;
        border-top: 2px dashed $timelineColor;
        border-right: 1px dashed $timelineColor;
        &.is-finish {
          border-top: 2px solid $timelineColor;
          &::before {
            content: "";
            position: absolute;
            left: 100%;
            transform: translateX(-50%);
            width: $dot-size;
            height: $dot-size;
            border-radius: 50%;
            top: -($dot-size * (1 - $dot-gap));
            background: #b8d8ff;
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
      height: 64px;
      position: relative;
      .time {
        font-family: $font-family-title;
        position: absolute;
        top: -58px;
        left: calc(50% - 30px);
        display: inline;
        color: #007aff;
        letter-spacing: 0.23px;
        text-align: center;
      }
      .desc {
        position: absolute;
        width: 160px;
        left: calc(50% - 80px);
        top: 100%;
        font-size: 13px;
        color: #171c34;
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
    transition: background 0.5s ease-in-out;
    cursor: pointer;
  }
  .timeline ul li div {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
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
