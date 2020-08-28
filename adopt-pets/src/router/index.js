import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dogs from '../views/Dogs.vue';
import Cats from '../views/Cats.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs,
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats,
  },
  {
    path: '/pet/:species/:id',
    name: 'Pet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pet.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
