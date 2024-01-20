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
      {
        path: '/kitap',
        component: () => import('../pages/ProductPage.vue'),
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
  {
    path: '/kitap',
    component: () => import('../pages/ProductPage.vue'),
  },
];

export default routes;
