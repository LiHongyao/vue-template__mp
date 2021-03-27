/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-26 22:43:41
 * @LastEditTime: 2021-03-27 23:06:11
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /vue-mp-template/src/main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store';
import vant from 'vant';
import "./util/rem";
import "vant/lib/index.css";
import "./index.less";

// App配置/挂载相关
// 1. 创建App
const app = createApp(App);
// 2. 注入
app.use(router).use(store).use(vant);
// 3. 配置全局属性 -- 访问：在setup函数中通过ctx访问 eg-ctx.$sayHi
app.config.globalProperties.$sayHi = () => {
  console.log("hi");
};
// 4. 挂载
app.mount("#app");
