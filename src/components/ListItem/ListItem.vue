<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-03-17 10:33:45
 * @LastEditTime: 2021-03-25 13:14:52
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: \Technician\src\components\ListItem\ListItem.vue
-->

<template>
  <div class="list-item" @click="$emit('tap')">
    <!-- 头像 -->
    <div class="avatar"></div>
    <!-- 右侧信息 -->
    <div class="infos flex-1">
      <!-- 信息 -->
      <div class="wrapper">
        <div class="flex-1">
          <div class="item-row">
            <justify-text :text="'宠物品种'"/>
            <span class="value">泰迪</span>
            <!-- 状态 -->
            <img
              v-if="status === 1"
              class="status-img"
              src="https://img.meituan.net/csc/646569d8e46b4fc3db02a99a8adbfe741175.png"
              alt="已到店"
            />
            <img
              v-if="status === 2"
              class="status-img"
              src="https://img.meituan.net/csc/ac9db69ea866bee56411ccccbd3578d31350.png"
              alt="已完成"
            />
            <img
              v-if="status === 3"
              class="status-img"
              src="https://img.meituan.net/csc/8466d6e5e89a50b5d45cb75145a5d76f1222.png"
              alt="未到店"
            />
          </div>
          <div class="item-row">
            <justify-text :text="'套餐'"/>
            <span class="value">洗护套餐A1当时的对</span>
          </div>
          <div class="item-row">
            <justify-text :text="'增项服务'"/>
            <span class="value">洁牙</span>
          </div>
        </div>
        <img
          v-if="status === 1"
          class="action-button"
          src="https://img.meituan.net/csc/7ea57e96eda8e2203d0a1434ae1bb3ba2236.png"
          alt="开始服务"
          @click.stop="$emit('startService')"
        />
        <img
          v-else
          class="action-button"
          src="https://img.meituan.net/csc/b016762c02322c725ccb9cbc9ccb35a11660.png"
          alt="完成"
          @click.stop="$emit('complete')"
        />
      </div>
      <!-- 时间 -->
      <div class="date">
        <div class="date-item">
          <img
            class="icon-10x10"
            src="https://img.meituan.net/csc/35a6bd513af78b5b39b5eb58c3185e3d982.png"
            alt=""
          />
          <span class="date-str">2021.3.15 12:30</span>
        </div>
        <div class="date-item">
          <img
            class="icon-10x10"
            src="https://img.meituan.net/csc/96a91aab0a81c8f733c831be60410030749.png"
            alt=""
          />
          <span class="date-str">2021.3.15 12:30</span>
        </div>
        <div class="date-item">
          <img
            class="icon-10x10"
            src="https://img.meituan.net/csc/78224fc4df396301a7bc7314ecba0f70542.png"
            alt=""
          />
          <span class="date-str">2021.3.15 12:30</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JustifyText from "../@lgs/JustifyText/JustifyText.vue";

export default defineComponent({
  name: "list-item",
  props: {
    status: Number
  }, 
  setup() {
    // events
   
    
  },
  components: {
    JustifyText,
  },
});
</script>


<style lang="less" scoped>
.list-item {
  background-color: #fff;
  padding: 23px 10px;
  margin-bottom: 5px;
  display: flex;
}
.avatar {
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background-color: pink;
  flex-shrink: 0;
  margin-right: 10px;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-row {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}
.status-img {
  width: 38px;
  height: 16px;
  margin-left: 10px;
}
.action-button {
  width: 65px;
  height: 22px;
}


.value::before {
  content: "：";
}

.date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;

  font-size: 9px;
  font-weight: 500;
  line-height: 13px;
  color: #999999;
  .date-str {
    margin-left: 6px;
  }
}
</style>
