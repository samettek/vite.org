<template>
  <svg width="65px" height="65px" viewBox="0 0 65 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
    <title>news</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <circle id="path-1" cx="31.5" cy="31.5" r="20.5"></circle>
        <filter x="-35.4%" y="-35.4%" width="170.7%" height="170.7%" filterUnits="objectBoundingBox" id="filter-2">
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="4.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0.935571869   0 0 0 0 0.965013186   0 0 0 0 0.984640731  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <circle id="path-3" cx="31.5" cy="31.5" r="11.5"></circle>
        <filter x="-32.6%" y="-32.6%" width="165.2%" height="165.2%" filterUnits="objectBoundingBox" id="filter-4">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.654612843   0 0 0 0 0.732731617   0 0 0 0 0.784810799  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <circle id="path-5" cx="31.5" cy="31.5" r="1.5"></circle>
        <filter x="-333.3%" y="-333.3%" width="766.7%" height="766.7%" filterUnits="objectBoundingBox" id="filter-6">
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="首页" transform="translate(-297.000000, -807.000000)">
            <g id="Group-25" transform="translate(298.000000, 808.000000)">
                <g id="Group-17">
                    <circle id="Oval-Copy-2" stroke="#E6F5FF" stroke-width="2" fill="#FFFFFF" cx="31.5" cy="31.5" r="31.5"></circle>
                    <g id="Oval-Copy-2">
                        <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                        <use stroke="#CAEAFF" stroke-width="2" fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-1"></use>
                    </g>
                    <g id="Oval-Copy-2">
                        <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlink:href="#path-3"></use>
                        <use fill="#007AFF" fill-rule="evenodd" xlink:href="#path-3"></use>
                    </g>
                    <g id="Oval-Copy-6">
                        <use fill="black" fill-opacity="1" filter="url(#filter-6)" xlink:href="#path-5"></use>
                        <circle stroke="#FFFFFF" stroke-width="4" fill="#FFFFFF" fill-rule="evenodd" cx="31.5" cy="31.5" r="3.5"></circle>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
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

</style>
