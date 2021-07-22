import Vue from 'vue';
import Router from 'vue-router';

import PageDashboard from './PageDashboard';
import AddPaymentsForm from '../components/AddPaymentsForm';
import PageAbout from './PageAbout';
import Page404 from './Page404';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/add/payment/:cat',
      name: 'addPaymentsForm',
      component: AddPaymentsForm,
      props: (route) => ({ value: route.query.value})
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

export default router;

// router.beforeEach((to, from, next) =>{
//   // debugger;
//   console.log(to, from);
//   next();
// }) 
