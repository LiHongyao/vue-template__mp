/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-26 22:43:41
 * @LastEditTime: 2021-03-27 11:19:50
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /Technician/vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("./src"),
      comps: resolve("./src/components"),
      pages: resolve("./src/pages")
    },
  },
  // 配置Dep优化行为
  // optimizeDeps: {
  //   include: ["lodash"],
  // },
  plugins: [vue()],
});
