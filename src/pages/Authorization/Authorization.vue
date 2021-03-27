<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-03-27 23:10:12
 * @LastEditTime: 2021-03-27 23:52:10
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /vue-mp-template/src/pages/Authorization/Authorization.vue
-->
<template></template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup(props, ctx) {
    const router = useRouter();
    // methods
    const _jump = () => {
      const appid = 'wx169565989539bf7d';
      const redirect_uri = encodeURIComponent(`${window.location.origin}/auth/callback`);
      const state = router.currentRoute.value.query.state as string;
      const authUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=${ state ? encodeURIComponent(state) : ''}#wechat_redirect`;
      window.location.replace(authUrl);
    };
    const _callback = () => {
      const { code, state } = router.currentRoute.value.query as { code: string, state?: string};
      console.log('====================')
      console.log('code：', code);
      console.log('state：', state);
      console.log('====================')
      window.location.replace(state ? state :　'/index');
    };
    // life circle
    onMounted(() => {
      switch (router.currentRoute.value.params.type) {
        case "jump":
          _jump();
          break;
        case "callback":
          _callback();
          break;
      }
    });
  },
});
</script>
