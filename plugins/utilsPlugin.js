import Vue from 'vue';
import config from '~/config';

const { urls } = config;

function getObjValueByKey(obj, key) {
  const arr = key.split('.');
  let tempObj = obj;

  for (let i = 0; i < arr.length; i++) {
    tempObj = tempObj[arr[i]];
    if (!tempObj) {
      return '';
    }
  }
  return tempObj || '';
}

const utilsPlugin = {};
utilsPlugin.install = function (VueContext) {
  // eslint-disable-next-line no-param-reassign
  VueContext.prototype.$link = function (url) {
    // eslint-disable-next-line no-underscore-dangle
    const _url = getObjValueByKey(urls, url);
    if (!_url) return '';
    if (typeof _url === 'string') {
      return _url;
    }
    if (typeof _url === 'object') {
      const lang = this.$i18n.locale;
      const urlI18n = _url[lang];
      if (urlI18n) {
        return urlI18n;
      }
      if (lang !== 'en' && _url.en) {
        return _url.en;
      }
    }
    return '';
  };

  // eslint-disable-next-line no-param-reassign
  VueContext.prototype.$linkHtml = function (url) {
    // eslint-disable-next-line no-underscore-dangle
    const _url = this.$link(url);
    return `<a href="${_url}" target="_blank">${_url}</a>`;
  };
};

export default () => {
  Vue.use(utilsPlugin);
};
