// eslint-disable-next-line no-unused-vars
export default function (to, from) {
  const position = {};

  if (to.hash) {
    position.selector = to.hash;
    if (document.querySelector(to.hash)) {
      return position;
    }
    return {
      x: 0,
      y: 0,
    };
  }

  return new Promise((resolve) => {
    position.x = 0;
    position.y = 0;
    resolve(position);
  });
}
