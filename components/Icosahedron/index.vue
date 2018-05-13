<template>
  <canvas ref="webglCanvas" class="webgl-canvas"></canvas>
</template>

<script>
  import getBinaryAngleList from './getBinaryAngleList';
  import getXYZList from './getXYZList';
  import PointSet from './PointSet';

  const THREE = require('three');

  const RADIUS = 14; // 半径为10

  const SPHERE_RADIUS = RADIUS + 2; // 球体半径为12

  const XZ_CHUNK = 8; // 球体水平面上切分为几块
  const XY_CHUNK = 6; // 球体垂直面上切分为几块


  export default {
    mounted () {
      // 获取二元角度列表
      let binaryAngleList = getBinaryAngleList(XZ_CHUNK, XY_CHUNK);

      // 获取球体上的离散点坐标集合
      let points = binaryAngleList.map((binaryAngle) => getXYZList(SPHERE_RADIUS, binaryAngle));

      // 新建PointSet对象
      let pointSet = new PointSet({
        points,
        xzChunk: XZ_CHUNK,
        xyChunk: XY_CHUNK
      });

      let webglCanvasDOM = this.$refs.webglCanvas;

      // 初始化scene
      let scene = new THREE.Scene();

      // 初始化渲染对象组
      let objects = new THREE.Object3D();

      // 渲染的点模型列表
      let pointModelList = pointSet.getPointModelList();
      pointModelList.forEach((pointModel) => {
        objects.add(pointModel.pointObject, pointModel.outterPointObject);
      });

      // 渲染的线模型列表
      let lineModelList = pointSet.getLineModelList();
      lineModelList.forEach((lineModel) => {
        objects.add(lineModel.lineObject);
      });

      // 渲染的二十面体geometry
      let icosahedronGeometry = new THREE.IcosahedronGeometry(RADIUS);

      objects.add(
        new THREE.Mesh(
          icosahedronGeometry,
          new THREE.MeshPhongMaterial({
            color: 0x101010,
            emissive: 0xdfe4ea,
            side: THREE.DoubleSide,
            flatShading: true,
            transparent: true,
            opacity: 0.7
          })
        ),
        new THREE.LineSegments(
          icosahedronGeometry,
          new THREE.LineBasicMaterial( {
            color: 0xD8D8D8
          })
        )
      );

      // 灯光效果
      let lights = [
        new THREE.PointLight( 0xffffff, 1, 0 ),
        new THREE.PointLight( 0xffffff, 1, 0 ),
        new THREE.PointLight( 0xffffff, 1, 0 )
      ];

      lights[ 0 ].position.set( 0, 200, 0 );
      lights[ 1 ].position.set( 100, 200, 100 );
      lights[ 2 ].position.set( - 100, - 200, - 100 );

      scene.add(objects, ...lights);

      // 初始化camera
      let camera = new THREE.PerspectiveCamera(75, webglCanvasDOM.clientWidth / webglCanvasDOM.clientHeight, 0.1, 50);
      camera.position.z = 30;

      // 初始化renderer
      let renderer = new THREE.WebGLRenderer({
        canvas: webglCanvasDOM,
        antialias: true // 去掉锯齿
      });

      renderer.setSize(webglCanvasDOM.clientWidth, webglCanvasDOM.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(new THREE.Color(0xffffff))

      // 初始化render函数，通过requestAnimationFrame形成动画
      let render = function () {
        requestAnimationFrame( render );

        renderer.render(scene, camera);

        objects.rotation.x += 0.005;
        objects.rotation.y += 0.005;
        objects.rotation.z += 0.005;

        // pointSet.moveRandom();
      };

      render();
    }

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "assets/vars.scss";

  .webgl-canvas {
    width: 50%;
    height: 70vh;
    position: absolute;
    top: 60px;
    right: 0;
    z-index: -1;
    @include mobile {
      position: absolute;
      bottom: 60px;
      top: auto;
      height: 50vh;
      width: 100%;
    }
  }
</style>
