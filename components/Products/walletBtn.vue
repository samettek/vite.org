<template>
  <div class="is-flex wallet__wrapper">
    <!-- ios & android -->
    <div class="is-flex"
      v-if="!isMobile">
      <v-popover
        style="margin-right: 10px;"
        offset="16"
        placement="bottom-center"
        popoverClass="v-popover"
        trigger="hover">
        <div class="wallet__btn" :class="{'is-active': isActive}">{{$t('product.wallet.ios')}}</div>
        <template slot="popover">
          <div class="wallet-app-container">
            <div class="wallet-item">
              <img
                :src="QRcode[$i18n.locale]"
                class="wallet-app"
              />
            </div>
          </div>
        </template>
      </v-popover>
      <v-popover
        style="margin-right: 10px;"
        offset="16"
        placement="bottom-center"
        popoverClass="v-popover"
        trigger="hover">
        <div class="wallet__btn" :class="{'is-active': isActive}">{{$t('product.wallet.android')}}</div>
        <template slot="popover">
          <div class="wallet-app-container">
            <div class="wallet-item">
              <img
                :src="QRAndroidcode[$i18n.locale]"
                class="wallet-app"
              />
            </div>
          </div>
        </template>
      </v-popover>
      <!-- btnCommonList -->
      <a
        class="wallet__btn"
        :href="item.url"
        v-for="(item, index) in btnCommonList"
        :key="index"
        target="_blank">
        <div >
          {{ $t(`product.wallet.${item.key}`) }}
        </div>
      </a>
    </div>
    <div
      v-else
      class="is-flex">
      <a
        class="wallet__btn"
        :class="{'is-active': item.active}"
        :href="item.url"
        v-for="(item, index) in btnSpecList.concat(btnCommonList)"
        :key="index"
        :download="item.key === 'android' ? 'vite.apk' : ''"
        target="_blank">
        <div >
          {{ $t(`product.wallet.${item.key}`) }}
        </div>
      </a>
      <!-- <a
        class="wallet__btn"
        href='https://itunes.apple.com/us/app/vite-official-hd-wallet/id1437629486?mt=8'>
          {{$t('product.wallet.ios')}}
      </a>
      <a
        class="wallet__btn"
        download="vite.apk"
        style="margin-right: 10px;"
        href='https://play.google.com/store/apps/details?id=net.vite.wallet'>
        {{$t('product.wallet.android')}}
      </a> -->
    </div>
    
  </div>
</template>

<script type="text/babel">
// ios:
// android: 
import isMobile from 'is-mobile';
import { VPopover } from 'v-tooltip';

export default {
  components: {
    VPopover
  },
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      isMobile: isMobile(),
      QRcode: {
        zh: require('~/assets/images/zhongapp.png'),
        en: require('~/assets/images/waiapp.png')
      },
      QRAndroidcode: {
        zh: require('~/assets/images/airdrop/android.png'),
        en: require('~/assets/images/airdrop/android.png')
      },
      btnSpecList: [{
        key: 'ios',
        url: 'https://itunes.apple.com/us/app/vite-official-hd-wallet/id1437629486?mt=8',
        active: this.isActive
      }, {
        key: 'android',
        url: 'https://play.google.com/store/apps/details?id=net.vite.wallet',
        active: this.isActive
      }],
      btnCommonList: [{
        key: 'web',
        url: 'https://wallet.vite.net'
      }, {
        key: 'mac',
        url: 'http://download.vite.net/ViteWallet-1.3.0.dmg'
      }, {
        key: 'windows',
        url: 'http://download.vite.net/ViteWallet-1.3.0.exe'
      }]
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.wallet-app-container {
  display: flex;
  display: -webkit-flex;
  padding: 0;
  background: #ffffff;
  font-size: 14px;
  color: #5e6875;
  letter-spacing: 0;
  text-align: center;
  .wallet-app {
    width: 120px;
    height: 120px;
  }
  .wallet-item + .wallet-item {
    margin-left: 20px;
  }
}

.wallet__btn {
  box-sizing: border-box;
  padding: 0 12px; 
  height:30px;
  border-radius:2px;
  border:2px solid $common-active-color;
  color:$common-active-color;
  line-height:26px;
  font-size:16px;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  margin-right: 10px;
  cursor: pointer;
  &:last-child {
    margin-right: 0px;
  }
}
.wallet__wrapper {
  justify-content: center;
}
.is-active {
  background: $common-active-color;
  color: white;
}


</style>