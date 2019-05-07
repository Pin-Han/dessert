import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Layout from '@/views/Layout';
import Dessert from '@/views/Dessert';
import Login from '@/views/Login';
import Cart from '@/views/Cart';
import Dashboard from '@/components/Dashboard';
import ToDashboard from '@/components/ToDashboard';

Vue.use(Router);

export const constantRouterMap = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  // }
  // ,
  {
    path: '*',
    redirect: '/'

  },
  {
    path: '/admin',
    component: ToDashboard,
    name: 'ToDashboard'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
    meta: {
      requiresAuth: true
    },

  },
  {
    path: '/',
    component: Layout,
    //使所有頁面上下不變，只改動中間畫面(children)
    children: [{
      path: '/',
      component: Home,
      name: 'Home',

    }, {
      path: '/about',
      component: () => import( /* webpackChunkName: "about" */ '../views/About'),
      //當切換到頁面後，才會執行該檔案
      name: 'About',

    }, {
      path: '/dessert',
      component: () => import( /* webpackChunkName: "about" */ '../views/Dessert'),
      name: 'Dessert',
    }, {
      path: '/login',
      component: () => import('../views/Login'),
      name: 'Login',
    }, {
      path: '/Cart',
      component: () => import('../views/Cart'),
      name: 'Cart',
      meta: {
        requiresAuth: true
      },
    }]
  },

];

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap,
});
