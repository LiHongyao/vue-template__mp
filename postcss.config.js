/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-27 09:52:07
 * @LastEditTime: 2021-03-27 10:10:23
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /Technician/postcss.config.js
 */

module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
      ],
    },
    "postcss-pxtorem": {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ["*"],
      selectorBlackList: [".norem"], // 过滤掉.norem-开头的class，不进行rem转换
    },
  },
};
