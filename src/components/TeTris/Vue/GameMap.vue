<script setup lang="ts">
  import { defineProps } from '@vue/runtime-core'
import { figure } from '@/components/Tetris/Vue/index.ts'
  const isMove = ref(false)
  let interval = null
  const props = defineProps({
    moveFigureIndex: Number
  })
  // 行 
  const MAPLINE: number = 20
  // 列
  const MAPCOLUMN: number = 10
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

  // 图形自由落体
  const moveFigure = figure[props.moveFigureIndex]
  const renderMoveFigure = (direction?: String) => {
    if (direction) {
      let flag = true
      for (let [index, item] of moveFigure.entries()) {
        if (props.moveFigureIndex === 0) {
          if (item.line + 1 > 19 || allCellDataReactive[item.line + 1].children[item.column].switch) {
            flag = false
            break
          }
        } else if (props.moveFigureIndex === 1 || props.moveFigureIndex === 2) {
          if (index > 0 && (item.line + 1 > 19 || allCellDataReactive[item.line + 1].children[item.column].switch)) {
            flag = false
            break
          }
        } else if (props.moveFigureIndex === 3 || props.moveFigureIndex === 4) {

        } else if (props.moveFigureIndex === 5) {

        } else {

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
        isMove.value = false
        clearInterval(interval)
        interval = null
        return
      }
      
    }
    for (let item of moveFigure) {
      allCellDataReactive[item.line].children[item.column].switch = true
    }
  }
  // 自由落体
  if (!isMove.value) {
    isMove.value = true
    renderMoveFigure()
    interval = setInterval(() => {
      renderMoveFigure('down')
    }, 200)
  }

  
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