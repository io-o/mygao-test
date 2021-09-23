/*
 * @Author: Andrew Q
 * @Date: 2021-09-23 14:38:56
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-09-23 14:38:58
 * @Description: style注入
 */

export default (css: string) => {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);
};
