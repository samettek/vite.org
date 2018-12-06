<template>
  <div ref="container">

    <slot>

    </slot>
  </div>
</template>
<script>
import { select, selectAll } from "d3-selection";
import { arc, line } from "d3-shape";
export default {
  mounted() {
    const a = arc();
    const arcInside = a({
      innerRadius: 0,
      outerRadius: 100,
      startAngle: 0,
      endAngle: Math.PI / 2
    });
    const arcMiddle = a({
      innerRadius: 100,
      outerRadius: 150,
      startAngle: 0,
      endAngle: Math.PI / 2
    });
    const arcOuter = a({
      innerRadius: 0,
      outerRadius: 200,
      startAngle: 0,
      endAngle: Math.PI / 2
    });
    this.svg = select(this.$refs.container)
      .append("svg")
      .attr('class','svg-container')
      .append("g");
    this.svg
      .append("g")
      .append("d")
      .attr("d", arcInside)
      .attr("class",'arc-inside');
    this.svg
      .append("g")
      .append("d")
      .attr("d", arcMiddle)
      .attr("class",'arc-middle');
    this.svg
      .append("g")
      .append("d")
      .attr("d", arcOuter)
      .attr("class","arc-outer")
  },
  methods: {
    addLine({start,end}) {
        this.svg.append('g').append('d',).attr('class','point-line').
    },
    addTag() {}
  }
};
</script>
<style lang="scss" scoped>
.svg-container{
    .arc-inside{
        fill:rgba(237,246,255,1);
    }
    .arc-middle{
        fill:rgba(248,251,255,1);
    }
    .arc-outer{
        stroke-dasharray: "5,5";
        stroke-width: 1px;
        stroke-linecap: round;
        stroke:rgba(0,122,255,1);
    }
    .point-line{
        stroke-width: 1px;
        stroke-linecap: square;
        stroke:rgba(0,122,255,1);
    }
}
</style>
