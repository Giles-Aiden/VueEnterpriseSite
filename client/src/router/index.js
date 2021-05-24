import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/fundraising',
    name: 'Fundraising',
    component: () =>
      import(/* webpackChunkName: "fundraiding" */ '../views/Fundraising.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
  },
  {
    path: '/store',
    name: 'Store',
    component: () =>
      import(/* webpackChunkName: "store" */ '../views/Store.vue'),
    children: [
      {
        path: 'items',
        name: 'StoreItems',
        component: () =>
          import(
            /* webpackChunkName: "storeitems" */ '../views/StoreItems.vue'
          ),
      },
      {
        path: 'editor',
        name: 'StoreEditor',
        component: () =>
          import(
            /* webpackChunkName: "storeeditor" */ '../views/StoreEditor.vue'
          ),
      },
      {
        path: 'checkout',
        name: 'StoreCheckout',
        component: () =>
          import(
            /* webpackChunkName: "storecheckout" */ '../views/StorePayment.vue'
          ),
      },
    ],
  },
  {
    path: '/payment-success',
    name: 'PaymentSuccess',
    component: () =>
      import(/* webpackChunkName: "paymentSuccess" */ '../views/PaymentSuccess.vue'),
  },
  {
    path: '/payment-failure',
    name: 'PaymentFail',
    component: () =>
      import(/* webpackChunkName: "paymentFail" */ '../views/PaymentFail.vue'),
  },
  {
    path: '/wholesale',
    name: 'Wholesale',
    component: () =>
      import(/* webpackChunkName: "wholesale" */ '../views/Wholesale.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
