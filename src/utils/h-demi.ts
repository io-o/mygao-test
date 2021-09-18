/*
 * @Author: Andrew Q
 * @Date: 2021-09-18 14:55:22
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-09-18 14:55:23
 * @Description: 重写h函数
 */

import { h as hDemi, isVue2 } from 'vue-demi';

interface Options {
  props?: Object;
  domProps?: Object;
  on?: Object;
}

const adaptOnsV3 = (ons: Object) => {
  if (!ons) return null;
  return Object.entries(ons).reduce((ret, [key, handler]) => {
    // eslint-disable-next-line no-param-reassign
    key = key.charAt(0).toUpperCase() + key.slice(1);
    // eslint-disable-next-line no-param-reassign
    key = `on${key}`;
    return { ...ret, [key]: handler };
  }, {});
};

const h = (
  type: String | Object,
  options: Options & any = {},
  chidren?: any
) => {
  if (isVue2) return hDemi(type, options, chidren);

  const { props, domProps, on, ...extraOptions } = options;

  const ons = adaptOnsV3(on);
  const params = { ...extraOptions, ...props, ...domProps, ...ons };
  return hDemi(type, params, chidren);
};

export default h;
