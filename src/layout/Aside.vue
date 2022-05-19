<script setup lang="ts">
  const show = ref(false)
  const showPopup = () => {
    show.value = true
  }
</script>

<template>
  <div class="aside">
    <van-icon name="wap-nav" @click="showPopup" />
    <van-popup v-model:show="show" position="left">
      <p>77777777777</p>
    </van-popup>
  </div>
</template>

<style scoped lang="less">
  .aside {
    :deep(.van-popup--left) {
      width: 30%;
      height: 100%;
    }
  }
</style>
