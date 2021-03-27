<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-03-07 23:03:52
 * @LastEditTime: 2021-03-08 20:36:55
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /vue-mp-template/src/views/Merchants/Merchants.vue
-->
<template>
  <div class="tab-page welfare">
    <NoData tips="没有更多商家~" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NoData from '@/components/@lgs/NoData/NoData.vue';
export default defineComponent({
  setup() {
    
  },
  components: {
    NoData
  }
})
</script>
