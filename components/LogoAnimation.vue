<template>
  <svg ref="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1024 1024" xml:space="preserve" class="logo" style="enable-background:new 0 0 1024 1024;" >
    <g file="white">
      <path class="p1" fill="white" stroke="currentColor" d="M0,265L285.3 992.6 316.9 193.8 z"></path>
      <path class="p2" fill="white" stroke="currentColor" d="M389.3,180.1L295.3 993.7 1024 30.3 z"></path>
    </g>
  </svg>
</template>

<script type="text/babel">
export default {
  data() {
    return {};
  },
  mounted() {
    const paths = this.$refs.svg.childNodes[0].childNodes;
    paths.forEach((item) => {
      const length = item.getTotalLength();
      console.log(length);
    });
  },
  methods: {
    convertPolyToPath(poly) {
      const svgNS = poly.ownerSVGElement.namespaceURI;
      const path = document.createElementNS(svgNS, 'path');
      const points = poly.getAttribute('points').split(/\s+|,/);
      const x0 = points.shift();
      const y0 = points.shift();
      let pathdata = `M${x0},${y0}L${points.join(' ')}`;
      if (poly.tagName === 'polygon') pathdata += 'z';
      path.setAttribute('id', poly.getAttribute('id'));
      path.setAttribute('fill', poly.getAttribute('fill'));
      path.setAttribute('stroke', poly.getAttribute('stroke'));
      path.setAttribute('d', pathdata);
      poly.parentNode.replaceChild(path, poly);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $first-length: 1906;
  $second-length: 2680;
  $stroke-width: 7;

  svg {
    color: dodgerblue;
  }
  .p1 {
    animation: move1 2s linear forwards;
    stroke-dasharray: $first-length, $first-length;
    stroke-width: $stroke-width;
  }

  .p2 {
    animation: move1 2s linear forwards;
    stroke-dasharray: $second-length, $second-length;
    stroke-width: $stroke-width;
  }

  @keyframes move1 {
    0%{
      stroke-dashoffset: $first-length;
    }
    100%{
      stroke-dashoffset: 0;
    }
  }

  @keyframes move2 {
    0%{
      stroke-dashoffset: $second-length;
    }
    100%{
      stroke-dashoffset: 0;
    }
  }

</style>
