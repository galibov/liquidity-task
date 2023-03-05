import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',

    component: () => import('layouts/MainLayout.vue'),
    children: [{ name: 'home', path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/category/:category',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ name: 'category', path: '', component: () => import('pages/CategoryPage.vue') },
    ],

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
