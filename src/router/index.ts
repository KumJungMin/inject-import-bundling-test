import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/pageA',
    name: 'PageA',
    component: () => import('@/views/PageA.vue'),
  },
  {
    path: '/pageB',
    name: 'PageB',
    component: () => import('@/views/PageB.vue'),
  },
  {
    path: '/pageC',
    name: 'PageC',
    component: () => import('@/views/PageC.vue'),
  },
  {
    path: '/pageD',
    name: 'PageD',
    component: () => import('@/views/PageD.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
