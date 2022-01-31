import Vue from 'vue'
import VueRouter from 'vue-router'
import Story from '../views/Story.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Story',
    component: Story
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
