<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { locale  } = useI18n() 
  locale.value = 'en'
</script>

<template>
  <van-icon name="setting" />
</template>

<style scoped lang="scss">

</style>
