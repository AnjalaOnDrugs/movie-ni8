import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import rooms from '../views/rooms.vue'
import shedule from '../views/shedule.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: rooms
  },
  {
    path: '/shedule',
    name: 'shedule',
    component: shedule
  }
]

const router = new VueRouter({
  routes
})

export default router
