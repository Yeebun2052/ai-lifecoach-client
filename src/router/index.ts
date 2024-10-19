// src/router/index.js
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import ChatInterface from '@/components/ChatInterface.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatInterface
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
