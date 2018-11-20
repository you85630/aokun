// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入路由
import router from './router'
// 引入vuex
import store from './vuex'
// 重置全局样式
import 'assets/css/reset.css'
import 'babel-polyfill'

// 引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'

// 全局引用自定义模板
import moduleBox from 'components/common/modulebox'

// 全局事件
import utils from './assets/js/utils.js'
Vue.prototype.utils = utils

Vue.use(iView)
Vue.use(moduleBox)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
