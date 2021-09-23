/*
 * @Author: Andrew Q
 * @Date: 2021-09-18 14:54:24
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-09-23 17:24:06
 * @Description: 日历插件
 */

import { defineComponent, isVue2, isVue3 } from 'vue-demi';

// @ts-ignore
import h from '@/utils/h-demi';
import { useProvide } from './context';

import CalendarBody from './calendar-body';

// import styleInject from '../../utils/styleInject';
// import styles from './index.less';
import './index.less';
// 插入样式
// styleInject(styles);

export default defineComponent({
  name: 'Calendar',

  props: {
    week: {
      type: Array,
      default: () => ['一', '二', '三', '四', '五', '六', '日'],
    },
    date: {
      type: Object,
    },
  },

  setup: (props) => {
    useProvide(props);

    return () =>
      h(
        'div',
        {
          class: 'calendar',
        },
        [
          h(
            'div',
            {
              class: 'calendar-box',
            },
            [h(CalendarBody), h('h2', {}, 'tets')]
          ),
        ]
      );
  },
});
