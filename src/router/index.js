import Vue from 'vue';
import Router from 'vue-router';

import {
  PageDashboard,
  PageAbout
} from '@/pages'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    {
      path: '*',
      component: Page404
    },
  ]
})