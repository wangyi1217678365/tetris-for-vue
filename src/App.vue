<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { t, locale  } = useI18n() 
  locale.value = 'en'
</script>

<template>
  <div class="app">
    {{ t('message.hello') }}
  </div>
</template>

<style>
@media screen and (min-width: 751px) {
  #app {
    width: 750px;
    height: 100vh;
    margin: 0 auto;
    background: red;
  }
}
@media screen and (max-width: 750px) {
  #app {
    max-width: 100vw;
    height: 100vh;
    background: red;
  }
}
</style>
