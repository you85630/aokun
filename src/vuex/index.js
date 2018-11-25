import Vue from 'vue'
import 'babel-polyfill'
import Vuex from 'vuex'

import login from './modules/login'
import home from './modules/home'
import search from './modules/search'
import learn from './modules/learn'
import help from './modules/help'
import airworthiness from './modules/airworthiness'
import relation from './modules/relation'
import forget from './modules/forget'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    login,
    home,
    search,
    learn,
    help,
    airworthiness,
    relation,
    forget
  },
  state: {
    navList: [
      {
        name: ' 首页',
        link: '/home'
      }, {
        name: '搜索',
        link: '/search'
      }, {
        name: '数据',
        link: '/data'
      }, {
        name: '学习',
        link: '/learn'
      }, {
        name: '帮助',
        link: '/help'
      }
    ],
    title: '您的移动工程资源目标',
    iconList: ['ios-analytics', 'md-aperture', 'md-baseball', 'ios-cloud-circle'],
    footerList: [
      {
        name: '新闻公告',
        link: ''
      }, {
        name: '客户销售',
        link: ''
      }, {
        name: '关于翱坤',
        link: ''
      }, {
        name: '条款条件',
        link: ''
      }
    ],
    sublist: [
      {
        name: '首页',
        icon: 'http://p7qasncyc.bkt.clouddn.com/icon-2.png',
        link: 'http://www.aerotech.site/plus/list.php?tid=1'
      }, {
        name: '关于我们',
        icon: 'http://p7qasncyc.bkt.clouddn.com/icon-1.png',
        link: ''
      }, {
        name: '新闻动态',
        icon: 'http://p7qasncyc.bkt.clouddn.com/icon-3.png',
        link: 'http://www.aerotech.site/plus/list.php?tid=5'
      }, {
        name: '产品服务',
        icon: 'http://p7qasncyc.bkt.clouddn.com/icon-4.png',
        link: 'http://www.aerotech.site/plus/list.php?tid=2'
      }, {
        name: '联系我们',
        icon: 'http://p7qasncyc.bkt.clouddn.com/icon-8.png',
        link: 'http://www.aerotech.site/plus/list.php?tid=6'
      }
    ]
  },
  getters: {
    navList: state => state.navList,
    title: state => state.title,
    iconList: state => state.iconList,
    footerList: state => state.footerList,
    sublist: state => state.sublist
  }
})
