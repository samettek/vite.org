<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="node-star is-flex">
          <img :src="electors[key].img"/>
          <div>
            <h1>{{$t(`elector.nameMap.${key}.name`)}}</h1>
            <h2>{{$t(`elector.nameMap.${key}.description`)}}</h2>
          </div>
          
        </div>
        <div class="columns content is-multiline is-tablet">
          <div class="column is-three-quarters">
            <div class="columns is-multiline item is-mobile">
              <div class="column">
                <div class="video">
                  <img :src="electors[key].banner"/>
                </div>
              </div>
              <div class="column is-12 left-info" v-for="(item, index) in $t(`elector.detailTitles`)" :key="index">
                <div class="name">{{$t(`elector.detailTitles[${index}].title`)}}</div>
                <div class="content">
                  <p v-for="(content,index) in $t(`elector.nameMap.${key}.${item.key}`)" :key="index" v-if="item.key !== 'photo'">{{content}}</p>
                  <div class="is-flex columns">
                    <div class="column photo" v-for="(photo, index) in electors[key][item.key]" :key="index" v-if="item.key === 'photo'">
                      <img :src="photo" />
                      <div class="photo-name">name</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div class="column">
            <div class="column-right">
              <node-detail-link :desc="desc"></node-detail-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  import NodeDetailLink from '~/components/NodeDetailLink'
  export default {
    components: {
      NodeDetailLink
    },
    data: function () {
      return {
        key: this.$route.query.key,
        desc: [{
          links: ['https://twitter.com/vitelabs']
        }, {
          links: ['https://t.me/vite_ann',
            'https://t.me/vite_en',
            'https://t.me/vite_zh',
            'https://t.me/vite_russia',
            'https://t.me/vite_vietnamese',
            'https://t.me/vite_korean',
            'https://t.me/vite_thailand']
        }, {
          links: ['https://github.com/vitelabs']
        }, {
          links: ['https://discordapp.com/invite/CsVY76q']
        }, {
          links: ['https://www.reddit.com/r/vitelabs']
        }, {
          links: ['https://www.youtube.com/channel/UC8qft2rEzBnP9yJOGdsJBVg']
        }],
        detailList: [{
          key: 'vitecity'
        }, {

        }],
        electors: {
          vitecity: {
            img: require('~/assets/images/superNode/vitelogo.jpeg'),
            banner: require('~/assets/images/superNode/vitecity.jpeg')
          },
          tenzor: {
            img: require('~/assets/images/superNode/tenzorlogo.png'),
            banner: require('~/assets/images/superNode/tenzor.png'),
            photo: [require('~/assets/images/superNode/tenzorlogo.png'), require('~/assets/images/superNode/tenzor.png'), require('~/assets/images/superNode/tenzorlogo.png')]
          },
          snap: {
            key: 'snap',
            img: require('~/assets/images/superNode/snaplogo.png'),
            banner: require('~/assets/images/superNode/snap.jpg')
          },
          ux: {
            key: 'ux',
            img: require('~/assets/images/superNode/uxlogo.png'),
            banner: require('~/assets/images/superNode/ux.png')
          }
        }
      }
    }
  }
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";
  .section {
    padding-top: 92px;
    font-family: $font-family-light;
    .node-star {
      letter-spacing: 0;
      margin-bottom: 39px;
      div {
        margin-left: 20px;
        margin-top: 10px;
      }
      h1 {
        font-family:$font-family-title;
        font-size: 36px;
        color: #171C34;
        text-align: left;
        line-height: 50px;
      }
      h2 {
        margin-top: 10px;
        font-size: 16px;
        color: #919AA3;
        letter-spacing: 0;
        line-height: 22px;
      }
      img {
        height: 100px;
        width: 100px;
      }
    }
    .item {
      display: flex;
      justify-content: space-between;
    }
    .content {
      .photo {
        text-align: center;
        img {
          height: 160px;
          width: 160px;
        }
      }
      .left-info {
        .name {
          font-family: $font-family-title;
          font-size: 20px;
          color: #171C34;
          letter-spacing: 0;
          margin-bottom: 10px;
        }
        .content {
          
          font-size: 14px;
          color: #919AA3;
          text-align: justify;
          line-height: 18px;
        }
      }
      .video {
        text-align: center;
      }
    }
    .extral-narrow {
      width: 220px;
    }
    .column-right {
      // min-width: 320px;
    }
   
  }
</style>
