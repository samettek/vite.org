const THREE = require('three');
import getLines from './getLines';

export default  class PointSet {
  constructor({points, xzChunk, xyChunk}) {
    this.points = points;
    this.xzChunk = xzChunk;
    this.xyChunk = xyChunk;

    this.moveOptionsList = this.points.map((point) => {
      const BASE_SPEED = 0.001;
      const SPEED_INTERVAL = 0.01;

      const BASE_RANGE = 1;
      const RANGE_INTERVAL = 1;

      return {
        point,
        range: [Math.random() * RANGE_INTERVAL + BASE_RANGE, Math.random() * RANGE_INTERVAL + BASE_RANGE, Math.random() * RANGE_INTERVAL + BASE_RANGE],

        speed: [Math.random() * SPEED_INTERVAL + BASE_SPEED, Math.random() * SPEED_INTERVAL + BASE_SPEED, Math.random() * SPEED_INTERVAL + BASE_SPEED], //speedX, speedY, speedZ

        direction: [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1] // directionX, directionY, directionZ
      }
    });

  }

  _setPointModelPosition(pointModel, point) {
    pointModel.pointObject.position.x = point[0];
    pointModel.pointObject.position.y = point[1];
    pointModel.pointObject.position.z = point[2];

    pointModel.outterPointObject.position.x = point[0];
    pointModel.outterPointObject.position.y = point[1];
    pointModel.outterPointObject.position.z = point[2];
  }

  getPointModelList() {
    this.pointModelList = [];

    let pointMaterial = new THREE.MeshBasicMaterial({
      color: 0x7cacf6
    });

    let outterPointMaterial = new THREE.MeshBasicMaterial({
      color: 0x7cacf6,
      transparent: true,
      opacity: 0.3
    });

    for (let i = 0; i < this.points.length; i++) {
      let point = this.points[i];

      let scale = Math.random() * 0.15 + 0.05;
      let outterScale = scale * 2.5;

      let pointGeometry = new THREE.SphereGeometry(1, 32, 32, 0,).scale(scale, scale, scale);
      let outterPointGeometry = new THREE.SphereGeometry(1, 32, 32, 0,).scale(outterScale, outterScale, outterScale);


      let pointObject = new THREE.Mesh(pointGeometry, pointMaterial);
      let outterPointObject = new THREE.Mesh(outterPointGeometry, outterPointMaterial);

      let pointModel = {
        point,
        pointObject,
        outterPointObject
      };

      this._setPointModelPosition(pointModel, point)
      this.pointModelList.push(pointModel);
    }

    return this.pointModelList;
  }


  getLineModelList() {
    this.lineModelList = [];

    this.lines = getLines(this.points, this.xzChunk, this.xyChunk);

    for (let i = 0; i < this.lines.length; i++) {
      let geometry = new THREE.Geometry();
      let startPoint = this.lines[i][0];
      let endPoint = this.lines[i][1];

      geometry.vertices.push(
        new THREE.Vector3(...startPoint),
        new THREE.Vector3(...endPoint)
      );


      let linesMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color(0xd8e1ea)
      });

      let lineObject = new THREE.Line(geometry, linesMaterial);
      this.lineModelList.push({
        points: [startPoint, endPoint],
        lineObject
      });
    }
    return this.lineModelList;
  }


  _getMoveOptions(point) {
    for (let i = 0; i < this.moveOptionsList.length; i++) {
      let moveOptions = this.moveOptionsList[i];
      if (moveOptions.point === point) {
        return moveOptions;
      }
    }
  }

  _getPointModel(point) {
    for (let i = 0; i < this.pointModelList.length; i++) {
      let pointModel = this.pointModelList[i];
      if (pointModel.point === point) {
        return pointModel;
      }
    }
  }

  _getLineModelList(point) {
    let lineModelList = [];
    for (let i = 0; i < this.lineModelList.length; i++) {
      let lineModel = this.lineModelList[i];
      if (lineModel.points.indexOf(point) >= 0) {
        lineModelList.push(lineModel);
      }
    }

    return lineModelList;
  }

  moveRandom() {
    for (let i = 0; i < this.points.length; i++) {
      let point = this.points[i];
      let moveOptions = this._getMoveOptions(point);
      let pointModel = this._getPointModel(point);
      let lineModelList = this._getLineModelList(point);

      let moveOnOneDirection = function (position, dimension) {
        let originPosition = moveOptions.point[dimension];
        let nextMoveDistance = moveOptions.speed[dimension];
        let moveRange = moveOptions.range[dimension];
        let moveDirection = moveOptions.direction[dimension];

        let nextPosition;
        if (moveDirection > 0) {
          nextPosition = position + nextMoveDistance;
          if (nextPosition > originPosition + moveRange) {
            // 掉头
            nextPosition = originPosition + moveRange;
            moveOptions.direction[dimension] = -moveDirection;
          }
        } else {
          nextPosition = position - nextMoveDistance;
          if (nextPosition < originPosition - moveRange) {
            // 掉头
            nextPosition = originPosition - moveRange;
            moveOptions.direction[dimension] = -moveDirection;
          }
        }

        return nextPosition;
      }

      let nextPositionX = moveOnOneDirection(pointModel.pointObject.position.x, 0);
      let nextPositionY = moveOnOneDirection(pointModel.pointObject.position.y, 1);
      let nextPositionZ = moveOnOneDirection(pointModel.pointObject.position.z, 2);

      this._setPointModelPosition(pointModel, [nextPositionX, nextPositionY, nextPositionZ]);


      for (let j = 0; j < lineModelList.length; j++) {
        let lineModel = lineModelList[j];
        let index = lineModel.points.indexOf(point);

        let vertice = lineModel.lineObject.geometry.vertices[index];
        vertice.x = nextPositionX;
        vertice.y = nextPositionY;
        vertice.z = nextPositionZ;

        lineModel.lineObject.geometry.verticesNeedUpdate = true;
      }
    }
  }
}
