<script setup lang="ts">
  import BaseInformation from '@/components/Tetris/Vue/BaseInformation.vue'
  import GameMap from '@/components/Tetris/Vue/GameMap.vue'
  
  // const gameInformation = reactive({
  //   Max: 10,
  //   Cleans: 1,
  //   Level: 1,
  //   Next: 1
  // })
  const moveFigureIndex = Math.floor(Math.random() * 7)
  const nextFigureIndex = Math.floor(Math.random() * 7)
</script>

<template>
  <div class="canvas">
    <div class="puzzle">
      <GameMap :moveFigureIndex="1"></GameMap>
      <!-- <BaseInformation :information="gameInformation"/> -->
    </div>
    <div class="action">
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .canvas {
    margin: 20px 10px;
    .puzzle {
      width: 232px;
      display: flex;
      justify-content: space-between;
      margin: auto;
    }
    
  }
</style>
