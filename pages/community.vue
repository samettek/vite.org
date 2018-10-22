<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 style="margin-bottom: 50px;">社区</h1>
        <div class="community-star">
          <img src="~assets/images/community/star.svg"/>
          <span>社区之星</span>
        </div>
        <div class="columns content">
          <div class="column">
            <div class="columns is-multiline item">
              <div class="column">
                <div class="video">
                  <img src="~assets/images/video/play.svg"/>
                </div>
              </div>
              <div class="column is-4" v-for="(item, index) in arrays" :key="index">
                <community-card :src="item.img" :picture="item.picture" :cname="item.cname" :name="item.name"></community-card>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="column-right">vvvvv</div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  import CommunityCard from '~/components/CommunityCard'

  export default {
    components: {
      CommunityCard
    },
    data: function () {
      return {
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
        width: 706px;
        height: 348px;
        background-image: url("~assets/images/community/world.png");
        background-size: cover;
        text-align: center;
        img{
          margin-top: 110px;
        }
      }
    }
    .extral-narrow {
      width: 220px;
    }
    .column-right {
      width: 424px;
      border: 1px solid red;

    }
   
  }

</style>
