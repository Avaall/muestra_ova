import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tema1 from '../views/ViewTema1'
import Tema2 from '../views/ViewTema2'
import Tema3 from '../views/ViewTema3'
import Tema4 from '../views/ViewTema4'
import Creditos from '../views/ViewCreditos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tema-1',
    name: 'tema1',
    component: Tema1
  },
  {
    path: '/tema-2',
    name: 'tema2',
    component: Tema2
  },
  {
    path: '/tema-3',
    name: 'tema3',
    component: Tema3
  },
  {
    path: '/tema-4',
    name: 'tema4',
    component: Tema4
  },
  {
    path: '/creditos',
    name: 'creditos',
    component: Creditos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
