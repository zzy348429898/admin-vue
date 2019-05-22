import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import store from '../store/rootStore.js';

Vue.use(Router);

let router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '',
    beforeRouteEnter(to, from, next) {
      let userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (userInfo.role.some((value) => value === 'admin')) {
        next('/admin');
      } else {
        next('/login');
      }
    },
    redirect: '/admin'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/test/Test.vue')
  },
  {
    path: '/axiosTest',
    name: 'axiosTest',
    component: () => import('../components/test/axiosTest.vue')
  }
  ]
});

router.beforeEach((to, from, next) => {
  if (store.state.userInfo.role === '') {
    if (to.path === '/login') {
      next();
    }
    next('/login');
  }
  next();
});
export default router;
