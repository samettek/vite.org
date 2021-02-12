<template>
  <svg width="340px" height="340px" viewBox="0 0 340 340" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <polygon id="path-1" points="85.02737 0 0 0 0 170.0578 170.05474 170.0578 170.05474 0"></polygon>
      <polygon id="path-3" points="169.97433 0 340 0 340 340 -5.42101086e-20 340 -5.42101086e-20 0 169.97433 0 -0.00034 0 -0.00034 339.9456 339.94866 339.9456 339.94866 0"></polygon>
      <polygon id="path-5" points="0 340 340 340 340 0 0 0"></polygon>
    </defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-444.000000, -993.000000)">
        <g transform="translate(0.000000, 922.000000)">
          <g transform="translate(444.000000, 71.000000)">
            <g>
              <mask id="mask-2" fill="white">
                <use xlink:href="#path-1"></use>
              </mask>
              <g></g>
              <path d="M170.05474,0 L84.94254,0 C56.62734,28.3152 28.31554,56.6304 -0.00306,84.9456 L-0.00306,170.0578 L170.05474,0 Z" id="Fill-1" fill="#0B40B6" mask="url(#mask-2)"></path>
            </g>
            <g>
              <mask id="mask-4" fill="white">
                <use xlink:href="#path-3"></use>
              </mask>
              <g></g>
              <path d="M339.94866,0 L254.99286,0 C254.47266,0.6596 0.05746,254.9354 -0.00034,254.983 L-0.00034,339.9456 C14.07226,325.8764 326.12766,13.8142 339.94866,0" id="Fill-4" fill="#0B40B6" mask="url(#mask-4)"></path>
            </g>
            <path d="M84.94526,340 L170.05406,340 C226.70146,283.3526 283.35226,226.7052 339.99966,170.0578 L339.99966,84.9422 C326.93006,98.0152 97.95706,326.9882 84.94526,340" id="Fill-7" fill="#0B40B6"></path>
            <path d="M254.9983,340 L339.9405,340 C339.9609,339.9796 339.9813,339.9592 339.9983,339.9388 L339.9983,254.983 C339.6141,255.2788 255.2057,339.7552 254.9983,340" id="Fill-9" fill="#0B40B6"></path>
            <mask id="mask-6" fill="white">
              <use xlink:href="#path-5"></use>
            </mask>
            <g></g>
            <polygon fill="#231F20" mask="url(#mask-6)" points="255 170 340 170 340 85 255 85"></polygon>
            <polygon fill="#231F20" mask="url(#mask-6)" points="170 255 255 255 255 170 170 170"></polygon>
            <polygon fill="#231F20" mask="url(#mask-6)" points="85 340 170 340 170 255 85 255"></polygon>
            <polygon fill="#0FBAEE" mask="url(#mask-6)" points="85 170 170 170 170 85 85 85"></polygon>
            <polygon fill="#231F20" mask="url(#mask-6)" points="255 340 340 340 340 255 255 255"></polygon>
            <polygon fill="#0FBAEE" mask="url(#mask-6)" points="170 85 255 85 255 0 170 0"></polygon>
            <polygon fill="#0B40B6" mask="url(#mask-6)" points="0 85 85 85 85 0 0 0"></polygon>
            <polygon fill="#0FBAEE" mask="url(#mask-6)" points="0 255 85 255 85 170 0 170"></polygon>
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

  @include mobile {
    svg {
      height: 170px;
      width: 170px;
    }
  }

  @include touch {
    svg {
      height: 230px;
      width: 230px;
    }
  }
</style>
