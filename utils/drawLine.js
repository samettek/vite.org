export default ({ canvas, from, to, time = 1000, props = {}, number_of_steps = 100 }) => {
  return new Promise ((resolve, reject) => {
    let x_interval = (to.x - from.x) / number_of_steps
    let y_interval = (to.y - from.y) / number_of_steps

    let context = canvas.getContext('2d')
    let line = new Path2D()

    for (let prop in props) {
      context[prop] = props[prop]
    }

    line.moveTo(from.x, from.y)

    let current_x = from.x
    let current_y = from.y

    let step = 0

    let timer = setInterval(() => {
      step++
      current_x += x_interval
      current_y += y_interval

      line.lineTo(current_x, current_y)
      context.stroke(line)
      context.closePath()
      if (step === number_of_steps) {
        clearInterval(timer)
        resolve()
      }
    }, time / number_of_steps)
  })
}
