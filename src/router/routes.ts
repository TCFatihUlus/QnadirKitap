import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/sepet',
        component: () => import('../components/ShoppingCart.vue'),
      },
      {
        path: '/banaozel_siparislerim',
        component: () => import('../components/LoginPage.vue'),
      },
      {
        path: '/uyeol',
        component: () => import('../components/SignUpPage.vue'),
      },
      {
        path: '/sahaflar',
        component: () => import('../pages/BookSellers.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/banaozel_siparislerim',
    component: () => import('../components/LoginPage.vue'),
  },
  {
    path: '/uyeol',
    component: () => import('../components/SignUpPage.vue'),
  },
  {
    path: '/sepet',
    component: () => import('../components/ShoppingCart.vue'),
  },
];

export default routes;
