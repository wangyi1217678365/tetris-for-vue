<script setup lang="ts">
  import HeaderVue from './Header.vue';
</script>

<template>
  <div class="layout">
    <HeaderVue />
    <router-view />
  </div>
</template>

<style scoped lang="less">
  .layout {
    
  }
</style>
