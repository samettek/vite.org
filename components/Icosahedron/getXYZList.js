function angleToRadians (angle) {
  return angle * Math.PI / 180;
}

function getXYZList (radius, [angleInXZ, angleInXY]) {
  return [
    radius * Math.cos(angleToRadians(angleInXY)) * Math.cos(angleToRadians(angleInXZ)), // x
    radius * Math.sin(angleToRadians(angleInXY)),                                       // y
    radius * Math.cos(angleToRadians(angleInXY)) * Math.sin(angleToRadians(angleInXZ))  // z
  ];
}

export default getXYZList;
