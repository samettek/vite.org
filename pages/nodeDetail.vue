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
                      <img :src="photo.img" />
                      <div class="photo-name">{{ photo.name }}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="column">
            <div class="column-right">
              <node-detail-link :desc="electors[key].desc" :medium="$t(`elector.nameMap.${key}.medium`)"></node-detail-link>
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
        electors: {
          vitecity: {
            desc: [{
              name: 'email',
              links: ['mailto:vitecity@126.com']
            }],
            img: require('~/assets/images/superNode/vitelogo.jpeg'),
            banner: require('~/assets/images/superNode/vitecity.jpeg'),
            photo: [{
              img: require('~/assets/images/superNode/hujinlang.jpg'),
              name: 'Hu Jinlang'
            }, {
              img: require('~/assets/images/superNode/zengzhifang.jpg'),
              name: 'Zeng Zhifang'
            }, {
              img: require('~/assets/images/superNode/zhonglifeng.jpg'),
              name: 'Zhong Lifeng'
            }]
          },
          tenzor: {
            desc: [{
              name: 'email',
              links: ['mailto:invest@tenzor.capital']
            }],
            img: require('~/assets/images/superNode/tenzorlogo.png'),
            banner: require('~/assets/images/superNode/tenzor.png'),
            photo: [{
              img: require('~/assets/images/superNode/kirill.jpg'),
              name: 'Kirill Medvedev'
            }, {
              img: require('~/assets/images/superNode/maksim.jpg'),
              name: 'Maksim Mizerov'
            }, {
              img: require('~/assets/images/superNode/daniil.jpg'),
              name: 'Daniil Ogurtsov'
            }]
          },
          snap: {
            desc: [{
              name: 'email',
              links: ['mailto:plasmo7@gmail.com']
            }, {
              name: 'twitter',
              links: ['https://twitter.com/Snap_Secure']
            }, {
              name: 'website',
              links: ['http://snapsecure.network/']
            }],
            img: require('~/assets/images/superNode/snaplogo.jpg'),
            banner: require('~/assets/images/superNode/snap.jpg'),
            photo: [{
              img: require('~/assets/images/superNode/mathew.jpg'),
              name: 'Mathew Pham (AKA plasmo)'
            }]
          },
          ux: {
            desc: [{
              name: 'email',
              links: ['mailto:sbp@uixagency.com']
            }],
            img: require('~/assets/images/superNode/uxlogo.png'),
            banner: require('~/assets/images/superNode/ux.jpg'),
            photo: [{
              img: require('~/assets/images/superNode/vladimir.jpg'),
              name: 'Vladimir Polishchuk'
            }, {
              img: require('~/assets/images/superNode/serhiy.jpg'),
              name: 'Serhiy Polishchuk'
            }, {
              img: require('~/assets/images/superNode/julia.jpg'),
              name: 'Julia Novak'
            }]
          },
          loopring: {
            desc: [{
              name: 'email',
              links: ['mailto:foundation@loopring.org']
            }],
            img: require('~/assets/images/superNode/loopringlogo.jpg'),
            banner: require('~/assets/images/superNode/loopring.jpg'),
            photo: [{
              img: require('~/assets/images/superNode/JayZhou.jpg'),
              name: 'Kongliang, Zhong'
            }]
          },
          zhizifund: {
            desc: [{
              name: 'email',
              links: ['mailto:zhizifund@gmail.com']
            }, {
              name: 'website',
              links: ['http://zhizi.fund/']
            }],
            img: require('~/assets/images/superNode/zhizilogo.jpg'),
            banner: require('~/assets/images/superNode/zhizibanner.jpg'),
            photo: [{
              img: require('~/assets/images/superNode/lidawei.png'),
              name: 'Dawei Li'
            }, {
              img: require('~/assets/images/superNode/gaofeng.png'),
              name: 'Feng Gao'
            }]
          },
          linknode: {
            desc: [{
              name: 'email',
              links: ['mailto:blairqu@linkvc.com']
            }],
            img: require('~/assets/images/superNode/linknodelogo.jpg'),
            banner: require('~/assets/images/superNode/linknodebanner.jpg'),
            photo: [{
              img: require('~/assets/images/superNode/jiapenglin.jpg'),
              name: 'Jiapeng Lin'
            }, {
              img: require('~/assets/images/superNode/henryxu.jpg'),
              name: 'Henry（He） Xu'
            }, {
              img: require('~/assets/images/superNode/lizhang.jpg'),
              name: 'Li Zhang'
            }]
          },
          bitvite: {
            desc: [{
              name: 'email',
              links: ['mailto:Contract@bitewd.com']
            }],
            img: require('~/assets/images/superNode/bitvitelogo.png'),
            banner: require('~/assets/images/superNode/bitvitebanner.jpeg'),
            photo: [{
              img: require('~/assets/images/superNode/williamwang.jpg'),
              name: 'William Wang'
            }, {
              img: require('~/assets/images/superNode/senyuanzhang.png'),
              name: 'Senyuan Zhang'
            }, {
              img: require('~/assets/images/superNode/alexlee.jpg'),
              name: 'Alex Lee'
            }]
          },
          swissvite: {
            desc: [{
              name: 'email',
              links: ['mailto:contact@swissvite.org']
            }, {
              name: 'website',
              links: ['http://swissvite.org/']
            }],
            img: require('~/assets/images/superNode/swissvitelogo.jpg'),
            banner: require('~/assets/images/superNode/swissbanner.jpg'),
            photo: [{
              img: require('~/assets/images/superNode/julien.jpg'),
              name: 'Julien Pidoux'
            }, {
              img: require('~/assets/images/superNode/guillaume.jpg'),
              name: 'Guillaume Pedrazzini'
            }, {
              img: require('~/assets/images/superNode/pierre.jpg'),
              name: 'Pierre BoiteuxSwitzerland'
            }, {
              img: require('~/assets/images/superNode/mallet.jpg'),
              name: 'Julien MalletSwitzerland'
            }, {
              img: require('~/assets/images/superNode/jean.jpg'),
              name: 'Jean-Luc Strullu'
            }]
          },
          xinsheng: {
            desc: [{
              name: 'email',
              links: ['mailto:xinshengcap@hotmail.com']
            }],
            img: require('~/assets/images/superNode/xinshenglogo.png'),
            banner: require('~/assets/images/superNode/xinshengbanner.jpeg'),
            photo: [{
              img: require('~/assets/images/superNode/cuizhe.png'),
              name: 'Zhe Cui'
            }, {
              img: require('~/assets/images/superNode/lizhibo.png'),
              name: 'Zhibo Li'
            }, {
              img: require('~/assets/images/superNode/zhangxuming.png'),
              name: 'Xuming Zhang'
            }, {
              img: require('~/assets/images/superNode/emma.png'),
              name: 'Emma'
            }, {
              img: require('~/assets/images/superNode/sunquan.png'),
              name: 'Quan Sun'
            }]
          },
          zlnode: {
            desc: [{
              name: 'email',
              links: ['mailto:blairqu@linkvc.com']
            }],
            img: require('~/assets/images/superNode/zllogo.jpg'),
            banner: require('~/assets/images/superNode/zlbanner.jpg'),
            photo: [{
              img: require('~/assets/images/superNode/lizhang.jpg'),
              name: 'Li Zhang'
            }]
          },
          loopnest: {
            desc: [{
              name: 'email',
              links: ['mailto:jonathan@loopnest.io']
            }],
            img: require('~/assets/images/superNode/loopnestlogo.jpg'),
            banner: require('~/assets/images/superNode/loopnestbanner.jpg'),
            photo: [{
              img: require('~/assets/images/teams/terence-bio.png'),
              name: 'Mr. Terence Lam'
            }]
          },
          belsona: {
            desc: [{
              name: 'email',
              links: ['mailto:info@belsona.io']
            }, {
              name: 'twitter',
              links: ['https://twitter.com/icofanatics']
            }, {
              name: 'telegram',
              links: ['https://t.me/ICOFanatics']
            }],
            img: require('~/assets/images/superNode/belsonalogo.jpg'),
            banner: require('~/assets/images/superNode/belsonabanner.jpg'),
            photo: [{
              img: require('~/assets/images/superNode/denis.jpg'),
              name: 'Denis Meltsaev'
            }, {
              img: require('~/assets/images/superNode/vassily.jpg'),
              name: 'Vassily Godunov'
            }, {
              img: require('~/assets/images/superNode/georgy.jpg'),
              name: 'Georgy Yakovlev'
            }, {
              img: require('~/assets/images/superNode/artem.jpg'),
              name: 'Artem Potapov'
            }, {
              img: require('~/assets/images/superNode/igor.jpg'),
              name: 'Igor Peskov'
            }, {
              img: require('~/assets/images/superNode/usanov.jpg'),
              name: 'Usanov Alexei'
            }]
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
        text-align: left;
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
          min-width: 1200px;
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
