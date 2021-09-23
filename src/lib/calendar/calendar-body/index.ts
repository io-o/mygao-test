/*
 * @Author: Andrew Q
 * @Date: 2021-09-23 14:55:15
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-09-23 17:53:54
 * @Description: body
 */

import { defineComponent, isVue2, isVue3 } from 'vue-demi';

// @ts-ignore
import h from '@/utils/h-demi';

import { useInject } from '../context';
import { getDays } from '../helper';

export default defineComponent({
  name: 'CalendarBody',

  setup: () => {
    const context = useInject();

    const week = (context as any)?.week.map((item: string) => {
      return h(
        'div',
        {
          class: 'week calendar-font',
        },
        item
      );
    });

    const days = () => {
      const handleClick = (i: number) => {
        console.log(i);
      };
      const num = context?.date ? getDays({ ...context?.date }) : getDays();
      let coms = [],
        nowDay = new Date().getDate();

      for (let i = 1; i <= num; i++) {
        coms.push(
          h(
            'div',
            {
              class: 'day calendar-font',
              style: {
                border: nowDay === i ? '2px solid #4e6ef2' : null,
              },
              on: {
                click: () => handleClick(i),
              },
            },
            i
          )
        );
      }

      return coms;
    };

    return () =>
      h(
        'div',
        {
          class: 'calendar-body',
        },
        [
          h(
            'header',
            {
              class: 'calendar-grid',
            },
            week
          ),
          h(
            'div',
            {
              class: 'calendar-grid days',
            },
            days()
          ),
        ]
      );
  },
});
