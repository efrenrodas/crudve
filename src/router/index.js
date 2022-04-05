import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import CrearUser from '../components/CrearUser.vue'
import EditarUser from '../components/EditarUser.vue'
import ListarUser from '../components/ListarUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'CrearUser',
    component: CrearUser
  },
  {
    path: '/editar',
    name: 'EditarUser',
    component: EditarUser
  },
  {
    path: '/listar',
    name: 'ListarUser',
    component: ListarUser
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
