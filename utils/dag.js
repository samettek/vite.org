function random () {
  return Math.floor(Math.random() * 10)
}

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

let _id = 1
let _chainId = 1

function genId () {
  return _id++
}

function genChainId () {
  return _chainId++
}

function randomX (x) {
  return x + 60 * 2 + randomNum(2, 6) * 8
}

export default class Dag {
  constructor ({source, prev, type = 'req', x, y, target, chains}) {
    this.chainId = (prev && prev.chainId) || genChainId()

    if (type === 'req') {
      y = prev.y
      x = randomX(prev.x)
    }

    if (type === 'res') {
      if (prev) {
        y = this.chainId * 60 * 3
        x = randomX(prev.x)
      } else if (source) {
        y = this.chainId * 60 * 3
        x = 60
      }
    }

    if (type === 'genesis') {
      y = this.chainId * 60 * 3
    }

    this.source = source
    this.type = type
    this.next = null
    this.x = x
    this.y = y
    this.target = target
    this.id = genId()
    this.prev = prev
  }

  addNode ({type = 'req'}) {
    this.next = new Dag({
      type,
      prev: this,
      index: this.index + 1
    })
    return this.next
  }
}
