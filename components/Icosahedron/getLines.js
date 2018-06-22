function getLines(points, xzChunk, xyChunk) {
  let lines = [];

  for (let i = 0; i < xyChunk; i++) {
    for (let j = 0; j < xzChunk - 1; j++) {
      lines.push([points[j + i * xzChunk], points[j + 1 + i * xzChunk]]);
    }

    lines.push([points[i * xzChunk], points[i * xzChunk + xzChunk - 1]]);
  }

  for (let i = 0; i < xzChunk; i++) {
    for (let j = 0; j < xyChunk - 1; j++) {
      let startPointIndex = j * xzChunk + i;
      let endPointIndex = (j + 1) * xzChunk + i;

      lines.push([points[startPointIndex], points[endPointIndex]]);
    }
  }

  return lines;
}


export default getLines;
