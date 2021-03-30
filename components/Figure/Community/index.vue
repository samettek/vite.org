<template>
  <div>
    <section>
      <div class="container">
        <h1 style="margin-bottom: 50px;">{{$t('community.title')}}</h1>
        <div class="is-flex content">
          <div style="width:100%">
            <div class="">
              <div
                class="video is-flex"
                @click="play"
              >
                <img src="~assets/images/video/play.svg" />
              </div>
            </div>
            <div class="community-star">
              <sub-title :title="$t('community.star')"></sub-title>
            </div>
            <div class="is-flex is-multiline item">
              <div
                class="star-item"
                v-for="(item, index) in arrays"
                :key="index">
                <community-card
                  :src="item.img"
                  :picture="item.picture"
                  :cname="item.cname"
                  :name="item.name"
                  :mediaLink="item.mediaLink"
                  :icon="item.icon">
                </community-card>
              </div>
              <!-- <div
                class="column is-4 star-item" style="visibility:hidden">
                <community-card></community-card>
              </div> -->
            </div>
          </div>
          <div>
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
import CommunityCard from './CommunityCard';
import CommunityLink from './CommunityLink';
import subTitle from '~/components/subTitle';
import player from '~/components/play';
import config from '~/config';

export default {
  components: {
    CommunityCard,
    CommunityLink,
    subTitle,
  },
  methods: {
    play() {
      this.$i18n.locale === 'zh'
        ? player({ src: config.urls.video.loves.zh })
        : player({ src: '', iframeSrc: 'https://www.youtube.com/embed/s_hxkBMizgM' });
    },
  },
  data() {
    return {
      desc: [
        {
          img: require('~/assets/images/community/twitterblue.svg'),
          links: ['https://twitter.com/vitelabs'],
        },
        {
          img: require('~/assets/images/community/telegramblue.svg'),
          links: [
            'https://t.me/vite_ann',
            'https://t.me/vite_en',
            'https://t.me/vite_zh',
            'https://t.me/vite_russia',
            'https://t.me/vite_vietnamese',
            'https://t.me/vite_korean',
            'https://t.me/vite_french',
            'https://t.me/vite_arabic',
            'https://t.me/vite_german',
            'https://t.me/vite_japanese',
            'https://t.me/vite_thailand',
            'https://t.me/vite_turkish',
            'https://t.me/vite_indonesian',
            'https://t.me/vite_spanish',
            'https://t.me/vite_malaysian',
            'https://t.me/vite_filipino',
            'https://t.me/vite_bengali',
          ],
        },
        {
          img: require('~/assets/images/community/githubblue.svg'),
          links: ['https://github.com/vitelabs'],
        },
        {
          img: require('~/assets/images/community/instagram.svg'),
          links: ['https://www.instagram.com/vite.labs/'],
        },
        {
          img: require('~/assets/images/community/facebook.svg'),
          links: ['https://www.facebook.com/vitelabs/'],
        },
        {
          img: require('~/assets/images/community/blockfolio.svg'),
          links: ['https://blockfolio.com/coin/VITE'],
        },
        {
          img: require('~/assets/images/community/dicordblue.svg'),
          links: ['https://discordapp.com/invite/CsVY76q'],
        },
        {
          img: require('~/assets/images/community/redditblue.svg'),
          links: ['https://www.reddit.com/r/vitelabs'],
        },
        {
          img: require('~/assets/images/community/youtubeblue.svg'),
          links: ['https://www.youtube.com/channel/UC8qft2rEzBnP9yJOGdsJBVg'],
        },
        {
          img: require('~/assets/images/community/forum.svg'),
          links: ['https://forum.vite.net/'],
        },
        {
          img: require('~/assets/images/community/bitcoinblue.svg'),
          links: ['https://bitcointalk.org/index.php?topic=5056409'],
        },
        {
          img: require('~/assets/images/community/wechatblue.svg'),
          key: 'pic',
          pic: require('~/assets/images/vitelabs_wechat.jpg'),
        },
      ],
      arrays: [
        {
          key: 0,
          img: require('~/assets/images/community/Belgium.svg'),
          cname: 'Belgium',
          picture: require('~/assets/images/community/Fernandez-Bravo.jpg'),
          name: 'Antonio Fernandez',
          mediaLink: 'https://twitter.com/afbr84',
          icon: 'twitter',
        },
        {
          key: 1,
          img: require('~/assets/images/community/Russia.svg'),
          picture: require('~/assets/images/community/russia.jpeg'),
          cname: 'Russia',
          name: 'Богдан Обойшев',
          mediaLink: 'https://twitter.com/bodya_oboyshev',
          icon: 'twitter',
        },
        {
          key: 2,
          img: require('~/assets/images/community/France.svg'),
          picture: require('~/assets/images/community/france.jpeg'),
          cname: 'France',
          name: 'Thomas Blanc',
          mediaLink: 'https://twitter.com/ThomasBlnc',
          icon: 'twitter',
        },
        {
          key: 3,
          img: require('~/assets/images/community/India.svg'),
          picture: require('~/assets/images/community/india.jpg'),
          cname: 'India',
          name: 'पंकज',
          mediaLink: 'https://twitter.com/CryptoFonzie',
          icon: 'twitter',
        },
        {
          key: 4,
          img: require('~/assets/images/community/Nigeria.svg'),
          picture: require('~/assets/images/community/nigeria.jpg'),
          cname: 'Nigeria',
          name: 'Yomi Oyesiji',
          mediaLink: 'https://twitter.com/Mexite3yo',
          icon: 'twitter',
        },
        {
          key: 5,
          img: require('~/assets/images/community/Italy.svg'),
          picture: require('~/assets/images/community/italy.jpg'),
          cname: 'Italy',
          name: 'Angelo Giacomo Canevari',
          mediaLink: 'https://twitter.com/Angelo_Canevari',
          icon: 'twitter',
        },
        {
          key: 6,
          img: require('~/assets/images/community/Thailand.svg'),
          picture: require('~/assets/images/community/thailand.png'),
          cname: 'Thailand',
          name: 'Boss',
          mediaLink: 'https://twitter.com/attakorn_p',
          icon: 'twitter',
        },
        {
          key: 7,
          img: require('~/assets/images/community/Indonesia.svg'),
          picture: require('~/assets/images/community/indonesia.jpeg'),
          cname: 'Indonesia',
          mediaLink: 'https://twitter.com/casualfungames',
          name: 'Muhamad',
          icon: 'twitter',
        },
        {
          key: 8,
          img: require('~/assets/images/community/Vietnam.svg'),
          picture: require('~/assets/images/community/vietnam.png'),
          cname: 'Vietnam',
          name: 'Trang',
          mediaLink: 'https://twitter.com/VoBaLu1',
          icon: 'twitter',
        },
        {
          key: 9,
          img: require('~/assets/images/community/Turkey.svg'),
          picture: require('~/assets/images/community/turkey.jpg'),
          cname: 'Turkey',
          name: 'Öznur Topal',
          mediaLink: 'https://twitter.com/znurTOPAL2',
          icon: 'twitter',
        },
        {
          key: 10,
          img: require('~/assets/images/community/Indonesia.svg'),
          picture: require('~/assets/images/community/muhammad.jpg'),
          cname: 'Indonesia',
          name: 'Muhammad Usman',
          mediaLink: 'https://www.linkedin.com/in/netral8787/',
          icon: 'linkedin',
        },
        {
          key: 11,
          img: require('~/assets/images/community/spain.jpg'),
          picture: require('~/assets/images/community/erik.jpg'),
          cname: 'Spain',
          name: 'Erik Siria',
          mediaLink: 'https://twitter.com/CriptoErik',
          icon: 'twitter',
        },
      ],
    };
  },
};
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
    color: #171c34;
    letter-spacing: 0;
    line-height: 38px;
    margin: 20px auto 10px;
    flex: none;
    width: 100%;
    span {
      display: inline-block;
      margin-left: 8px;
    }
  }
  .item {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-flex-wrap:wrap;
    -webkit-box-lines:multiple;
    -moz-flex-wrap:wrap;
    -o-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .star-item {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .content {
     @include touch {
      flex-direction: column;
    }
    .video {
      margin: 0 auto;
      min-width: 695px;
      height: 348px;
      background-image: url("~assets/images/community/world.png");
      background-size: cover;
      text-align: center;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @include touch {
        min-width: 100%;
        height: 202px;
      }
      img {
        // margin-top: 110px;
      }
    }
  }
  .extral-narrow {
    width: 220px;
  }
  .column-right {
    margin-left: 20px;
    width: 300px;
    @include touch {
      width: 100%;
      margin-left: 0px;
    }
  }
}
</style>
