import Vue from 'vue';
import Player from './play';

export default ({ src, iframeSrc }) => {
  const instance = new Vue(Object.assign(Player, {
    el: document.createElement('div'),

  }));
  instance.src = src;
  instance.iframeSrc = iframeSrc;
  instance.closeMe = () => { document.body.removeChild(instance.$el); };
  document.body.appendChild(instance.$el);
};
