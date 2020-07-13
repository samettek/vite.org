<template>
  <div class="worth">
    <item
    :itemKey="'pay'"
    ></item>

    <item
      :itemKey="'finance'"
    ></item>
    <item
      :itemKey="'dex'"
    ></item>
  </div>
</template>

<script type="text/babel">
import item from './worthItem';

export default {
  components: {
    item,
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~assets/vars";
.worth{
    display:flex;
    padding-left: 85px;
    justify-content: space-between;
}
</style>
