<script setup lang="ts">
  import { figureList } from '@/components/Tetris/Vue/index.ts'
  /**
   * moveFigureIndex: 当前图形索引
  */
  const props = defineProps({
    moveFigureIndex: Number
  })
  /**
   * handleMoveFinish: 图形运动结束
  */
  const emit = defineEmits(['handleMoveFinish'])
  
  // 地图高 
  const MAPLINE: number = 20
  // 地图宽
  const MAPCOLUMN: number = 10
  // 当前堆放的单元
  const currntSwitch = {}
  // 行数据格式
  interface LineData {
    id: string;
    count: number,
    children: Array<ColumnData>
  }
  // 列数据格式
  interface ColumnData {
    id: string;
    switch: boolean;
  }
  // 遍历出地图单元
  const getAllCellData = (): Array<LineData>  => {
    const allCellData = []
    for (let line: number = 0; line < MAPLINE; line++) {
      const lineData: LineData = {
        id: `line-${line}`,
        count: 0,
        children: []
      }
      for (let column: number = 0; column < MAPCOLUMN; column++) {
        lineData.children && lineData.children.push({
          id: `${lineData.id}-column-${column}`,
          switch: false
        })
      }
      allCellData.push(lineData)
    }
    return allCellData
  }
  // 全部单元
  const allCellDataReactive = reactive(getAllCellData())

  // 移动的图形
  const figure = ref(null)
  // 生成初始图形
  const initFigure = () => {
    figure.value = JSON.parse(JSON.stringify(figureList[props.moveFigureIndex])) 
    for (let item of figure.value) {
      allCellDataReactive[item.line].children[item.column].switch = true
    }
  } 

  // 移动图形
  const moverFigure = async (direction: String) => {
    let flag = true
    for (let item of figure.value) {
      if (direction === 'down' && (item.line + 1 > MAPLINE - 1 || currntSwitch[allCellDataReactive[item.line + 1].children[item.column].id])) {
        flag = false
        break
      }
      if ( 
        (item.column === 0 && direction === 'left') || 
        (item.column === 9 && direction === 'right') || 
        (direction === 'left' && item.column > 0 && currntSwitch[allCellDataReactive[item.line].children[item.column - 1].id]) || 
        (direction === 'right' && item.column < 9 && currntSwitch[allCellDataReactive[item.line].children[item.column + 1].id])
       ) {
        return
      }
    }
  
    if (direction === 'down' && !flag) {
      for (let item of figure.value) {
        currntSwitch[allCellDataReactive[item.line].children[item.column].id] = true
        allCellDataReactive[item.line].count++
      }
      if (interval) {
        clearInterval(interval)
        interval = null
      }
      if (figure.value[0].line === 0) return
      emit('handleMoveFinish')
      await nextTick()
      init()
      return
    } 
    for (let item of figure.value) {
      allCellDataReactive[item.line].children[item.column].switch = false
      direction === 'down' ? item.line++ : direction === 'left' ? item.column-- :  item.column++
    }
    for (let item of figure.value) {
      allCellDataReactive[item.line].children[item.column].switch = true
    }
  }
  // 变形
  const changeFigure = () => {
    switch (props.moveFigureIndex) {
      case 0:
        figure.value
        break;
      case 1:
        console.log(1);
        break;
      case 2:
        console.log(2);
        break;
      case 3:
        console.log(3);
        break;
      case 4:
        console.log(4);
        break;
      case 5:
        console.log(5);
        break;
      case 6:
        console.log(6);
        break;
    }
    
  }

  // 计时器 重复下落动作
  let interval = null
  const init = () => {
    // 初始化图形
    initFigure()
    // 自由落体
    interval = setInterval(() => {
      moverFigure('down')
    }, 1000)
  }
  init()

  defineExpose({
    init,
    moverFigure,
    changeFigure
  })
  
</script>
<template>
  <table class="map">
    <tr v-for="line in allCellDataReactive" :key="line.id">
      <td 
        v-for="column in line.children" 
        :key="column.id"
        :style="{ background: column.switch ? 'red' : 'black' }"
      ></td>
    </tr>
  </table>
</template>
<style lang="less" scoped>
  .map {
    border: 1px solid;
    border-spacing: 2px;
    border-collapse: separate;
    tr {
      td {
        width: 10px;
        height: 10px;
        box-sizing: border-box;
        border: 1px solid #000;
        // background: red;
        background-clip: content-box;
      }
    }
  }
</style>