<template>
  <div>
    <h1 style="text-align: center">{{$t(`ecology.title`)}}</h1>
    <section v-for="eco in ecology" :key="eco.key">
      <div class="container">
        <div class="columns">
          <div class="column is-half-tablet" v-for="(item, index) in eco.content" :key="index">
              <div class="img-wrapper">
                <contract v-if="item === 'contract'"></contract>
                <issue-currency v-if="item === 'issueCurrency'"></issue-currency>
                <pay v-if="item === 'pay'"></pay>
                <transfer v-if="item === 'transfer'"></transfer>
              </div>
              <div class="ecology-title">{{$t(`ecology.${item}.title`)}}</div>
              <div class="ecology-content">
                {{$t(`ecology.${item}.content`)}}
              </div>
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/babel">
  import Contract from '~/components/svg/Contract.vue'
  import IssueCurrency from '~/components/svg/IssueCurrency.vue'
  import Pay from '~/components/svg/Pay.vue'
  import Transfer from '~/components/svg/Transfer.vue'
  
  export default {
    components: {
      Contract,
      IssueCurrency,
      Transfer,
      Pay
    },
    data: function () {
      return {
        ecology: [
          {
            key: 'cloumns1',
            content: ['contract', 'issueCurrency']
          },
          {
            key: 'cloumns2',
            content: ['pay', 'transfer']
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~assets/vars";

  section {
    @include touch {
      padding: 1.5rem;
    }

    @include desktop {
      padding: 0.75rem 0;
    }
    .columns {
      .column {
        position: relative;
        @include desktop {
          padding: 71px 20px;
        }
        @include touch {
          padding: 2rem 10px;
        }
      }

      .img-wrapper {
        flex-direction: column;
        display: flex;
        @include mobile {
          align-items: center;
        }
      }

      .ecology-title {
          font-family: $font-family-title;
          font-size: 24px;
          color: #171C34;
          letter-spacing: 0;
          line-height: 33px;
          margin-top: 30px;
          @include mobile {
            text-align: center;
          }
      }
      .ecology-content {
        margin-top: 25px;
        color: #919AA3;
        line-height: 30px;
      }
    }
  }
</style>
