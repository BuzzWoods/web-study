import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vue',
    name: 'vue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vue/index.vue'),
    children: [
      {
        path: 'customInstruction',
        name: 'CustomInstruction',
        component: () => import('../views/vue/CustomInstruction.vue')
      },
      {
        path: 'componentBindNativeEvent',
        name: 'ComponentBindNativeEvent',
        component: () => import('../views/vue/ComponentBindNativeEvent.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
