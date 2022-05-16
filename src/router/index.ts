import { createRouter, createWebHashHistory } from "vue-router"
import Tetris from '@/views/Tetris.vue'

const routes = [
  { path: '/', component: Tetris }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router