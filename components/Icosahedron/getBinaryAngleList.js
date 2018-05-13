function getArea(xzChunk, xyChunk) {
  let area = [];
  let xZAngle = 360 / xzChunk;
  let xYAngle = 180 / xyChunk;

  for (let i = 0; i < xyChunk; i++) {
    for (let j = 0; j < xzChunk; j++) {
      let xz = [xZAngle * j, xZAngle * (j + 1)];
      let xy = [];
      let xyStart = xYAngle * i - 90;
      let xyEnd = xYAngle * (i + 1) - 90;
      if (xyStart >= 0) {
        xy = [xyStart, xyEnd];
      } else {
        xy = [xyEnd, xyStart];
      }
      area[i * xzChunk + j] = [xz, xy];
    }
  }
  return area;
};

function getBinaryAngle(angleRanges) {
  return angleRanges.map((angleRange) => ((angleRange[1] - angleRange[0]) / 2 + angleRange[0]));
}

function getBinaryAngleList(xzChunk, xyChunk) {

  return getArea(xzChunk, xyChunk).map(getBinaryAngle);
}

export default getBinaryAngleList;
