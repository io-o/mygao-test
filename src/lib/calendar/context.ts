/*
 * @Author: Andrew Q
 * @Date: 2021-09-23 15:37:45
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-09-23 15:52:46
 * @Description: 依赖注入
 */

import { provide, inject } from 'vue-demi';

import { CalendarProps } from './type';

const symbol = Symbol();

export const useProvide = (data:CalendarProps) => {
  provide(symbol, data)
}


export const useInject = () => {
  const context = inject<CalendarProps>(symbol);

  if (!context) {
    throw new Error('`useInject must be used after useProvide');
  }

  return context;
}