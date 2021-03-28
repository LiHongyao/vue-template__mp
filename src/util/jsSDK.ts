/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-28 08:19:21
 * @LastEditTime: 2021-03-28 08:31:09
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /vue-mp-template/src/util/jsSdk.ts
 */

import Validator from "lg-validator";
import wx from "weixin-js-sdk";

/**
 * 接入jsSDK步骤
 *
 * 第1步：绑定域名
 *
 * 第2步：获取access_token：
 * 34_Iv6Da4QM7b8QFNJSjPvyf3UME1ULEGMziLcR8-QmNfJhaP2z0dI5UZH9yhHoRcQ4PLwiS0bUpAPO2KJn5dsar74kOsoOEySJLomsBxkVtbWeQFkSiEnQ54lwzcequ3h8WFuC1U0n59loaNgpSGHgADABPQ
 * GET => https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx169565989539bf7d&secret=5732e4c98058b1edb4b6ab1adb7ff9f7
 *
 * 第3步：获取jsapi_ticket
 * kgt8ON7yVITDhtdwci0qeYykO5G-PDFUEbewcOIJ2jTd07fcF86647jPuisphrUDGPywBxzZmIBoLzrKLZBySg
 * GET => https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=?&type=jsapi
 *
 * 第4步：签名算法
 * jsapi_ticket：
 * nonceStr：'Wm3WZYTPz0wzccnW'
 * timestamp：
 * url：
 * jsapi_ticket=kgt8ON7yVITDhtdwci0qeYykO5G-PDFUEbewcOIJ2jTd07fcF86647jPuisphrUDGPywBxzZmIBoLzrKLZBySg&nonceStr=Wm3WZYTPz0wzccnW&timestamp=1591503158298&url=http://192.168.101.11:8080/index
 */

/**
 * 初始化JSSDK
 */
type ConfigsType = {
  appId: string;
  timestamp: number;
  nonceStr: string;
  signature: string;
};
class jsSDK {
  public static init(jsApiList: string[]) {
    return new Promise((resolve, reject) => {
      let url = window.location.href;
      if (Validator.ios()) {
        url = "";
      }
      // 调用后台Api获取请求配置数据
      const response: ConfigsType = {} as ConfigsType;
      const { appId, timestamp, nonceStr, signature } = response;
      wx.config({
        // debug: process.env.NODE_ENV === 'development',
        appId,
        timestamp,
        nonceStr,
        signature,
        jsApiList,
      });
      wx.ready(() => {
        resolve(null);
      });
      wx.error((err: any) => {
        reject(err);
      });
    });
  }
}

export default jsSDK;
