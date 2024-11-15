import { createMemoryHistory, createRouter } from 'vue-router'

import Register from './components/RegisterForm.vue'
import Login from './components/LoginForm.vue'
import Posts from './components/PostsPage.vue'

const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/posts', component: Posts }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
