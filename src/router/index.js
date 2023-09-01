import { createRouter, createWebHistory } from 'vue-router'
const Home        = () => import('../views/HomeView.vue')
const Library     = () => import('../views/LibraryView.vue');
const History     = () => import('../views/HistoryView.vue');
const Sports      = () => import('../views/SportsView.vue');
const Bangladesh  = () => import('../views/BanglaView.vue');
const World       = () => import('../views/WorldView.vue');
const Science     = () => import('../views/ScienceView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/library',
      name: 'library',
      component: Library
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/sports',
      name: 'sports',
      component: Sports
    },
    {
      path: '/bangladesh',
      name: 'bangladesh',
      component: Bangladesh
    },
    {
      path: '/world',
      name: 'world',
      component: World
    },
    {
      path: '/science',
      name: 'science',
      component: Science
    },
  ]
})

export default router
