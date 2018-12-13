<template>
  <section class="section">
    <div class="container">
      <h1>{{$t('team.core')}}</h1>
      <div class="columns is-multiline">
        <div
          class="column item is-3-widescreen is-6-tablet is-12-mobile"
          v-for="item in teams"
          :key="item.key"
        >
          <div class="is-info">
            <team-image
              :src="item.img"
              :name="item.key"
              :urls="item.urls"
            ></team-image>
          </div>
        </div>
      </div>
      <h1>顾问</h1>
      <div class="columns is-multiline is-center">
        <div
          class="column item is-3-widescreen is-6-tablet is-12-mobile"
          v-for="item in advisors"
          :key="item.key"
        >
          <div class="is-info">
            <team-image
              :src="item.img"
              :name="item.key"
              :urls="item.urls"
              type="advisor"
            ></team-image>
          </div>
        </div>
      </div>
      <mailto-btn
        :text="'加入我们'"
        :href="`mailto:hr@vite.org`"
      ></mailto-btn>
    </div>
  </section>
</template>

<script type="text/babel">
import TeamImage from "~/components/TeamImage";
import MailtoBtn from "~/components/MailtoBtn";

export default {
  components: {
    TeamImage,
    MailtoBtn
  },
  data: function() {
    return {
      teams: [
        {
          img: require("~/assets/images/teams/liuchunming.png"),
          key: "liuchunming",
          urls: [
            {
              icon: ["fab", "twitter"],
              url: "https://twitter.com/chunming_liu"
            },
            {
              icon: ["fab", "linkedin"],
              url: "https://www.linkedin.com/in/liuchunming/"
            },
            {
              icon: ["fab", "github"],
              url: "https://github.com/charles-liu"
            }
          ]
        },
        {
          img: require("~/assets/images/teams/richard.jpg"),
          key: "richard",
          urls: [
            {
              icon: ["fab", "twitter"],
              url: "https://twitter.com/Gentso09"
            },
            {
              icon: ["fab", "linkedin"],
              url: "https://www.linkedin.com/in/richard-yan-934229a5/"
            }
          ]
        },
        {
          img: require("~/assets/images/teams/yuanhui.png"),
          key: "frank",
          urls: [
            {
              icon: ["fab", "linkedin"],
              url: "https://www.linkedin.com/in/frank-deng-4756147"
            }
          ]
        },
        {
          img: require("~/assets/images/teams/leo.jpg"),
          key: "leo",
          urls: [
            {
              icon: ["fab", "twitter"],
              url: "https://twitter.com/soliury"
            },
            {
              icon: ["fab", "linkedin"],
              url: "https://www.linkedin.com/in/leo-zhang-b68a86166/"
            },
            {
              icon: ["fab", "github"],
              url: "https://github.com/soliury"
            }
          ]
        },
        {
          img: require("~/assets/images/teams/allen.jpeg"),
          key: "allen",
          urls: [
            {
              icon: ["fab", "linkedin"],
              url: "https://www.linkedin.com/in/xiaotao-liu-002013169/"
            }
          ]
        },
        { urls: [], key: "Chris Li" },
        { urls: [], key: "Luke Kim" },
        { urls: [], key: "Jeff Ng" },
        { urls: [], key: "Agata Aks" },
        {
          urls: [
            {
              icon: ["fab", "linkedin"],
              url:
                "https://www.linkedin.com/in/%E5%90%9B%E6%80%A1-%E6%9D%8E-4b9562b4/"
            }
          ],
          key: "Lola"
        },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/buckcao" }
          ],
          key: "Logan"
        },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/shitong" }
          ],
          key: "Stone"
        },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/jerry-vite" }
          ],
          key: "jerry"
        },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/alex-yf" }
          ],
          key: "Alex"
        },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/tuprise" }
          ],
          key: "Tuprise"
        },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/viteLiz" }
          ],
          key: "viteLiz"
        },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/qianlei-jia" }
          ],
          key: "Abbott"
        },
        {
          urls: [{ icon: ["fab", "github"], url: "https://github.com/lyd00" }],
          key: "hubery"
        },
        { urls: [], key: "Cecelia" },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/viteshan" }
          ],
          key: "viteshan"
        },
        { urls: [], key: "Ada" },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/vite-crzn" }
          ],
          key: "Jin"
        },
        {
          urls: [
            {
              icon: ["fab", "github"],
              url: "开发https://github.com/haoshenyang"
            }
          ],
          key: "Shenyang"
        },
        {
          urls: [
            {
              icon: ["fab", "github"],
              url: "https://github.com/Candyhanjingyi"
            }
          ],
          key: "Candy"
        },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/roymoro" }
          ],
          key: "Eric"
        },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/vite-pu" }
          ],
          key: "Asurily"
        },
        { urls: [], key: "Cassie" },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/hurrytospring" }
          ],
          key: "Reg"
        },
        { urls: [], key: "Daisy" },
        { urls: [], key: "Tiantao" },
        { urls: [], key: "weichao" },
        { urls: [], key: "Zack" },
        { urls: [], key: "Tina" },
        { urls: [], key: "Rod" },
        { urls: [], key: "Tony" },
        { urls: [], key: "Flanke" },
        { urls: [], key: "Erin" },
        {
          urls: [
            { icon: ["fab", "github"], url: "https://github.com/fanglige" }
          ],
          key: "Hannah"
        },
        { urls: [], key: "Miya" }
      ],
      advisors: [
        {
          img: require("~/assets/images/teams/dan-wang.png"),
          key: "wangdong",
          urls: [
            {
              icon: ["fab", "linkedin"],
              url: "https://www.linkedin.com/in/dong77/"
            }
          ]
        },
        {
          key: "zhangli",
          img: require("~/assets/images/teams/lizhang.jpeg")
        },
        {
          key: "terenceLam",
          img: require("~/assets/images/teams/terence-bio.png"),
          urls: [
            {
              icon: ["fab", "linkedin"],
              url: "http://linkedin.com/in/terence-lam-460191"
            }
          ]
        },
        {
          key: "ivan",
          img: require("~/assets/images/teams/ivan.jpg"),
          urls: [
            {
              icon: ["fab", "linkedin"],
              url: "https://www.linkedin.com/in/ivangolovko/"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";

section {
  padding-top: 92px;
  .container {
    .is-info {
      display: flex;
    }
    .columns {
      margin-top: 60px;
      margin-bottom: 80px;
    }
  }

  @include touch {
    padding-top: 25px;
    padding-bottom: 25px;
    .container {
      & > h2 {
        font-size: 24px;
        line-height: 34px;
        margin-bottom: 25px;
      }
    }
  }
}
</style>
