/*
 * @Author: Andrew Q
 * @Date: 2021-09-18 14:53:53
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-09-18 17:20:32
 * @Description: 打包文件
 */

import Calendar from './calendar';

Calendar.install = (Vue: any) => {
  Vue.component(Calendar.name, Calendar);
};

export { Calendar };
