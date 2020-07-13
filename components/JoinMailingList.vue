<template>
  <section class="section">
    <div class="container">
      <h1 style="text-align:center">
        {{$t('joinMailing.title')}}
      </h1>
      <!-- <h2 class="title section-title inview1 animated fadeInDown delay-0-800">
        {{$t('joinMailing.title')}}
      </h2> -->
      <div class="form-wrapper">
        <form action="https://email.vite.org//?p=subscribe" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate>
          <div class="control">
            <input type="email" value="" name="email" class="email input is-medium" id="mce-EMAIL" :placeholder="$t('joinMailing.placeholder')" required>
            <div class="clear"><input type="submit" :value="$t('joinMailing.button')" name="subscribe" id="mc-embedded-subscribe" class="button is-medium"></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="htmlemail" tabindex="-1" value="1"></div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="list[1]" tabindex="-1" value="signup"></div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="listname[1]" tabindex="-1" value="vite.org"></div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="VerificationCodeX" tabindex="-1" value=""></div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="subscribe" tabindex="-1" value="Subscribe to the selected newsletters"></div>
        </form>
      </div>
    </div>
  </section>
</template>

<script type="text/babel">
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  .section {
    padding-top: 0;
    margin-top:200px;
    @include touch{
        margin-top:50px;
    }
    .title {
      text-align: center;
    }
    @include touch {
      padding-top: 25px;
      padding-bottom: 25px;
      .title {
        font-size: 24px;
        line-height: 34px;
        margin-bottom: 30px;
      }
    }
  }

  .form-wrapper {
    padding-top: 10px;
    .is-medium {
      min-width: 120px;
    }
  }

  .header {
    text-align: center;
    font-size: 20px;
  }
  .control {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    .input {
      max-width: 500px;
      height: 60px;
      box-shadow:2px 2px 50px 1px rgba(126, 183, 238, 0.33);;
      border:none;
      &::-webkit-input-placeholder{
          color:rgba(198,202,206,1);
      }
    }
    .button {
      width: 180px;
      margin-left: 30px;
      background: #007AFF;
      color: white;
      height: 60px;
    }

    @include touch {
      display: block;
      .input {
        width: 100%;
        max-width: none;
      }
      .button {
        width: 100%;
        margin-left: 0;
        margin-top: 15px;
      }
    }
  }
</style>
