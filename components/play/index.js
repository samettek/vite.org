import Player from './play'
import Vue from 'vue'
export default () => {
  const instance = new Vue(Object.assign(Player, {
    el: document.createElement('div')

  }))
  instance.src = 'https:/fsafas'
  instance.closeMe = () => { document.body.removeChild(instance.$el) }
  document.body.appendChild(instance.$el)
}
