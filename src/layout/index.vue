<script setup lang="ts">
  import Header from '@/layout/Header.vue'
  import Footer from '@/layout/Footer.vue'
</script>

<template>
  <div class="layout">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
  .layout {
    
  }
</style>
