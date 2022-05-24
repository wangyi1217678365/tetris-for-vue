<script setup lang="ts">
  import { figure } from '@/components/Tetris/Vue/index.ts'
  let interval = null
  const props = defineProps({
    moveFigureIndex: Number
  })
  const emit = defineEmits(['handleMoveFinish'])
  
  // 行 
  const MAPLINE: number = 20
  // 列
  const MAPCOLUMN: number = 10
  // 当前堆放的块
  const currntSwitch = {}
  // 单元行数据格式
  interface LineData {
    id: string;
    count: number,
    children: Array<ColumnData>
  }
  // 单元列数据格式
  interface ColumnData {
    id: string;
    switch: boolean;
  }
  // 遍历出所有单元
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

  
  const renderMoveFigure = (moveFigure, direction?: String) => {
    if (direction) {
      let flag = true
      for (let item of moveFigure) {
        if (item.line + 1 > 19 || item.column - 1 < 0 || item.column + 1 > 9) {
          flag = false
          break
        } else {
          if (
            currntSwitch[allCellDataReactive[item.line + 1].children[item.column].id] || 
            currntSwitch[allCellDataReactive[item.line].children[item.column--].id] || 
            currntSwitch[allCellDataReactive[item.line].children[item.column++].id]
          ) {
            flag = false
            break
          }
        }
      }
      if (flag) {
        for (let item of moveFigure) {
          allCellDataReactive[item.line].children[item.column].switch = false
        }
        if (direction === 'down') {
          for (let cell of moveFigure) {
            cell.line++
          }
        } else if (direction === 'left') {
          for (let cell of moveFigure) {
            cell.column--
          }
        } else if (direction === 'right') {
          for (let cell of moveFigure) {
            cell.column++
          }
        }
      } else {
        clearInterval(interval)
        interval = null
        if (moveFigure[0].line === 0) return
        for (let item of moveFigure) {
          currntSwitch[allCellDataReactive[item.line].children[item.column].id] = true
        }
        emit('handleMoveFinish')
        return
      }
      
    }
    for (let item of moveFigure) {
      allCellDataReactive[item.line].children[item.column].switch = true
    }
  }
  let moveFigure = null
  const init = (direction?: string) => {
    // 图形自由落体
    if (direction) {
      renderMoveFigure(moveFigure, direction)
    }
    else {
      moveFigure = JSON.parse(JSON.stringify(figure[props.moveFigureIndex])) 
      renderMoveFigure(moveFigure)
      interval = setInterval(() => {
        renderMoveFigure(moveFigure, 'down')
      }, 1000)
    }
  }
  init()

  defineExpose({
    init
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