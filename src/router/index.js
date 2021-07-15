import Vue from 'vue';
import Router from 'vue-router';

import PageDashboard from './PageDashboard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: PageAbout
    // },
    // {
    //   path: '*',
    //   component: Page404
    // },
  ]
})