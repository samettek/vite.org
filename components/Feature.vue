<template>
  <div>
    <section>
      <h1 style="text-align: center">Vite 特性</h1>
        <div class="container is-flex">
          <div>
            <div class="safe">高吞吐</div>
            <div class="safe">低延迟</div>
            <div class="safe">可扩展</div>
          </div>
          <div class="center-content is-flex">
            <div class="left">
              <div class="hexagon is-flex" v-for="(feature, index) in features.left" :key="index">
                <div>
                  <img :src="feature.src"/>
                  <div class="hexagon-tag">
                    <span>{{ feature.content }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="center">
              <div class="hexagon is-flex" v-for="(feature, index) in features.center" :key="index">
                <div>
                  <img :src="feature.src"/>
                  <div class="hexagon-tag">
                    <span>{{ feature.content }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="hexagon is-flex" v-for="(feature, index) in features.right" :key="index">
                <div>
                  <img :src="feature.src"/>
                  <div class="hexagon-tag">
                    <span>{{ feature.content }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="safe">安全</div>
          </div>
          
        </div>
    </section>
  </div>
</template>

<script type="text/babel">
  export default {
    components: {
    },
    data: function () {
      return {
        features: {
          left: [{
            key: 'dag',
            src: require('~/assets/images/feature/dag.svg'),
            content: 'DAG账本'
          }, {
            key: 'async',
            src: require('~/assets/images/feature/async.svg'),
            content: '异步架构'
          }],
          center: [{
            key: 'hdpos',
            src: require('~/assets/images/feature/hdpos.svg'),
            content: 'HDPoS 共识协议'
          }],
          right: [{
            key: 'blockchain',
            src: require('~/assets/images/feature/blockchain.svg'),
            content: '快照链'
          }]
        }
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  section {
      width: 100%;
      height: 646px;
      background-size: contain;
      background-image: url("~assets/images/feature/bg.svg");
      .is-flex {
        justify-content: center;
      }
      .safe {
        width: 181.5px;
        height: 60px;
        background-image: url("~assets/images/feature/safe.svg");
        margin-top: 92px;
        text-align: center;
        line-height: 60px;
        color: white;
      }
      .center-content {
        align-items: center;
      }
      .hexagon {
        width: 226px;
        height: 218px;
        background: url("~assets/images/feature/hexagon.svg");
        background-size: contain; 
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-top: 40px; 
        .hexagon-tag {
          margin-top: 12px; 
          font-family: $font-family-title;
          font-size: 22px;
          color: #171C34;
          letter-spacing: 0.55px;
          text-align: center;
          width: 100%;
          span {
            display: inline-block;
            width: 95px;
            white-space: normal;
            line-height: 30px;
          }
          
        }
      }
  }
</style>
