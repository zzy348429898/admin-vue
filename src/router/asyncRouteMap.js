let asyncRouteMap = [{
  path: '/admin',
  name: 'admin',
  meta: {
    roles: ['admin']
  },
  component: () => import('../components/Admin'),
  children: [{
    path: 'lineChart',
    component: () => import('../components/chart/LineChart.vue')
  },
  {
    path: 'barChart',
    component: () => import('../components/chart/BarChart.vue')
  },
  {
    path: 'pieChart',
    component: () => import('../components/chart/PieChart.vue')
  },
  {
    path: 'scatterChart',
    component: () => import('../components/chart/ScatterChart.vue')
  },
  {
    path: 'radorChart',
    component: () => import('../components/chart/RadorChart.vue')
  },
  {
    path: 'basicAnimation',
    component: () => import('../components/animation/BasicAnimation.vue')
  },
  {
    path: 'loginForm',
    component: () => import('../components/LoginForm.vue')
  }
  ]

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
export default asyncRouteMap;
