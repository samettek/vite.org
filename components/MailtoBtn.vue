<template>
  <div class="btn-wrapper">
    <a :href="href" target="_blank" class="extral">
      <span>{{ text }}</span>
    </a>
  </div>
</template>
<script type="text/babel">
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {};
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.btn-wrapper {
  text-align: center;
  span {
    display: inline-block;
    width: 300px;
    height: 60px;
    background: #007AFF;
    line-height: 60px;
    color: white;
    margin-bottom: 70px;
    cursor: pointer;
  }
  
}
</style>