import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
import PlayView from '../views/PlayView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/play',
      name: 'play',
      component: PlayView
    },
    {
      path: '/todo',
      name: 'todos',
      component: TodoView
    }
  ]
})

export default router
