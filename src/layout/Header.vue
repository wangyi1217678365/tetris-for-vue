<script setup lang="ts">
  import AsideVue from './Aside.vue'
  import SettingVue from './Setting.vue'
</script>

<template>
  <div class="header">
    <AsideVue />
    <h1>俄罗斯方块</h1>
    <SettingVue />
  </div>
</template>

<style scoped lang="scss">
  .header {
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 25px;
    color: #fff;
    background: blue;
    h1 {
      max-width: calc(100% - 150px);
      font-size: 44px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .van-icon {
      font-size: 50px;

    }
  }
</style>
