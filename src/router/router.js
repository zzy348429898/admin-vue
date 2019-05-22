import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import store from '../store/rootStore.js';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
    component: () => import('../components/Test.vue')
  }
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: () => import('./components/Admin')
    // },
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

export const asyncRouteMap = [{
  path: '/admin',
  name: 'admin',
  meta: {
    roles: ['admin']
  },
  component: () => import('../components/Admin')
},
{
  path: '*',
  name: '404',
  meta: {
    roles: ['admin', '']
  },
  component: () => import('../components/404.vue')
}
];

let oneOBJ = {
  needProxy: {}
};

let handler = {
  get(target, key, receiver) {
    console.log('get ', key);
    return receiver[key];
  },
  set(target, key, value, receiver) {
    console.log('set ', key, value);
  }
};
let proxy = new Proxy(oneOBJ.needProxy, handler);
