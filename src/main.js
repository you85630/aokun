// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'

// 支持seo
import MetaInfo from 'vue-meta-info'
// 引入路由
import router from './router'
// 引入vuex
import store from './vuex'
// 重置全局样式
import 'assets/css/reset.css'
// 引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 全局引用自定义模板
import moduleBox from 'components/common/modulebox'
// 全局事件
import utils from './assets/js/utils.js'
// 引入视频播放器
import VueVideoPlayer from 'vue-video-player'
// 引入数据存储
import VueCookie from 'vue-cookie'

import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

// 全局使用
Vue.use(iView)
Vue.use(moduleBox)
Vue.use(VueVideoPlayer)
Vue.use(MetaInfo)

Vue.prototype.utils = utils
Vue.prototype.VueCookie = VueCookie
Vue.config.productionTip = false
// 全局加载进度条
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})
router.afterEach(route => {
  iView.LoadingBar.finish()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
