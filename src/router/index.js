import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const index = () => import('views/index')
const home = () => import('components/pages/home')
const search = () => import('components/pages/search')
const data = () => import('components/pages/data')
const login = () => import('components/pages/login')
const help = () => import('components/pages/help')
const register = () => import('components/pages/register')
const details = () => import('components/pages/details')
const airworthiness = () => import('components/pages/airworthiness')
const relation = () => import('components/pages/relation')
const learn = () => import('components/pages/learn')
const forget = () => import('components/pages/forget')
const news = () => import('components/pages/news')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/index',
      component: index,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home,
          meta: {
            requireAuth: true,
            title: '首页'
          }
        }, {
          path: '/search/',
          name: 'search',
          component: search,
          meta: {
            requireAuth: true,
            title: '搜索'
          }
        }, {
          path: '/data',
          name: 'data',
          component: data,
          meta: {
            requireAuth: true,
            title: '数据'
          }
        }, {
          path: '/login',
          name: 'login',
          component: login,
          meta: {
            requireAuth: true,
            title: '登陆'
          }
        }, {
          path: '/learn',
          name: 'learn',
          component: learn,
          meta: {
            requireAuth: true,
            title: '学习'
          }
        }, {
          path: '/help',
          name: 'help',
          component: help,
          meta: {
            requireAuth: true,
            title: '帮助'
          }
        }, {
          path: '/search/details',
          name: 'details',
          component: details,
          meta: {
            requireAuth: true,
            title: '详情'
          }
        }, {
          path: '/search/airworthiness',
          name: 'airworthiness',
          component: airworthiness,
          meta: {
            requireAuth: true,
            title: '适航指令'
          }
        }, {
          path: '/search/relation',
          name: 'relation',
          component: relation,
          meta: {
            requireAuth: true,
            title: '双边关系'
          }
        }, {
          path: '/register',
          name: 'register',
          component: register,
          meta: {
            requireAuth: true,
            title: '注册'
          }
        }, {
          path: '/forget',
          name: 'forget',
          component: forget,
          meta: {
            requireAuth: true,
            title: '修改密码'
          }
        }, {
          path: '/learn/news',
          name: 'news',
          component: news,
          meta: {
            requireAuth: true,
            title: '知识'
          }
        }
      ]
    }
  ]
})

// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // let login = sessionStorage.getItem('login')
  // if (to.meta.requireAuth) {
  //   if (!login) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   }
  // }
  next()
})

export default router
