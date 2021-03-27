<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-03-26 22:43:41
 * @LastEditTime: 2021-03-27 18:16:53
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /vue-mp-template/src/App.vue
-->
<template>
  <!-- 微信环境 -->
  <template v-if="isWeixin">
    <router-view />
    <tab-bar v-if="$route.meta.showTabBar" />
  </template>
  <!-- 浏览器环境 -->
  <template v-else>
    <not-weixin />
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Validator from "lg-validator";
import NotWeixin from "comps/@lgs/NotWeixin/NotWeixin.vue";
import TabBar from "comps/@lgs/TabBar/TabBar.vue";
export default defineComponent({
  name: "App",
  components: {
    NotWeixin,
    TabBar,
  },
  setup() {
    const isWeixin = ref(Validator.weixin());
    return {
      isWeixin,
    };
  },
});
</script>

<style>
</style>