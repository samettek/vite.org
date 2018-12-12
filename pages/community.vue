<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 style="margin-bottom: 50px;">社区</h1>
        <div class="community-star">
          <img src="~assets/images/community/star.svg"/>
          <span>社区之星</span>
        </div>
        <div class="columns content is-multiline">
          <div class="column">
            <div class="columns is-multiline item">
              <div class="column">
                <div class="video" @click="play">
                  <img src="~assets/images/video/play.svg"/>
                </div>
              </div>
              <div class="column is-4" v-for="(item, index) in arrays" :key="index">
                <community-card :src="item.img" :picture="item.picture" :cname="item.cname" :name="item.name"></community-card>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="column-right is-12-tablet">
              <community-link :desc="desc"></community-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  import CommunityCard from '~/components/CommunityCard'
  import CommunityLink from '~/components/CommunityLink'
  import player from '~/components/play'

  export default {
    components: {
      CommunityCard,
      CommunityLink
    },
    methods:{
        play(){
            player({src:"sffa"})
        }
    },
    data: function () {
      return {
        desc: [{
          img: require('~/assets/images/community/twitterblue.svg'),
          links: ['https://twitter.com/vitelabs']
        }, {
          img: require('~/assets/images/community/telegramblue.svg'),
          links: ['https://t.me/vite_ann',
            'https://t.me/vite_en',
            'https://t.me/vite_zh',
            'https://t.me/vite_russia',
            'https://t.me/vite_vietnamese',
            'https://t.me/vite_korean',
            'https://t.me/vite_thailand']
        }, {
          img: require('~/assets/images/community/githubblue.svg'),
          links: ['https://github.com/vitelabs']
        }, {
          img: require('~/assets/images/community/dicordblue.svg'),
          links: ['https://discordapp.com/invite/CsVY76q']
        }, {
          img: require('~/assets/images/community/redditblue.svg'),
          links: ['https://www.reddit.com/r/vitelabs']
        }, {
          img: require('~/assets/images/community/youtubeblue.svg'),
          links: ['https://www.youtube.com/channel/UC8qft2rEzBnP9yJOGdsJBVg']
        }, {
          img: require('~/assets/images/community/wechatblue.svg'),
          key: 'pic',
          pic: require('~/assets/images/vitelabs_wechat.jpg')
        }],
        arrays: [{
          key: 0,
          img: require('~/assets/images/community/Belgium.svg'),
          cname: 'Belgium',
          picture: require('~/assets/images/community/Fernandez-Bravo.jpg'),
          name: 'Angelo Giacomo Canevari'
        }, {
          key: 1,
          img: require('~/assets/images/community/Russia.svg'),
          picture: require('~/assets/images/community/russia.jpeg'),
          cname: 'Russia',
          name: 'Богдан Обойшев'
        }, {
          key: 2,
          img: require('~/assets/images/community/France.svg'),
          picture: require('~/assets/images/community/france.jpeg'),
          cname: 'France',
          name: 'Thomas BLANC'
        }, {
          key: 3,
          img: require('~/assets/images/community/Malaysia.svg'),
          picture: require('~/assets/images/community/malaysia.jpg'),
          cname: 'Malaysia',
          name: 'पंकज'
        }, {
          key: 4,
          img: require('~/assets/images/community/Nigeria.svg'),
          picture: require('~/assets/images/community/nigeria.jpg'),
          cname: 'Nigeria',
          name: 'Yomi Oyesiji'
        }, {
          key: 5,
          img: require('~/assets/images/community/Italy.svg'),
          picture: require('~/assets/images/community/italy.jpg'),
          cname: 'Italy',
          name: 'Angelo Giacomo Canevari'
        }, {
          key: 6,
          img: require('~/assets/images/community/Thailand.svg'),
          picture: require('~/assets/images/community/thailand.png'),
          cname: 'Thailand',
          name: 'Boss'
        }, {
          key: 7,
          img: require('~/assets/images/community/Indonesia.svg'),
          picture: require('~/assets/images/community/indonesia.jpeg'),
          cname: 'Indonesia',
          name: 'Muhamad'
        }, {
          key: 8,
          img: require('~/assets/images/community/Vietnam.svg'),
          picture: require('~/assets/images/community/vietnam.png'),
          cname: 'Vietnam',
          name: 'Trang'
        }, {
          key: 9,
          img: require('~/assets/images/community/Turkey.svg'),
          picture: require('~/assets/images/community/turkey.jpg'),
          cname: 'Turkey',
          name: 'Öznur TOPAL'
        }]
      }
    }
  }
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";
  .section {
    padding-top: 92px;
    .community-star {
      display: flex;
      display: -webkit-flex;
      font-family: $font-family-title;
      font-size: 24px;
      color: #171C34;
      letter-spacing: 0;
      line-height: 38px;
      margin-bottom: 39px;
      span {
        display: inline-block;
        margin-left: 8px;
      }
    }
    .item {
      display: flex;
      justify-content: space-between;
    }
    .content {
      .video {
        margin: 0 auto;
        min-width: 695px;
        height: 348px;
        background-image: url("~assets/images/community/world.png");
        background-size: cover;
        text-align: center;
        cursor: pointer;
        img{
          margin-top: 110px;
        }
      }
    }
    .extral-narrow {
      width: 220px;
    }
    .column-right {
      min-width: 320px;
    }
   
  }

</style>
