import Player from './play'
import Vue from 'vue'
export default ({src}) => {
  const instance = new Vue(Object.assign(Player, {
    el: document.createElement('div')

  }))
  instance.src = src
  instance.closeMe = () => { document.body.removeChild(instance.$el) }
  document.body.appendChild(instance.$el)
}
