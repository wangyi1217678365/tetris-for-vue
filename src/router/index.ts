import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { 
    path: '/', 
    name: 'Tetris',
    component: () => import('@/views/Tetris.vue') 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router