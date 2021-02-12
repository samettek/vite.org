<template>
  <transition
    name="dialog-fade">
    <div class="dialog__wrapper is-flex" v-if="visible">
      <div
        class="dialog"
        :class="[{ 'is-fullscreen': fullscreen}]">
        <div class="dialog__header">
          <slot name="title">
            <span class="dialog__title"> {{ title }} </span>
          </slot>
          <button
            type="button"
            class="dialog__headerbtn"
            v-if="showClose"
            @click="handleClose">
            <img src="~/assets/images/close.svg"/>
          </button>
        </div>
        <div class="dialog__body">
          <slot></slot>
        </div>
        <div class="dialog__footer is-flex">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    fullscreen: true,
  },
  data() {
    return {
    };
  },
  methods: {
    handleClose() {
      this.hide();
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
      }
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 998;
  background:rgba(255,255,255,0.5);
  align-items: center;
  .dialog {
    text-align: center;
    position: relative;
    margin: 0 auto 50px;
    background:rgba(255,255,255,1);
    border-radius: 2px;
    box-shadow: 0px 0px 20px 0px rgba(211,234,255,1);;
    box-sizing: border-box;
    width: 40%;
    margin-top: 15vh;
    @media only screen and (min-width: 320px) and (max-width: 767px)  {
      width: 90%;
    }
    &.is-fullscreen {
      width: 100%;
      margin-top: 0;
      margin-bottom: 0;
      height: 100%;
      overflow: auto;
    }
    .dialog__header {
      padding-bottom: 10px;
    }
    .dialog__headerbtn {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      font-size: 16px;
      cursor: pointer;
    }
    .dialog__title {
    }

    .dialog__body {
      padding: 24px 20px;
      font-size:19px;
      font-family:$font-family-title;
      font-weight:bold;
      color:rgba(104,104,104,1);
      line-height:26px;
      word-break: break-all;
    }

    .dialog__footer {
      margin: 0 auto;
      padding-bottom: 40px;
      box-sizing: border-box;
      justify-content: center;
    }
  }

}
</style>
