<script setup lang="ts">
  import { Toast } from 'vant'
  import { useI18n } from 'vue-i18n'
  const { locale  } = useI18n() 
  locale.value = 'en'
  Toast.loading({
    message: '加载中...888888',
    forbidClick: true,
  });
  
</script>

<template>
  <div class="header">
    <van-button type="primary">主要按钮</van-button>
    <!-- <div></div>
    <div></div>
    <div></div>
    {{ $t('message.hello') }} -->
  </div>
</template>

<style scoped lang="scss">
  .header {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
