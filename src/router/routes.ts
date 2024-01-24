const routes = [
  {
    name: '',
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/sepet',
        component: () => import('../pages/ShoppingCartPage.vue'),
      },
      {
        path: '/banaozel_siparislerim',
        component: () => import('../pages/LoginPage.vue'),
      },
      {
        path: '/uyeol',
        component: () => import('../pages/SignUpPage.vue'),
      },
      {
        path: '/sahaflar',
        component: () => import('../pages/BookSellers.vue'),
      },
      {
        path: '/kitap',
        component: () => import('../pages/ProductPage.vue'),
      },
      {
        path: '/kitap/:id',
        component: () => import('../pages/ProductInfo.vue'),
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
    component: () => import('../pages/LoginPage.vue'),
  },
  {
    path: '/uyeol',
    component: () => import('../pages/SignUpPage.vue'),
  },
  {
    path: '/sepet',
    component: () => import('../pages/ShoppingCartPage.vue'),
  },
  {
    path: '/kitap',
    component: () => import('../pages/ProductPage.vue'),
  },
];

export default routes;
