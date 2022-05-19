<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import SettingVue from './Setting.vue'
  import NavVue from './Nav.vue'
  const router = useRouter()
</script>

<template>
  <div class="header">
    <van-nav-bar 
      :title="$t('titleTetris')" 
      :left-text="$t('goBack')" 
      left-arrow
      safe-area-inset-top
      @click-left="router.back()"
    >
      <template #right>
        <SettingVue />
      </template>
    </van-nav-bar>
    <NavVue />
  </div>
</template>