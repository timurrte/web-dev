import { createMemoryHistory, createRouter } from 'vue-router'

import Register from './components/RegisterForm.vue'
import Login from './components/LoginForm.vue'

const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
