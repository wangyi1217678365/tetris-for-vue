<script setup lang="ts">
  import Layout from '@/layout/index.vue'
</script>

<template>
  <div class="app">
    <Layout />
  </div>
</template>

<style>
@media screen and (min-width: 751px) {
  #app {
    width: 750px;
    height: 100vh;
    margin: 0 auto;
  }
}
@media screen and (max-width: 750px) {
  #app {
    max-width: 100vw;
    height: 100vh;
  }
}
</style>
