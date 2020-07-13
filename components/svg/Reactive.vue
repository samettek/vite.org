<template>
  <div>
    <svg class="is-hidden-touch" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340px" height="340px" viewBox="-100 -100 540 540" version="1.1">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1115.000000, -1556.000000)">
          <g transform="translate(0.000000, 1472.000000)">
            <g transform="translate(1115.000000, 84.000000)">
              <polygon class="p-1" fill="#0B40B6" points="85.00068 0.00034 85.00068 85.00034 0.00068 85.00034 0.00068 170.00034 169.99728 170.00034 169.99728 0.00034" />
              <polygon class="p-2" fill="#231F20" points="169.9983 170.0017 169.9983 339.9983 254.9983 339.9983 254.9983 254.9983 339.9983 254.9983 339.9983 170.0017" />
              <polygon class="p-3" fill="#0FBAEE" points="112.2 227.8 227.8 227.8 227.8 112.2 112.2 112.2"/>
            </g>
          </g>
        </g>
      </g>
    </svg>

    <svg class="is-hidden-desktop" width="340px" height="340px" viewBox="0 0 340 340" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
      <title>Page 1</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="home——ios" transform="translate(-205.000000, -2854.000000)">
          <g id="Group-5-Copy-3" transform="translate(0.000000, 2722.000000)">
            <g id="Page-1" transform="translate(205.000000, 132.000000)">
              <polygon id="Fill-1" fill="#0B40B6" points="85.00068 0.00034 85.00068 85.00034 0.00068 85.00034 0.00068 170.00034 169.99728 170.00034 169.99728 0.00034"></polygon>
              <polygon id="Fill-2" fill="#231F20" points="169.9983 170.0017 169.9983 339.9983 254.9983 339.9983 254.9983 254.9983 339.9983 254.9983 339.9983 170.0017"></polygon>
              <polygon id="Fill-3" fill="#0FBAEE" points="112.2 227.8 227.8 227.8 227.8 112.2 112.2 112.2"></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>

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

  @include desktop {
    .p-1, .p-2, p-3 {
      transition: transform .6s ease-in-out;
    }

    svg:hover {
      .p-1 {
        transform: translate(-60px, -60px);
      }
      .p-2 {
        transform: translate(60px, 60px);
      }
    }
  }

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
