<template>
  <div class="test">
    <canvas ref="dag" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
  import drawLine from '~/utils/drawLine.js'
  import Dag from '~/utils/dag.js'

  function randomNum (minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10)
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      default:
        return 0
    }
  }

  const maxChain = 4

  export default {
    name: 'dag',
    props: {
      width: {
        type: Number,
        default: 1400
      },
      height: {
        type: Number,
        default: 600
      },
      maxNode: {
        type: Number,
        default: 50
      }
    },
    data () {
      return {
        chains: [],
        links: []
      }
    },
    mounted () {
      let canvas = this.$refs.dag
      if (!canvas.getContext) return
      let ctx = canvas.getContext('2d')
      this._ctx = ctx
      let cssText = 'width: ' + this.width + 'px; height: ' + this.height + 'px;'
      this.canvas = canvas
      canvas.setAttribute('style', cssText)
      canvas.width = (this.width * 2).toString()
      canvas.height = (this.height * 2).toString()
      this.start()
    },
    methods: {
      renderRound (x, y, r = 15, color = 'rgba(104,149,253)') {
        let ctx = this._ctx
        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2 * Math.PI)
        ctx.fillStyle = color
        ctx.fill()
        ctx.closePath()
      },
      renderLine (start, end) {
        let ctx = this._ctx
        ctx.beginPath()
        ctx.globalCompositeOperation = 'xor'
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.strokeStyle = 'rgba(215,228,229)'
        ctx.stroke()
        ctx.closePath()
      },
      addNode ({x, y}) {
        this.renderRound(x, y, 9 * 2, 'rgba(190,211,251)')
        this.renderRound(x, y, 3 * 2)
      },
      lineNode (node1, node2) {
        return drawLine({
          canvas: this.$refs.dag,
          from: node1,
          to: node2,
          time: 200,
          props: {
            strokeStyle: `rgba(215,228,229)`,
            strokeWidth: 1,
            lineWidth: 1
          }
        })
      },
      start () {
        let genesis = new Dag({
          x: 60,
          y: 60,
          type: 'genesis',
          index: 0
        })
        this.chains.push({
          chainId: genesis.chainId,
          nodes: [genesis]
        })
        this.initData()
        this.draw()
      },
      findChainIndex (chainId) {
        for (let i = 0; i < this.chains.length; i++) {
          if (this.chains[i].chainId === chainId) {
            return i
          }
        }
        return -1
      },
      addNodeToChain (node) {
        let index = this.findChainIndex(node.chainId)
        if (index > -1) {
          this.chains[index].nodes.push(node)
        } else {
          this.chains.push({
            chainId: node.chainId,
            nodes: [node]
          })
        }
      },
      initData () {
        let leafNodes = this.chains.map(item => {
          return item.nodes[item.nodes.length - 1]
        })
        let nextNodeIndex
        let nextNode
        let reqNode
        let resNode

        if (leafNodes.length === 1) {
          nextNode = leafNodes[0]
          reqNode = nextNode.addNode({
            type: 'req'
          })

          resNode = new Dag({
            source: reqNode,
            type: 'res'
          })
        } else {
          nextNodeIndex = randomNum(0, leafNodes.length - 1)
          nextNode = leafNodes[nextNodeIndex]
          reqNode = nextNode.addNode({
            type: 'req'
          })

          let randomIndex
          if (this.chains.length < maxChain) {
            randomIndex = randomNum(0, (leafNodes.length - 1) * 20)
          } else {
            leafNodes = leafNodes.sort((a, b) => {
              let index1 = this.findChainIndex(a.chainId)
              let index2 = this.findChainIndex(b.chainId)
              return this.chains[index1].nodes.length > this.chains[index2].nodes.length
            })
            randomIndex = randomNum(0, 1)
          }

          if (randomIndex > leafNodes.length - 1) {
            // Create new chain
            resNode = new Dag({
              source: reqNode,
              type: 'res',
              index: 0
            })
          } else {
            resNode = new Dag({
              source: reqNode,
              prev: leafNodes[randomIndex],
              type: 'res',
              index: leafNodes[randomIndex].index + 1
            })
          }
        }

        reqNode.target = resNode
        this.addNodeToChain(reqNode)
        this.addNodeToChain(resNode)

        if (resNode.id < this.maxNode) {
          this.initData()
        }
      },
      draw (node = this.chains[0].nodes[0]) {
        this.addNode(node)
        if (node.prev) {
          this.lineNode(node.prev, node)
        }

        if (node.next) {
          this.lineNode(node, node.next)
            .then(() => {
              this.draw(node.next)
            })
        }

        if (node.target) {
          this.addNode(node.target)
          this.lineNode(node, node.target)
            .then(() => {
              this.draw(node.target)
            })
        }

        if (node.source) {
          this.lineNode(node.source, node)
        }
      }
    }
  }
</script>

<style scoped>

  .test {
    margin-top: 130px;
  }
</style>
