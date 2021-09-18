/*
 * @Author: Andrew Q
 * @Date: 2021-09-18 14:54:24
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-09-18 17:20:18
 * @Description: 日历
 */

import { defineComponent, isVue2, isVue3 } from 'vue-demi';

// @ts-ignore
import h from '@/utils/h-demi';

console.log('isVue2', isVue2);
console.log('isVue3', isVue3);

export default defineComponent({
  name: 'Test',

  props: {
    msg: {
      type: String,
      default: '',
    },
  },

  setup: (props) => {
    const text = isVue2 ? '您用的vue2' : '您用的vue3';
    return () =>
      h(
        'div',
        {
          class: 'test',
        },
        props.msg + text
      );
  },
});
