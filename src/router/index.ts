/*
 * @Author: Li-HONGYAO
 * @Date: 2021-03-26 23:20:41
 * @LastEditTime: 2021-03-27 23:13:50
 * @LastEditors: Li-HONGYAO
 * @Description:
 * @FilePath: /vue-mp-template/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/auth/:type/:state?",
    name: "Authorization",
    component: () => import("pages/Authorization/Authorization.vue"),
  },
  {
    path: "/index",
    name: "index",
    component: () => import("pages/Index/Index.vue"),
    meta: {
      showTabBar: true,
      title: "首页",
    },
  },
  {
    path: "/welfare",
    name: "welfare",
    component: () => import("pages/Welfare/Welfare.vue"),
    meta: {
      showTabBar: true,
      title: "日常福利",
    },
  },
  {
    path: "/merchants",
    name: "merchants",
    component: () => import("pages/Merchants/Merchants.vue"),
    meta: {
      showTabBar: true,
      title: "附近商家",
    },
  },
  {
    path: "/shopping",
    name: "shopping",
    component: () => import("pages/Shopping/Shopping.vue"),
    meta: {
      showTabBar: true,
      title: "购物赚豆",
    },
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("pages/Mine/Mine.vue"),
    meta: {
      showTabBar: true,
      title: "我的",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path !== "/favicon.icon") {
    document.title = to.meta.title ? (to.meta.title as string) : "";
    next();
  }
});

export default router;
