<script setup lang="ts">
  import BaseInformation from '@/components/Tetris/Vue/BaseInformation.vue'
  import GameMap from '@/components/Tetris/Vue/GameMap.vue'
  
 
  const gameMap = ref(null)
  const moveFigureIndex = ref(Math.floor(Math.random() * 7))
  const nextFigureIndex = ref(Math.floor(Math.random() * 7))
  
  const handleMoveFinish = async () => {
    moveFigureIndex.value = nextFigureIndex.value
    nextFigureIndex.value = Math.floor(Math.random() * 7)
  }

  const gameInformation = reactive({
    Max: 10,
    Cleans: 1,
    Level: 1,
    Next: nextFigureIndex
  })
  onMounted(() => {
    window.addEventListener('keydown', (e) => {
      const keyDownCode: number = (e as any).keyCode
      if ([37, 65].includes(keyDownCode)) {
        gameMap.value.moverFigure('left')
      } else if ([40, 83].includes(keyDownCode)) {
        gameMap.value.moverFigure('down')
      } else if ([39, 68].includes(keyDownCode)) {
        gameMap.value.moverFigure('right')
      } else if ([38, 87].includes(keyDownCode)) {
        gameMap.value.changeFigure()
      }
    })
  })
  onUnmounted(() => {
    window.removeEventListener('keydown', () => {})
  })
  
  
</script>

<template>
  <div class="canvas">
    <div class="puzzle">
      <GameMap 
        ref="gameMap"
        :moveFigureIndex="moveFigureIndex"
        @handleMoveFinish="handleMoveFinish"
      />
      <BaseInformation :information="gameInformation" />
      
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
