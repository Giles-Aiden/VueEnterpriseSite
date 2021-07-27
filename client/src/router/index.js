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
            /* webpackChunkName: "storeItems" */ '../views/StoreItems.vue'
          ),
      },
      {
        path: 'editor/:id',
        name: 'StoreEditor',
        component: () =>
          import(
            /* webpackChunkName: "storeEditor" */ '../views/StoreEditor.vue'
          ),
      },
      {
        path: 'cart',
        name: 'StoreCart',
        component: () =>
          import(/* webpackChunkName: "storeCart" */ '../views/Cart.vue'),
      },
    ],
  },
  {
    path: '/payment-success',
    name: 'PaymentSuccess',
    component: () =>
      import(
        /* webpackChunkName: "paymentSuccess" */ '../views/PaymentSuccess.vue'
      ),
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
  {
    path: '/wholesale/:id',
    name: 'WholesaleClient',
    component: () =>
      import(
        /* webpackChunkName: "wholesaleclient" */ '../views/WholesaleClient.vue'
      ),
  },
];

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    //, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    }
  },
});

export default router;
