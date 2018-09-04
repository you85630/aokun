import Vue from 'vue'
import Vuex from 'vuex'
import router from 'router'

import login from './modules/home/login'
import resource from './modules/home/resource'
import indexSearch from './modules/home/index-search'
import carousel from './modules/home/carousel'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    resource,
    indexSearch,
    carousel
  },
  state: {
    bgimg: 'http://pbsbjhfvy.bkt.clouddn.com/img-6.jpeg',
    imgtitle: '翱坤知识库',
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
    imgList: [
      {
        link: '',
        img: 'http://pbsbjhfvy.bkt.clouddn.com/img-6.jpeg',
        info: '1Explore timely, authoritative and trusted cybersecurity resources to improve your cybersecurity knowledge and product design.'
      }, {
        link: '',
        img: 'http://pbsbjhfvy.bkt.clouddn.com/img-5.jpeg',
        info: '2Explore timely, authoritative and trusted cybersecurity resources to improve your cybersecurity knowledge and product design.'
      }, {
        link: '',
        img: 'http://pbsbjhfvy.bkt.clouddn.com/img-4.jpeg',
        info: '3Explore timely, authoritative and trusted cybersecurity resources to improve your cybersecurity knowledge and product design.'
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
    bgimg: state => state.bgimg,
    imgtitle: state => state.imgtitle,
    navList: state => state.navList,
    user: state => state.user,
    title: state => state.title,
    iconList: state => state.iconList,
    footerList: state => state.footerList,
    imgList: state => state.imgList,
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
    }
  }
})
