<script setup lang="ts">
  import { ref, watch } from "vue";
  // import { useI18n } from 'vue-i18n'
  // const { locale  } = useI18n() 
  // locale.value = 'en'
  import Color from 'color'
  // "@setCustomTheme" 是 themePreprocessorPlugin 提供的模块，setCustomTheme的参数必须提供Color模块，至于为什么不把 Color 直接依赖进去是有原因的
  import setCustomTheme from "@setCustomTheme";
  
  // 设置任意主题色既可

  const flat = ref(true)
  setTimeout(() => {
    flat.value = false
  }, 2000)
  watch(flat, () => {
    setCustomTheme({
      Color,
      primaryColor: '#3eaf7a'
    });
  })

</script>

<template>
  <van-icon name="setting" />
</template>

<style scoped lang="less">

</style>
