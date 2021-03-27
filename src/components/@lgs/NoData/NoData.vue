<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-01-09 17:21:51
 * @LastEditTime: 2021-03-08 20:37:56
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /vue-mp-template/src/components/@lgs/NoData/NoData.vue
-->
<template>
	<div class="no-data">
		<img src="./images/no-data__1.png" alt="">
		<p v-if="tips" class="tips">{{tips}}</p>
	</div>
</template>


<script lang="ts">
import { defineComponent, Slots, PropType } from 'vue'

interface IData {
  [key: string]: unknown;
}
interface IProps {
  tips?: string;
}
interface IContext {
  attrs: IData;
  slots: Slots;
  emit: (event: string, ...args: unknown[]) => void;
}
export default defineComponent({
	props: {
		tips: {
			type: String
		}
	},
	setup(props: IProps, context: IContext): IData {
		return {
			
		}
	},
})
</script>


<style scoped="scoped" lang="less">
	.no-data {
		text-align: center;
		padding-top: 50px;
		img {
			width: 151.66px;
		}
		.tips {
			font-size: 16px;
			text-align: center;
			color: #C9C9C9;
		}
	}
</style>
