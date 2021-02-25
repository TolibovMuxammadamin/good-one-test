import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from "@/layouts/DefaultLayout";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/views/Order')
      }
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
