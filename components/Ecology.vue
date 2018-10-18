<template>
  <div>
    <h1 style="text-align: center">{{$t(`ecology.title`)}}</h1>
    <section v-for="eco in ecology" :key="eco.key">
      <div class="container">
        <div class="columns">
          <div class="column is-half " style="border: 1px solid red;" v-for="(item, index) in eco.content" :key="index">
            <div style="width:500px;">
              <div class="img-wrapper">
                <contract v-if="item === 'contract'"></contract>
                <issue-currency v-if="item === 'issueCurrency'"></issue-currency>
                <pay v-if="item === 'pay'"></pay>
                <transfer v-if="item === 'transfer'"></transfer>
              </div>
              <h3>{{$t(`ecology.${item}.title`)}}</h3>
              <div>
                {{$t(`ecology.${item}.content`)}}
              </div>
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
    &.reverse-row {
      .columns {
        flex-direction: row-reverse;
        .column {
          
        }
      }
    }

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
          padding: 71px 0;
        }
        @include touch {
          padding: 2rem 0;
        }

        // &:first-child {
        //   @include tablet {
        //     display: flex;
        //     flex-direction: column;
        //     align-items: center;
        //     justify-content: center;
        //   }
        //   @include mobile {
        //     padding-bottom: 69px;
        //     padding-top: 69px - (16px / 2);
        //   }
        // }
        
      }

      .img-wrapper {
        flex-direction: column;
        display: flex;
        align-items: center;
        h3 {
          font-size:30px;
          font-family: $font-family-main;
          color:rgba(0,114,227,1);
          line-height:42px;
          margin-top: 31px;
          text-align: center;
          @include touch {
            font-size: 24px;
            line-height: 34px;
            margin-top: 11px;
          }
        }
      }
    }
  }
</style>
