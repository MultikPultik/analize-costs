import Vue from 'vue';
import Router from 'vue-router';

import PageDashboard from '../page/PageDashboard.vue';
import AddPaymentsForm from '../page/AddPaymentsForm.vue';
import PageAbout from '../page/PageAbout.vue';
import Page404 from '../page/Page404.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard,
      children: [
        {
          path: 'add/payment/:category',
          name: 'payment',
          component: AddPaymentsForm,  
          // props: (route) => ({ value: route.query.value})
          props: true
        },
      ]
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
  ],
  
})
