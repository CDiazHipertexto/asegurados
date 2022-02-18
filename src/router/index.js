import Vue from 'vue'
import VueRouter from 'vue-router'


// Views
import homeOne from '@/views/homeOne/homeOne'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeOne',
    component: homeOne
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
