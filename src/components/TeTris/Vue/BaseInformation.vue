<script setup lang="ts">
  interface Information {
    Max: number,
    Cleans: number,
    Level: number,
    Next: number
  }
  const props = defineProps<{
    information: Information
  }>()
  
</script>
<template>
  <div class="information">
    <div>最高分{{props.information.Next}}</div>
  </div>
</template>
<style lang="less" scoped>
  .information {
    width: 98px;
    border: 1px solid #000;
  }
</style>