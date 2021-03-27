<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-03-17 12:08:59
 * @LastEditTime: 2021-03-27 15:28:45
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /Technician/src/components/@lgs/JustifyText/JustifyText.vue
-->

<template>
  <div class="lg-justify-text" :style="{ color: color }">
    <span v-for="(ch, index) in text.split('')" :key="index">{{ ch }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#999",
    },
  },
});
</script>

<style lang="less" scoped>
.lg-justify-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  width: 60px;
}
</style>
