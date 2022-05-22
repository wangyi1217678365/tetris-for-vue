<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import SettingVue from './Setting.vue'
  import NavVue from './Nav.vue'
  import store from '@/store/index'
  const router = useRouter()
</script>

<template>
  <div class="header">
    <van-nav-bar 
      :title="$t('titleTetris')" 
      :left-text="store.state.message" 
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