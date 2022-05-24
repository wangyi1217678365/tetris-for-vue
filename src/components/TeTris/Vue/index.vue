<script setup lang="ts">
  import BaseInformation from '@/components/Tetris/Vue/BaseInformation.vue'
  import GameMap from '@/components/Tetris/Vue/GameMap.vue'
  
 
  const gameMap = ref(null)
  const moveFigureIndex = ref(Math.floor(Math.random() * 7))
  const nextFigureIndex = ref(Math.floor(Math.random() * 7))
  console.log(moveFigureIndex.value, nextFigureIndex.value, '=====');
  
  const handleMoveFinish = async () => {
    console.log(555);
    
    moveFigureIndex.value = nextFigureIndex.value
    nextFigureIndex.value = Math.floor(Math.random() * 7)
    await nextTick()
    gameMap.value.init()
  }

  const gameInformation = reactive({
    Max: 10,
    Cleans: 1,
    Level: 1,
    Next: nextFigureIndex
  })
  onMounted(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a') {
        gameMap.value.init('left')
      } else if (e.key === 'ArrowRight' || e.key === 'd') {
        gameMap.value.init('right')
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
