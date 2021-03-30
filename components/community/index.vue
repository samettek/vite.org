<template>
    <section class="section">
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
                  :name="item.name"
                  :img="item.img"
                  >
                </community-card>
              </div>
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
</template>

<script>
import CommunityLink from './CommunityLink';
import CommunityCard from './CommunityCard';
import subTitle from '~/components/subTitle';
import player from '~/components/play';
import config from '~/config';

export default {
  components: {
    CommunityLink,
    subTitle,
    CommunityCard,
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
            'https://t.me/vite_arabic',
            'https://t.me/vite_japanese',
            'https://t.me/vite_turkish',
            'https://t.me/vite_indonesian',
            'https://t.me/vite_filipino',
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
        // {
        //   img: require('~/assets/images/community/wechatblue.svg'),
        //   key: 'pic',
        //   pic: require('~/assets/images/vitelabs_wechat.jpg'),
        // },
      ],
      arrays: [
        {
          name: 'yandong',
          img: require('~/assets/images/community/yandong.png'),
        },
        {
          name: 'xiaoyu',
          img: require('~/assets/images/community/xiaoyu.jpg'),
        },
        {
          name: 'jingguang',
          img: require('~/assets/images/community/jingguang.jpg'),
        },
        {
          name: 'shuangyanpi',
          img: require('~/assets/images/community/shuangyanpi.png'),
        },
        {
          name: 'duy',
          img: require('~/assets/images/community/duy.jpg'),
        },
        {
          name: 'amec',
          img: require('~/assets/images/community/amec.jpg'),
        },
        {
          name: 'abdullah',
          img: require('~/assets/images/community/abdullah.jpg'),
        },
        {
          name: 'mona',
          img: require('~/assets/images/community/mona.jpg'),
        },
        {
          name: 'greek',
          img: require('~/assets/images/community/greek.jpg'),
        },
        {
          name: 'nrz',
          img: require('~/assets/images/community/nrz.jpg'),
        },
        {
          name: 'devaux',
          img: require('~/assets/images/community/devaux.jpg'),
        },
        {
          name: 'hope',
          img: require('~/assets/images/community/hope.jpg'),
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
    @include title();
    display: flex;
    font-size: 44px;
    letter-spacing: 0;
    line-height: 48px;
    margin: 90px auto 60px 0;
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
    margin: -30px -23px;
  }
  .star-item {
    width: 50%;
    padding: 30px 23px;
    @include touch {
      width: 100%;
    }
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
    width: 420px;
    @include touch {
      width: 100%;
      margin-left: 0px;
    }
  }
}
</style>
