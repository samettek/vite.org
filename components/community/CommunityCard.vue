<template>
    <div class="cm-card">
        <div class="cm-card__header">
            <h3>{{$t(`community.stars.${name}.name`)}}</h3>
            <div>
                <img :src="img" :alt="$t(`community.stars.${name}.name`)">
            </div>
        </div>
        <div class="cm-card__content">
             <div class="cm-card__item">
                 <p>{{$t(`community.stars.${name}.desc`)}}</p>
             </div>
             <div class="cm-card__item">
                 <p v-for="(item, index) in contributions" :key="index">{{item}}</p>
             </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  computed: {
    contributions() {
      const temp = this.$t(`community.stars.${this.name}.contribution`);
      return Array.isArray(temp) ? temp : [];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";

.cm-card {
    box-shadow: 0px 4px 24px 0px rgba(211,234,255,0.53);
    padding: 20px;
    min-height: 300px;
    &__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        h3 {
            @include title();
            font-size: 15px;
            line-height: 20px;
        }
        img {
            height: 40px;
            width: 40px;
            border-radius: 40px;
        }
    }
    &__content {
        margin-top: 10px;
        word-break: break-all;
    }
    &__item {
        font-family: $font-family-light;
        font-weight: 400;
        font-size: 12px;
        color: #919aa3;
        margin-bottom: 20px;
        line-height: 20px;
        &:last-child {
            margin-bottom: unset;
        }
        p {
            margin: 0 0 0 10px;
            &:first-child {
                &::before {
                    content: " ";
                    border-left: 3px solid #007aff;
                    margin-left: -11px;
                    margin-right: 8px;
                }
            }
        }
    }
}
</style>
