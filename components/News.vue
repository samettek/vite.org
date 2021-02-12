<template>
  <section class="section">
    <div class="container">
      <div class="flex-container">
        <news class="news-icon"></news>
        <div class="news">
          <div class="news-title">{{ $t('home.news') }}</div>
          <div
            class="news-content"
            v-for="i in newsList"
            :key="i.title"
            @click="open(i.link)"
          >
            <div class="news-item-row">
              <div class="news-item">{{i.title}}</div>
              <div class="news-time">{{i.date}}</div>
            </div>
          </div>
          <div class="news-more">
            <a
              :href="moreLink"
              target="_blank"
              class="more"
            >MORE</a><img
            src="~assets/images/more.svg"
            class="news-more-icon"
          />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
import News from '~/components/svg/News.vue';
import config from '~/config';

export default {
  components: {
    News,
  },
  data() {
    return { newsList: [] };
  },
  computed: {
    sourceUrl() {
      return config.urls.news.rss[this.$i18n.locale];
    },
    moreLink() {
      return config.urls.news.home[this.$i18n.locale];
    },
  },
  watch: {
    '$i18n.locale': function () {
      this.getRss();
    },
  },
  beforeMount() {
    this.getRss();
  },
  methods: {
    open(l) {
      window.open(l);
    },
    getRss() {
      const client = new XMLHttpRequest();
      client.open('get', this.sourceUrl);
      client.send();
      client.onreadystatechange = (e) => {
        if (client.readyState === 4 && client.status === 200) {
          const items = Array.from(
            client.responseXML.getElementsByTagName('item'),
          );
          this.newsList = items.slice(0, 3).map((i) => {
            const d = new Date(
              i.getElementsByTagName('pubDate')[0].textContent,
            );
            return {
              title: i.getElementsByTagName('title')[0].textContent,
              link: i.getElementsByTagName('link')[0].textContent,
              date: `${d.getMonth() + 1}.${d.getDate()}`,
            };
          });
        }
      };
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.flex-container {
  display: flex;
  display: -webkit-flex;
  position: relative;
  width: 100%;
  .news-icon {
    // position: absolute;
    // left: -78px;
  }
  .news {
    margin-left: 13px;
    margin-top: 21px;
    width: 100%;
    .news-title {
      font-family: $font-family-title;
      color: #363d4f;
      letter-spacing: 0;
      line-height: 24px;
    }
    .news-content {
      margin-top: 10px;
      font-size: 15px;
      color: #6d7783;
      letter-spacing: 0;
      line-height: 24px;
      cursor: pointer;
      .news-item-row {
        display: flex;
        display: -webkit-flex;
        .news-item {
          width: 355px;
          overflow: hidden;
        }
        .news-time {
          opacity: 0.39;
        }
      }
    }
      margin-left: 13px;
      margin-top: 21px;
      width: 100%;
      .news-title {
        font-family: $font-family-title;
        color: #363d4f;
        letter-spacing: 0;
        line-height: 24px;
      }
      .news-content {
        margin-top: 10px;
        font-size: 15px;
        color: #6d7783;
        letter-spacing: 0;
        line-height: 24px;
        cursor: pointer;
        .news-item-row {
          display: flex;
          display: -webkit-flex;
          .news-item {
            width: 355px;
            overflow: hidden;
          }
          .news-time {
            opacity: 0.39;
          }
        }
      }
      .news-more {
        font-family: $font-family-title;
        max-width: 80px;
        margin-top: 26px;
        font-size: 12px;
        letter-spacing: 0;
        line-height: 17px;
        .more {
          color: #007aff;
        }
        .news-more-icon {
          margin-left: 9px;
          vertical-align: sub;
        }
        &:hover {
          cursor: pointer;
        }
      }

  }
  }
</style>
