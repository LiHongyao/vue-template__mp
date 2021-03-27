<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-03-07 23:13:57
 * @LastEditTime: 2021-03-27 18:45:27
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /vue-mp-template/src/components/@lgs/TabBar/TabBar.vue
  
-->
<template>
  <div class="tab-bar">
    <template v-for="(item, index) in paths" :key="index">
      <router-link replace class="tab-bar-item" :to="item.path">
        <img
          :src="item.path === $route.path ? item.selectedIconPath : item.iconPath"
          class="icon"
          alt="{{item.text}}"
        />
        <span class="text">{{ item.text }}</span>
      </router-link>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    // state
    const paths = reactive([
      {
        path: "/index",
        text: "首页",
        iconPath: "https://img.meituan.net/csc/0f897134d59b38167a74f4d19d7bb84b2258.png",
        selectedIconPath: "https://img.meituan.net/csc/f38601a56aaa518c4f46062f51d442811692.png",
      },
      {
        path: "/welfare",
        text: "日常福利",
        iconPath: "https://img.meituan.net/csc/e19a6fc85fd1918fd942c243691dd45f1661.png",
        selectedIconPath: "https://img.meituan.net/csc/203adb3148eee0c7c557d34fb59a04381537.png",
      },
      {
        path: "/merchants",
        text: "附近商户",
        iconPath: "https://img.meituan.net/csc/57af3bd791db9a2d6d4d5412398392e71978.png",
        selectedIconPath: "https://img.meituan.net/csc/17e491342e35239696977cd3927ba4f91546.png",
      },
      {
        path: "/shopping",
        text: "购物赚豆",
        iconPath: "https://img.meituan.net/csc/234b52061b8da9413dcba2e305cb14191863.png",
        selectedIconPath: "https://img.meituan.net/csc/4d9d6bf1fe8321dbba10dcce22815b3b1752.png",
      },
      {
        path: "/mine",
        text: "我的",
        iconPath: "https://img.meituan.net/csc/807f244e14c69098f4c7c5a8f2ec22452029.png",
        selectedIconPath: "https://img.meituan.net/csc/d8b3d210ecd7a05642586c79e50790c31549.png",
      },
    ]);

    return {
      paths,
    };
  },
});
</script>

<style lang="less" scoped>
.tab-bar {
  width: 100%;
  background-color: #ffffff;
  border-top: 1px solid #eeeeee;
  height: 50px;
  display: flex;
}

.tab-bar-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: #b5b5b5;
  &.router-link-active {
    color: #ff7e26;
    text-decoration: none;
  }
}
.icon {
  width: 22px;
  height: 22px;
}
.text {
  margin-top: 1px;
  font-size: 10px;
  line-height: 14px;
}
</style>
