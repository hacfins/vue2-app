import ajax from '@/common/ajax'
/**
 * 获取信息
 */
export const getInfo = data => ajax('/ajax/echo/text?name=uni-app', data, 'GET');

