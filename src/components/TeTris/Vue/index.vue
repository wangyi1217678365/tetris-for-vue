<script setup lang="ts">
  import BaseInformation from './BaseInformation.vue'
  import GameMap from './GameMap.vue'

  const randomIndex = ref(Math.floor(Math.random() * 7))
  const nextRandomIndex = Math.floor(Math.random() * 7)
  const gameInformation = reactive({
    Max: 10,
    Cleans: 1,
    Level: 1,
    Next: 1
  })
  // const map = 
</script>

<template>
  <div class="vue">
    <div class="puzzle">
      <GameMap :randomIndex="randomIndex"></GameMap>
      <BaseInformation :information="gameInformation" />
    </div>
    <div class="action">
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .vue {
    margin: 20px 10px;
    .puzzle {
      width: 232px;
      display: flex;
      justify-content: space-between;
      margin: auto;
    }
    
  }
</style>
