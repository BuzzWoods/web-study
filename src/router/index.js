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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/function',
    name: 'Function',
    component: () => import('../views/Function.vue'),
    // redirect: '/function/customInstruction',
    children: [
      {
        path: 'customInstruction',
        name: 'CustomInstruction',
        component: () => import('../views/functions/CustomInstruction.vue')
      },
      {
        path: 'componentBindNativeEvent',
        name: 'ComponentBindNativeEvent',
        component: () => import('../views/functions/ComponentBindNativeEvent.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
