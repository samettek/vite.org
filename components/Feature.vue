<template>
  <div class="features">
    <div class="item">
      <div class="arc-middle">
        <div class="arc-inner">
          <img
            src="~/assets/images/feature/async.svg"
            alt=""
          >
          <div>sdaf</div>
        </div>
      </div>
      <div class="tag" style="top: 120px;left: 325px;"></div>
      <div class="tag active" style="top: 220px;left: 325px;"></div>
      <svg
        class="colum-line"
        style="top: 153px;left: 267px;"
      >
        <path d="M0 10 l10 -10">
        </path>
        <path d="M10 0 l 30 0">
        </path>
      </svg>
      <svg
        class="colum-line"
        style="top: 232px;left: 267px;"
      >
        <path d="M0 0 l10 10">
        </path>
        <path d="M10 10 l 30 0">
        </path>
      </svg>
    </div>
        <div class="item">
      <div class="arc-middle">
        <div class="arc-inner">
          <img
            src="~/assets/images/feature/async.svg"
            alt=""
          >
          <div>sdaf</div>
        </div>
      </div>
      <div class="tag" style="top: 120px;left: 325px;"></div>
      <div class="tag active" style="top: 220px;left: 325px;"></div>
      <svg
        class="colum-line"
        style="top: 153px;left: 267px;"
      >
        <path d="M0 10 l10 -10">
        </path>
        <path d="M10 0 l 30 0">
        </path>
      </svg>
      <svg
        class="colum-line"
        style="top: 232px;left: 267px;"
      >
        <path d="M0 0 l10 10">
        </path>
        <path d="M10 10 l 30 0">
        </path>
      </svg>
    </div>
        <div class="item">
      <div class="arc-middle">
        <div class="arc-inner">
          <img
            src="~/assets/images/feature/async.svg"
            alt=""
          >
          <div>sdaf</div>
        </div>
      </div>
      <div class="tag" style="top: 120px;left: 325px;"></div>
      <div class="tag active" style="top: 220px;left: 325px;"></div>
      <svg
        class="colum-line"
        style="top: 153px;left: 267px;"
      >
        <path d="M0 10 l10 -10">
        </path>
        <path d="M10 0 l 30 0">
        </path>
      </svg>
      <svg
        class="colum-line"
        style="top: 232px;left: 267px;"
      >
        <path d="M0 0 l10 10">
        </path>
        <path d="M10 10 l 30 0">
        </path>
      </svg>
    </div>
        <div class="item">
      <div class="arc-middle">
        <div class="arc-inner">
          <img
            src="~/assets/images/feature/async.svg"
            alt=""
          >
          <div>sdaf</div>
        </div>
      </div>
      <div class="tag" style="top: 120px;left: 325px;"></div>
      <div class="tag active" style="top: 220px;left: 325px;"></div>
      <svg
        class="colum-line"
        style="top: 153px;left: 267px;"
      >
        <path d="M0 10 l10 -10">
        </path>
        <path d="M10 0 l 30 0">
        </path>
      </svg>
      <svg
        class="colum-line"
        style="top: 232px;left: 267px;"
      >
        <path d="M0 0 l10 10">
        </path>
        <path d="M10 10 l 30 0">
        </path>
      </svg>
    </div>
        <div class="item">
      <div class="arc-middle">
        <div class="arc-inner">
          <img
            src="~/assets/images/feature/async.svg"
            alt=""
          >
          <div>sdaf</div>
        </div>
      </div>
      <div class="tag" style="top: 120px;left: 325px;"></div>
      <div class="tag active" style="top: 220px;left: 325px;"></div>
      <svg
        class="colum-line"
        style="top: 153px;left: 267px;"
      >
        <path d="M0 10 l10 -10">
        </path>
        <path d="M10 0 l 30 0">
        </path>
      </svg>
      <svg
        class="colum-line"
        style="top: 232px;left: 267px;"
      >
        <path d="M0 0 l10 10">
        </path>
        <path d="M10 10 l 30 0">
        </path>
      </svg>
    </div>
    
  </div>
</template>

<script type="text/babel">
export default {
  components: {},
  data: function() {
    return {
      features: {
        left: [
          {
            key: "dag",
            src: require("~/assets/images/feature/dag.svg"),
            content: "DAG账本"
          },
          {
            key: "async",
            src: require("~/assets/images/feature/async.svg"),
            content: "异步架构"
          }
        ],
        center: [
          {
            key: "hdpos",
            src: require("~/assets/images/feature/hdpos.svg"),
            content: "HDPoS 共识协议"
          }
        ],
        right: [
          {
            key: "blockchain",
            src: require("~/assets/images/feature/blockchain.svg"),
            content: "快照链"
          }
        ]
      }
    };
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.features {
  height: 850px;
  padding: 0 250px 73px;
  width: 1920px;
  display:flex;
flex-wrap: wrap;
justify-content: space-between;
  .item {
    position: relative;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font: $font-family-title;
    height: 400px;
    width: 400px;
    border: 1px dashed #007aff;
    .arc-middle {
      border-radius: 100%;
      height: 286px;
      width: 286px;
      background: rgba(248, 251, 255, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      .arc-inner {
        border-radius: 100%;
        padding: 30px 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #1b4366;
        height: 150px;
        width: 150px;
        background: rgba(237, 246, 255, 1);
      }
    }
    .colum-line {
      position: absolute;
      width: 40px;
      height: 10px;
      
      path {
        shape-rendering: crispEdges;
        stroke: #007aff;
        stroke-width: 4px;
        fill: none;
        stroke-linecap:round;
        &:first-child{
            stroke-width: 2px;
            stroke-linecap:round;
        }
      }
    }
    .tag {
      position: absolute;
      width: 140px;
      height: 60px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 40px 0px rgba(211, 234, 255, 1);
      border-radius: 30px 30px 30px 0px;
      &.active {
        background: linear-gradient(
          139deg,
          rgba(111, 191, 255, 1) 0%,
          rgba(0, 122, 255, 1) 100%
        );
        color: #fff;
      }
    }
  }
}
</style>
