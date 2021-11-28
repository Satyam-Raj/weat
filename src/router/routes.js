
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      // { path: '/about', component: () => import('pages/about.vue') },
      { path: '/profile', component: () => import('pages/profile.vue') },
      { path: '/FAQs', component: () => import('pages/FAQs.vue') },
      { path: '/logout', component: () => import('pages/logout.vue') },
      { path: '/order_history', component: () => import('pages/order_history.vue') },
      { path: '/wallet', component: () => import('pages/wallet.vue') },


    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
