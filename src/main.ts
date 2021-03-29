/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-26 22:43:41
 * @LastEditTime: 2021-03-29 17:43:46
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: \vue-template__mp\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store';
import vant from 'vant';
import setRem from "./util/rem";
import "vant/lib/index.css";
import "./index.less";

// 移动端适配
setRem();

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
