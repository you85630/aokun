import Vue from 'vue'
import Vuex from 'vuex'
import router from 'router'

import login from './modules/login'
import home from './modules/home'
import search from './modules/search'
import details from './modules/details'
import learn from './modules/learn'
import help from './modules/help'
import airworthiness from './modules/airworthiness'
import relation from './modules/relation'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    home,
    search,
    details,
    learn,
    help,
    airworthiness,
    relation
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
    user: {
      name: ''
    },
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
        link: ''
      }, {
        name: '关于我们',
        icon: 'http://p7qasncyc.bkt.clouddn.com/icon-1.png',
        link: ''
      }, {
        name: '新闻动态',
        icon: 'http://p7qasncyc.bkt.clouddn.com/icon-3.png',
        link: ''
      }, {
        name: '产品服务',
        icon: 'http://p7qasncyc.bkt.clouddn.com/icon-4.png',
        link: ''
      }, {
        name: '联系我们',
        icon: 'http://p7qasncyc.bkt.clouddn.com/icon-8.png',
        link: ''
      }
    ]
  },
  getters: {
    navList: state => state.navList,
    user: state => state.user,
    title: state => state.title,
    iconList: state => state.iconList,
    footerList: state => state.footerList,
    sublist: state => state.sublist
  },
  actions: {
    exit ({commit}) {
      commit('exit')
    },
    login ({commit}) {
      commit('login')
    }
  },
  mutations: {
    exit (state) {
      this.user = {}
    },
    login (state) {
      router.push('/learn')
    },
    timestampToTime (timestamp) {
      let date = new Date(timestamp * 1000)
      let Y = date.getFullYear() + '-'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      let D = date.getDate() + ' '
      return Y + M + D
    }
  }
})
