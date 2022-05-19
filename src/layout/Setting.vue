<script setup lang="ts">
  import { ref, watch } from "vue";
  import Color from 'color'
  import setCustomTheme from "@setCustomTheme";
  import { useI18n } from 'vue-i18n'
  import { ColorPicker } from "vue3-colorpicker";
  import "vue3-colorpicker/style.css";

  const { locale  } = useI18n() 
  const show = ref(false)
  const checked = ref(false)
  const changeSwitch = (value: Boolean) => {
    locale.value = value ? 'en' : 'zh'
  }

  const pureColor = ref('#512da7')
  const changeColor = (e: any) => {
    pureColor.value = e.target.value
    setCustomTheme({
      Color,
      primaryColor: e.target.value
    });
  }

</script>

<template>
  <div class="setting">
    <van-icon name="setting" @click="show = true" />
    <van-popup v-model:show="show" position="right" teleport="body">
      <van-cell-group>
        <van-cell center :title="$t('languargesText')">
          <template #right-icon>
            <van-switch v-model="checked" @change="changeSwitch" size="5.333vw" />
          </template>
        </van-cell>
        <van-cell center :title="$t('theme')">
          <template #right-icon>
            <input type="color" :value="pureColor" @change="changeColor" />
            <!-- <color-picker v-model:pureColor="pureColor" /> -->
          </template>
        </van-cell>
      </van-cell-group>
    </van-popup>
  </div>
  
</template>

<style lang="less">
  
</style>
