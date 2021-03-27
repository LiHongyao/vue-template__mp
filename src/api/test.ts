/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-27 22:53:33
 * @LastEditTime: 2021-03-27 22:57:43
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /vue-mp-template/src/api/test.ts
 */

import request from "@/util/request";

export function getRequest<T>(params: any) {
  return request.get<T>("http://xxx", {
    params,
  });
}

export function postRequest<T>(data: any) {
  return request.get<T>("http://xxx", {
    data,
  });
}
