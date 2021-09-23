/*
 * @Author: Andrew Q
 * @Date: 2021-09-23 16:54:55
 * @LastEditors: Andrew Q
 * @LastEditTime: 2021-09-23 17:04:53
 * @Description: 辅助函数
 */

// 获取当前月天数

export function getDays(year?: number, month?: number) {
  if (year && month) return new Date(year, month, 0).getDate();

  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
