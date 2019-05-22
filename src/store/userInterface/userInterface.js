const initState = {
  sider: {
    menuList: [{
      title: '首页'
    },
    {
      title: '动画',
      sub: [{
        title: '基础动画'
      },
      {
        title: '动画案例'
      }
      ]
    },
    {
      title: 'UI',
      sub: [{
        title: '按钮'
      },
      {
        title: '图标'
      },
      {
        title: '加载中'
      },
      {
        title: '提醒'
      },
      {
        title: '标签'
      }
      ]
    },
    {
      title: '表单',
      sub: [{
        title: '登录表单'
      }]
    },
    {
      title: 'chart',
      sub: [{
        title: '折线图'
      },
      {
        title: '柱状图'
      },
      {
        title: '饼状图'
      },
      {
        title: '散点图'
      },
      {
        title: '雷达图'
      }
      ]
    }
    ],
    mapTitleToPath: {
      '折线图': 'lineChart',
      'chart': 'chart',
      '柱状图': 'barChart',
      '饼状图': 'pieChart',
      '散点图': 'scatterChart',
      '雷达图': 'radorChart',
      '基础动画': 'basicAnimation',
      '登录表单': 'loginForm'
    },
    mapTitleToIcon: {
      'chart': 'el-icon-s-data',
      '柱状图': 'el-icon-s-data'
    },
    isCollapse: false
  }

};
export default {
  nameSpaced: true,
  state: initState,
  mutations: {
    trigCollapse(state) {
      state.sider.isCollapse = !state.sider.isCollapse;
    }
  },
  actions: {

  }
};
